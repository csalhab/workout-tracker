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

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
