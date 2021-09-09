const router = require("express").Router();
const db = require("../../models");

// GET /api/workouts
router.get("/", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      console.log("start getLastWorkout: GET /api/workouts -------");
      console.log(dbWorkout);
      console.log("end getLastWorkout: GET /api/workouts -------");
      //need/get last workout
      const lastWorkout = dbWorkout[dbWorkout.length - 1];
      console.log("lastWorkout: ", lastWorkout);
      //durationSum will hold sum of duration as exercises are added (& must set equal to 0 else NaN!!)
      let durationSum = 0;
      //loop thru the last workout's exercises and calculate what will be set to totalDuration which is now a field in model and add field/totalDuration to workout
      lastWorkout.exercises.forEach((exercise) => {
        durationSum += exercise.duration;
      });
      //ad field/totalDuration to last workout
      console.log("durationSum: ", durationSum);
      lastWorkout.totalDuration = durationSum;
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
  //res.send("hit GET /api/workouts ok"); //this was just for setup
});

// POST /api/workouts
router.post("/", ({ body }, res) => {
  db.Workout.create(body)
    .then((dbWorkout) => {
      console.log("start createWorkout: POST /api/workouts -------");
      console.log(body);
      console.log(dbWorkout);
      res.json(dbWorkout);
      console.log("end createWorkout: POST /api/workouts -------");
    })
    .catch((err) => {
      res.json(err);
    });
  //res.send("hit POST /api/workouts ok");  //this was just for setup
});

// PUT /api/workouts/:id
router.put("/:id", (req, res) => {
  console.log("inside PUT, req.body: ", req.body);
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      //https://docs.mongodb.com/manual/reference/operator/update/inc/
      //"The $inc operator increments a field by a specified value and has the following form:"
      //this $inc is needed in order to get the new field totalDuration added to workouts that do not have as of yet have it!
      //onlly after adding this, did I see totalDuration field added to the workout I added exercise to!
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body },
    },
    { new: true }
  )
    .then((dbWorkout) => {
      console.log("start addExercise: PUT /api/workouts/:id -------");
      console.log(dbWorkout);
      res.json(dbWorkout);
      console.log("end addExercise: PUT /api/workouts/:id -------");
    })
    .catch((err) => {
      res.json(err);
    });
  //res.send("hit PUT /api/workouts/:id ok");  //this was just for setup
});

// /api/workouts/range
router.get("/range", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      console.log("start getWorkoutsInRange: GET /api/workouts/range -------");
      console.log(dbWorkout);
      console.log("end getWorkoutsInRange: GET /api/workouts/range -------");
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
  //res.send("hit GET /api/workouts/range ok"); //this was just for setup
});

module.exports = router;
