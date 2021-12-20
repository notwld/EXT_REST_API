//user routes for the users

const router = require("express").Router();
const User = require("../models/user.model");

router.route("/").get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err));
    });

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const newUser = new User({ username , email });

    newUser.save()
        .then(() => res.json("User added!"))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:user").get((req, res) => {
    //find the user with the name of the user in the url
    User.findOne({ username: req.params.user })
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    //find the user with the id of the user in the url
    User.findById(req.params.id)
        .then(user => res.json(User))
        .catch(err => res.status(400).json("Error: " + err));

});

//delete a user by name or id

router.route("/:id").delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json("User deleted."))
        .catch(err => res.status(400).json("Error: " + err));
}
);

router.route("/:name").delete((req, res) => {
    User.findOneAndDelete({ username: req.params.name })
        .then(() => res.json("User deleted."))
        .catch(err => res.status(400).json("Error: " + err));
}
);

module.exports = router;
