//user routes for the users

const router = require("express").Router();
const user = require("../models/user");

router.route("/").get((req, res) => {
    user.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err));
    });

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const newUser = new user({ username , email });

    newUser.save()
        .then(() => res.json("User added!"))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:user").get((req, res) => {
    //find the user with the name of the user in the url
    user.findOne({ username: req.params.user })
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    //find the user with the id of the user in the url
    user.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error: " + err));

});

//delete a user by name or id

router.route("/:id").delete((req, res) => {
    user.findByIdAndDelete(req.params.id)
        .then(() => res.json("User deleted."))
        .catch(err => res.status(400).json("Error: " + err));
}
);

router.route("/:name").delete((req, res) => {
    user.findOneAndDelete({ username: req.params.name })
        .then(() => res.json("User deleted."))
        .catch(err => res.status(400).json("Error: " + err));
}
);
