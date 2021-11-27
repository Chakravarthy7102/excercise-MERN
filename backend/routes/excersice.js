const express = require("express");
const router = express.Router();
const {
  getAllExercises,
  addExercise,
} = require("../controllers/excersiceController");

//main route

router.route("/").get(getAllExercises);
router.route("/add").post(addExercise);

module.exports = router;
