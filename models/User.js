const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username: {
        type: String,
        unique: true,
        trim: true,
        required: "Username is Required"
    },

    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
      },

      email: {
        type: String,
        unique: true,
        required: "Email is Required",
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },
    
      userCreated: {
        type: Date,
        default: Date.now
      },
    
      lastUpdated: Date,
})

UserSchema.pre("save", async function(next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

UserSchema.methods.checkPassword = function(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
}

const User = mongoose.model("User", UserSchema);

module.exports = User;