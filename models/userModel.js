const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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
// we define pre method to act as middleware for hashing our passwords
UserSchema.pre('save',async function(next){
    // 'this' using 'this' keyword we can access our model
    const user = this;
    if(!user.isModified("password")){
        next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashPassword =await bcrypt.hash(user.password,saltRound);
        user.password = hashPassword;
        next();
    } catch (error) {
        next(error);
    }
    
})

const User = new mongoose.model("User", UserSchema);
module.exports = User;
