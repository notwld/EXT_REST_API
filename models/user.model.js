//user model or schema for mongoose ; bascially a blueprint for the user info
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the schema for the user
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
});
// this is the fomate of the user model which will be stored in the database

const User = mongoose.model("User",userSchema);
module.exports = User;