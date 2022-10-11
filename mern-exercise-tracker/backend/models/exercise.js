const mongoose = require('mongoose');

const Schema = mongoose.Schema;

exerciseSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    exercise:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;