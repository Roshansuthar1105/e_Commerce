const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique:true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
    default: "customer",
  },
  isAdmin: {
    type: Boolean,
    default: "false",
  },
  products: {
    type: Array,
    default: [],
  },
  profileImage: {
    type: String,
    default: "",
    require: true,
  },
  createdAt:{
    type:Date,
    default:Date.now()
  }
});
const User = new mongoose.model("User", UserSchema);
module.exports = User;
