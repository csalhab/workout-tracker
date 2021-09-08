const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day.
//I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercise: [
    {
      name: {
        type: String,
        trim: true,
      },
      type: {
        type: String,
        trim: true,
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      duration: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

// WorkoutSchema.methods.coolifier = function () {
//   this.username = `${this.username}...the Coolest!`;
//   return this.username;
// };

// WorkoutSchema.methods.makeCool = function () {
//   this.isCool = true;
//   return this.isCool;
// };

/*
This worked inserting into db using Robo 3T

  {
    "day": "2021-09-07T00:00:00Z",
    "exercises": [
      {
        "type": "resistance",
        "name": "Bicep Curl",
        "duration": 20,
        "weight": 100,
        "reps": 10,
        "sets": 4
      }
    ]
  }
*/

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
