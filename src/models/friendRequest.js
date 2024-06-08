"use strict";

const mongoose = require("mongoose");

const DOCUMENT_NAME = "FriendRequest";
const COLLECTION_NAME = "friendrequests";

const friendRequestSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true, collection: COLLECTION_NAME } 
);

module.exports = {
  FriendRequest: mongoose.model(DOCUMENT_NAME, friendRequestSchema),
};
