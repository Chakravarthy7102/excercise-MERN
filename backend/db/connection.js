const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGOOSE_URI;

const connection = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true });
  console.log("Connected to the Database");
};

module.exports = connection;
