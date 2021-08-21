const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema ({
    itemType: {
        type: String,
        required: "Item must have a type"
    },
    name: {
        type: String,
        required: "Item must have a name"
    }
})

const Item = mongoose.model("Item", ItemSchema);
module.exports = Item