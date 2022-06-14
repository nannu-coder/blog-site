const User = require("../Models/User");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

exports.signUpGetController = (req, res, next) => {
  res.json({
    message: "this is signUp get Page",
  });
};

exports.signUpPostController = async (req, res, next) => {
  const { userName, Phone, Email, Password, confirmPassword } = req.body;
  const errorFormatter = (error) => error.msg;
  const errors = validationResult(req).formatWith(errorFormatter);
  console.log(errors);

  if (!errors.isEmpty()) {
    res.send(errors.mapped());
  }

  try {
    let hashPassword = await bcrypt.hash(Password, 10);
    let confirmHashPassword = await bcrypt.hash(confirmPassword, 10);
    const user = new User({
      userName: userName,
      phone: Phone,
      email: Email,
      password: hashPassword,
      confirmPassword: confirmHashPassword,
    });

    let createdUser = await user.save();
    console.log(createdUser);
    res.json(createdUser);
  } catch (e) {
    console.log(e);
    next(e);
  }
};
exports.signInGetController = (req, res, next) => {
  
  res.json('sign In')
};

exports.signInPostController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      console.log("not found email");
      return res.json({
        message: "invalid username and Password",
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.log("not match password");
      return res.json({
        message: "invalid username and Password",
      });
    }

    res.setHeader('Set-Cookie', 'isLoggedIn=true');
  } catch (e) {
    console.log(e);
    next(e);
  }
};
exports.logoutController = (req, res, next) => {};
