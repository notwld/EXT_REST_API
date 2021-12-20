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
        .catch(error => res.status(400).json("Error: " + error));

});
router.route("/:id").get((req, res) => {
    exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json("Error: " + err));
}); 
router.route("/:id").delete((req, res) => {
    exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json("Exercise deleted."))  
        .catch(err => res.status(400).json("Error: " + err));
});
router.route("/:name").delete((req, res) => {
    exercise.findOneAndDelete({ username: req.params.name })
        .then(() => res.json("Exercise deleted."))
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;

