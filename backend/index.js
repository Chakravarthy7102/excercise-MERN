const express = require("express");
const cors = require("cors");
const connection = require("./db/connection");
const app = express();
require("dotenv").config();

//constants
PORT_NUMBER = process.env.PORT || process.env.PORT_NUMBER;

//json middle ware
app.use(express.json());
app.use(cors());

//starting the server
app.get("/", (req, res) => {
  res.send("this is backends first page");
});

const start = () => {
  try {
    //establishing the database connection to the db
    connection();
    app.listen(PORT_NUMBER, () => {
      console.log(`listening at port number ${PORT_NUMBER}`);
    });
  } catch (error) {}
};
start();
