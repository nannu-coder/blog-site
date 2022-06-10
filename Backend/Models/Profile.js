//user, title, bio, profilepic, links[fb, twitter, ], posts, bookmarks

const { Schema, model } = require("mongoose");
const { schema } = require("./User");

const profileSchema = new schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  bio: {
    type: String,
    trim: true,
    maxlength: 500,
  },
  profilePic: {
    type: String,
  },
  links: {
    website: String,
    facebook: String,
    twitter: String,
    github: String,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  bookmarks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const Profile = model("profile", profileSchema);

module.exports = Profile;
