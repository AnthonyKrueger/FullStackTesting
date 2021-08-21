const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'User' ,
        required: "Character must have a User"
    },
    level: {
        type: Number,
        default: 1
    },
    class: {
        type: String,
        required: "Character must have a class"
    },
    health: {
        type: Number,
        default: 50
    },
    strength: {
        type: Number,
        default: 5
    },
    speed: {
        type: Number,
        default: 5
    },
    defense: {
        type: Number,
        default: 5
    },
    inventory: [
        { type: Schema.Types.ObjectId, ref:"Item"
    }]
})

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;