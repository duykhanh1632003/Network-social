"use strict";

const mongoose = require("mongoose");

const DOCUMENT_NAME = "user";
const COLLECTION_NAME = "users";

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String }, // Số điện thoại
    address: { type: String },
    gender: { type: String, enum: ["male", "female", "other"], required: true }, // Giới tính
    dateOfBirth: { type: Date }, // Ngày sinh
    avatar: { type: String }, // Đường dẫn đến hình ảnh đại diện
  },
  { timestamps: true }
);
module.exports = { user: mongoose.model(DOCUMENT_NAME, userSchema) };
