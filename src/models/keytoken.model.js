"use strict";
const mongoose = require("mongoose"); // Erase if already required
const DOCUMENT_NAME = "keyToken";
const COLLECTION_NAME = "keyTokens";

const keyTokenSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    publicKey: {
      type: String,
      required: true,
    },
    privateKey: {
      type: String,
      required: true,
    },
    refreshTokenUsed: {
      type: Array,
      default: [],
    },
    refreshToken: {
      type: String,
      required: true,
    },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  }
);

//Export the model
module.exports = { keyToken: mongoose.model(DOCUMENT_NAME, keyTokenSchema) };
