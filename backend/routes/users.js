const express = require("express");
const router = express.Router();
const { getAllUsers, addNewUser } = require("../controllers/userController");

//main route

router.route("/").get(getAllUsers);
router.route("/add").post(addNewUser);

module.exports = router;
