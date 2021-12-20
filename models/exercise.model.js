//model or schema ; bascially a blueprint for the user's excercises

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    goal: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});
// this is the fomate of the exercise model which will be stored in the database
const Exercise = mongoose.model("Exercise",exerciseSchema);
module.exports = Exercise;