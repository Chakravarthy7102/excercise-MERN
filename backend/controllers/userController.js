const UserModel = require("../model/userModel");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(500).json({ msg: "cannot process the request" });
  }
};

const addNewUser = async (req, res) => {
  try {
    const username = req.body.username;
    //check if the user name is empty or not is its empty throw error as an response
    if (username) {
      const user = new UserModel({ username });
      await user.save();
      res.status(200).json({ user });
    } else {
      res.status(404).json({
        msg: "user name cannot be empty",
      });
    }
  } catch (error) {
    res.status(500).json({ msg: "cannot process the request" });
  }
};

module.exports = { getAllUsers, addNewUser };
