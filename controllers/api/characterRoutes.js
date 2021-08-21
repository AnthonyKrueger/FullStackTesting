const router = require('express').Router();
const {Character, User} = require("../../models");

router.post('/', async(req, res) => {
    try {
        if(!req.session.userId) {
            res.status(400).json({message: 'User not found'})
        }
        const user = await User.findOne({_id: req.session.userId})
        .populate('character')
        if(user.character) {
            res.status(400).json({message: "Character Already Exists"})
        }
        else {
            const newCharacter = await Character.create({class: req.body.class, user: req.session.userId})
            await User.findOneAndUpdate({_id: req.session.userId}, {character: newCharacter._id})
            res.status(200).json(newCharacter)
        }
    }
    catch (error) {
        console.log(error)
    }
})

module.exports = router;