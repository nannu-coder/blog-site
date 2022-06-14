const router = require("express").Router();
const { body } = require("express-validator");
const User = require("../Models/User");
const signUpValidator = require('../Validator/auth/signUpValidator')
const {
  signInGetController,
  signInPostController,
  signUpGetController,
  signUpPostController,
  logoutController,
} = require("../Controllers/authController");

router.get("/signup", signUpGetController);
router.post("/signup", signUpValidator, signUpPostController);

router.get("/signin", signInGetController);
router.post("/signin", signInPostController);

router.get("/logout", logoutController);

module.exports = router;
