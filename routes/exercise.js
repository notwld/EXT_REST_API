//Excerise Routes

const router = require("express").Router();
const exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
    exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json("Error: " + err));
}
);
router.route("/add").post((req, res) => {
    const username = req.body.username;
    const goal = req.body.goal;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new exercise({ username, goal, duration, date });
    newExercise.save()
        .then(() => res.json("Exercise added!"))
        .catch(err => res.status(400).json("Error: " + err));
        
});
module.exports = router;

