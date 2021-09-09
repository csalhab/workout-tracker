const router = require("express").Router();
const db = require("../../models");

// GET /api/workouts
router.get("/", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      console.log("start getLastWorkout: GET /api/workouts -------");
      console.log(dbWorkout);
      console.log("end getLastWorkout: GET /api/workouts -------");
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
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
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
