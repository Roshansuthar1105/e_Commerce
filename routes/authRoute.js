const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController.js")
authRouter
  .route("/")
  .get(authController.home)
authRouter.route("/register").post(authController.register)
authRouter.route("/login").get(authController.login)

module.exports = authRouter;
