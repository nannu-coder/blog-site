// post, user, body, replies

const { toHaveFormValues } = require("@testing-library/jest-dom/dist/matchers");
const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Post',
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    replies: [
      {
        body: {
          type: String,
          required: true,
        },
        user: {
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: toHaveFormValues,
        },
        createdAt: {
          type: Date(),
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Comment = model("comment", commentSchema);

module.exports = Comment;
