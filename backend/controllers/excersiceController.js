const ExerciseModel = require("../model/exerciseModel");

//excersice controllers

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

module.exports = { getAllExercises, addExercise };
