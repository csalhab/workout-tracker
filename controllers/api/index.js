const router = require("express").Router();

const workoutRoutes = require("./workout-routes.js");

router.use("/workout", workoutRoutes);

module.exports = router;
