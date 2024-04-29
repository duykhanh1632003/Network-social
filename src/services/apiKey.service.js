"use strict";
const { v4: uuidv4 } = require("uuid");

const apiKey = require("../models/apikey.model");
const crypto = require("crypto");

const findById = async (key) => {
  try {
    console.log("getkey");
    const newKey = await apiKey.create({
      key: crypto.randomBytes(64).toString("hex"),
      status: true,
      permission: "0000",
    });
    return newKey;
  } catch (error) {
    console.error("Error creating API key:", error);
    throw error;
  }
};

module.exports = {
  findById,
};
