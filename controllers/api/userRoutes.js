const router = require("express").Router();
const { User } = require("../../models")

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const userData = await User.create(req.body)
        console.log(userData);
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = userData.id
            res.status(200).json(userData);
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({username: req.body.username});
        if(!userData) {
            res.status(400).json({message: "Username not found"})
            return
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect Password.' });
          return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = userData._id
            res.status(200).json({user: userData, message: 'Log In Successful'})
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.get('/page/:_id', async (req, res) => {
    const user = await User.findOne({_id: req.params._id})
    console.log(user)
    res.json(user)
})

router.get('/loggedIn', (req, res) => {
    if(req.session.userId) {
        res.json({loggedIn: true})
    }
    else {
        res.json({loggedIn: false})
    }
})

router.get('/logout', (req, res) => {
        console.log("Session Destroyed!")
        req.session.destroy()
        res.json({message: "Session Destroyed"})
})

router.get("/session", (req, res) => {
    res.json(req.session.userId)
})

router.get("/me", async (req, res) => {
    const user = await User.findOne({_id: req.session.userId}).select({"username": 1, "_id": 1, "email": 1})
    if(!user) {
        console.log("No User")
    }
    res.json(user)
})

module.exports = router;