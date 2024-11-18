const User = require("../models/userModel.js");
const home = async (req, res) => {
  try {
    res.send("This is api/auth route");
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error });
  }
};

const register = async (req, res) => {
  try {
    const newuser = req.body;
    const userExist =await User.findOne({email:newuser.email});
    if (userExist) {
        return res.status(400).json({msg:"user already exists"});
    }
    await User.create(newuser);
    res.status(201).json({msg:"user created"});
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error });
  }
};
const login = async (req, res) => {
  try {
    res.send("This is api/auth/login route");
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error });
  }
};

module.exports = { home, register, login };
