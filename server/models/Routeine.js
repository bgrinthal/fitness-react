const mongoose = require('mongoose');

const { Schema } = mongoose;

const routineSchema = new Schema({
  workoutDate: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  reps: {
    type: Number,
    min: 0,
    default: 0
  },
  sets: {
    type: Number,
    min: 0,
    default: 0
  },
  weight: {
    type: Number,
    min: 0,
    default: 0
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exercise'
    }
  ]
});

const Routine = mongoose.model('Routine', routineSchema);

module.exports = Routine;
