"use strict";

const mongoose = require("mongoose");

const DOCUMENT_NAME = "comment";
const COLLECTION_NAME = "comments";

const commentSchema = new mongoose.Schema(
  {
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: "comment" },
    childrenId: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
    likes: [{ type: Schema.Types.ObjectId, ref: "likeComment" }],
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);
module.exports = { comment: mongoose.model(DOCUMENT_NAME, commentSchema) };