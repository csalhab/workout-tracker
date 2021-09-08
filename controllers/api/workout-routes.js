const router = require("express").Router();
const db = require("../../models");

// GET /api/workouts
router.get("/", (req, res) => {
  //will use db.Workout.?
  res.send("hit GET /api/workouts ok");
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
