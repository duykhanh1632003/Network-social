"use strict";

const { findById } = require("../services/apiKey.service");

const HEADER = {
  API_KEY: "x-api-key",
  AUTHORIZATION: "authorization",
};

const apiKey = async (req, res, next) => {
  try {
    const key = req.headers[HEADER.API_KEY].toString();
    if (!key) {
      return res.status(403).json({
        message: "Key error forbidden",
      });
    }
    const objectKey = await findById(key);
    if (!objectKey)
      res.status(403).json({
        message: "object key forbidden error",
      });
    return next();
  } catch (e) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
const permission = (permissionCode) => {
  return (req, res, next) => {
    if (!req.objKey || !req.objKey.permissions) {
      // Kiểm tra req.objKey tồn tại và có thuộc tính permissions
      return res.status(403).json({
        message: " objKey Permission denied",
      });
    }
    const validPermission = req.objKey.permissions.includes(permissionCode); // Sửa includes thành includes
    if (!validPermission) {
      return res.status(403).json({
        message: "Permission denied",
      });
    }
    return next();
  };
};

module.exports = { apiKey, permission };
