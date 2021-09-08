const router = require("express").Router();
const db = require("../../models");

// GET /api/workouts
router.get("/", (req, res) => {
  // db.Workout.find({}, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.json(data);
  //   }
  // });
  db.Workout.find({})
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
  //res.send("hit GET /api/workouts ok"); //this was just for setup
});

// GET /api/workouts/:id
router.get("/:id", (req, res) => {
  res.send("hit GET /api/workouts/:id ok");
});

// POST /api/workouts/:id
router.post("/:id", (req, res) => {
  res.send("hit POST /api/workouts/:id ok");
});

// PUT /api/workouts/:id
router.put("/:id", (req, res) => {
  res.send("hit PUT /api/workouts/:id ok");
});

// /api/workouts/range
router.get("/range", (req, res) => {
  res.send("hit GET /api/workouts/range ok");
});

module.exports = router;
