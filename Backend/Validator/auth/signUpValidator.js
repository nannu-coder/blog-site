const { body } = require("express-validator");
const User = require("../../Models/User");

const signUpValidator = [
  body("userName")
    .isLength({ min: 2, max: 15 })
    .withMessage("please insert a valid User Name")

    .custom(async (userName) => {
      let user = await User.findOne({ userName });
      if (user) {
        return Promise.reject("userName Already Used");
      }
    })
    .trim(),

  body("Phone")
    .isLength({ min: 11 })
    .withMessage("please insert a valid Number"),

  body("Email")
    .isEmail()
    .withMessage("please insert a valid Email")
    .custom(async (email) => {
      let usedEmail = await User.findOne({ email });
      if (usedEmail) {
        return Promise.reject("E-mail already in user");
      }
      return true;
    })
    .normalizeEmail(),

  body("Password")
    .isLength({ min: 5 })
    .withMessage("Password should be atleast 5 chars"),

  body("confirmPassword").custom((confirmPassword, { req }) => {
    if (confirmPassword !== req.body.Password) {
      throw new Error("Passsword does not match");
    }
    return true;
  }),
];

module.exports = signUpValidator;
