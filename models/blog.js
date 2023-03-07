/* eslint-disable no-undef */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    blogtitle: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    thumbnailurl: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    blogbody: {
      type: String,
      required: true,
    },
    allowcomments: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
