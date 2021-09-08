const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercise: [],

  //   username: {
  //     type: String,
  //     trim: true,
  //     required: "Username is Required",
  //   },

  //   password: {
  //     type: String,
  //     trim: true,
  //     required: "Password is Required",
  //     validate: [({ length }) => length >= 6, "Password should be longer."],
  //   },

  //   email: {
  //     type: String,
  //     unique: true,
  //     match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  //   },

  //   isCool: {
  //     type: Boolean,
  //     default: false,
  //   },
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
