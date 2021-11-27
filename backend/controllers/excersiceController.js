const ExerciseModel = require("../model/exerciseModel");

//excersice controllers

//get all excersises
const getAllExercises = async (req, res) => {
  try {
    const excersice = await ExerciseModel.find();
    res.status(200).json({ excersice });
  } catch (error) {
    res.status(500).json({
      msg: "cannot process the request",
    });
  }
};

//add new excersice

const addExercise = async (req, res) => {
  try {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    //checking for the fileds that they are not null helper method
    if (username && description && duration && date) {
      const newExcersice = new ExerciseModel({
        username,
        description,
        duration,
        date,
      });
      //save the d0cument into the collection
      await newExcersice.save();
      //response
      res.status(200).json({ newExcersice });
    } else {
      res.status(400).json({
        msg: "some fileds are empty fill them and try again",
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "cannot process the request",
    });
  }
};

//delete a excersize by id
const deleteExcersise = async (req, res) => {
  try {
    const excersise = await ExerciseModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msg: "item deleted",
    });
  } catch (error) {
    res.status(500).json({
      msg: "cannot process the request",
    });
  }
};

//find excersise by the id
const getExcersiseById = async (req, res) => {
  try {
    const excersise = await ExerciseModel.findById(req.params.id);
    res.status(200).json({
      excersise,
    });
  } catch (error) {
    res.status(500).json({
      msg: "excersise not found",
    });
  }
};

//update a excersise by its id
const patchExcersise = async (req, res) => {
  const { id: excersiseId } = req.params;
  const query = { _id: excersiseId };
  const excersise = await ExerciseModel.findByIdAndUpdate(query, req.body, {
    runValidators: true,
    new: true,
  });

  if (!excersise) {
    res.status(400).json({
      msg: `cannot deal with the id ${excersiseId}`,
    });
  }
  res.status(200).json(excersise);
};

module.exports = {
  getAllExercises,
  addExercise,
  deleteExcersise,
  getExcersiseById,
  patchExcersise,
};
