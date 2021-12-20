//Excerise Routes

const router = require("express").Router();
const exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
    exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json("Error: " + err));
}
);
module.exports = router;

