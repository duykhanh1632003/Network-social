"use strict";

const mongoose = require("mongoose");

const DOCUMENT_NAME = "post";
const COLLECTION_NAME = "posts";

const postSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    image: { type: String, required: true },
    permission: {
      type: String,
      default: "public",
      enum: ["public", "friend", private],
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    share: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

module.exports = { post: mongoose.model(DOCUMENT_NAME, postSchema) };
