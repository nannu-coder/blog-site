//Name, Phone, Email, Password, Profile

const { Schema, model } = require("mongoose");
const Profile = require("./Profile");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: Number,
      maxlength: 14,
      minlength:11,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    profile: {
      type: Schema.Types.ObjectId,
      ref: Profile,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("user", userSchema);

module.exports = User;
