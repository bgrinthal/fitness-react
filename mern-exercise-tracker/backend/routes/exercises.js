// to create a route
const router = require('express').Router();

// import Exercise model
let Exercise = require('../models/exercise.js');

// for route /exercises/ to find (get) all exercises from mongoDB atlas DB
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

// for route /exercises/add to add (post) new exercise
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const name = req.body.name;
    const date = Date.parse(req.body.date)

    //create a new exercise using username, description, name, and date (in model)
    const newExercise = new Exercise({
        username,
        name,
        description,
        duration,
        date
    });

    // saved to mongoDB atlas database
    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// get route /exercise/:id returns specific exercise by mongoDB id
router.route('/:id').get((req, res) => {
    // id located in params
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

// deletes route /exercise/:id specific exercise by mongoDB id
router.route('/:id').delete((req, res) => {
    // id located in params
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// updates route /exercise/:id specific exercise by mongoDB id
router.route('/update/:id').post((req, res) => {
    // id located in params
    Exercise.findById(req.params.id)
        .then(exercise => {
            //set each to the new edited information (overwrites existing information)
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.name = req.body.name;
            exercise.date = Date.parse(req.body.date);

            // saves to database
            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        });
})

module.exports = router;