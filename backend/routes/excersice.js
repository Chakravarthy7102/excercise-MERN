const express = require("express");
const router = express.Router();
const {
  getAllExercises,
  addExercise,
  deleteExcersise,
  getExcersiseById,
  patchExcersise,
} = require("../controllers/excersiceController");

//main route

router.route("/").get(getAllExercises);
router.route("/add").post(addExercise);
router.route("/:id").delete(deleteExcersise).get(getExcersiseById);
router.route("/update/:id").patch(patchExcersise);

module.exports = router;
