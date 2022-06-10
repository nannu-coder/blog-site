//Name, Phone, Email, Password, Profile

const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: Number,
      maxlength: 14,
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
    profile: {
      type: Schema.Types.ObjectId,
      ref: "profile",
    },
  },
  {
    timestamps: true,
  }
);

const User = model("user", userSchema);

module.exports = User;
