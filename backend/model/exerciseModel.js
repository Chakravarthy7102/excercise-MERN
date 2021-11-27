const mongoose = require("mongoose");

const ExcersiceModel = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    date: {
      type: Date,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExcersiceModel", ExcersiceModel);
