// to create a route
const router = require('express').Router();

// import User model
let User = require('../models/user.js');

// for route /users/ to find (get) all users from mongoDB atlas DB
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// for route /users/add to add (post) new user
router.route('/add').post((req, res) => {
    // username is part of request body
    const username = req.body.username;

    // creates new instance of User using the username
    const newUser = new User({
        username
    });

    // saved to mongoDB atlas database
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;