"use strict";
const express = require("express");
const asyncHandler = require("../../helpers/asyncHandler");
const { authentication } = require("../../auth/authUtils");
const accessController = require("../../controllers/access.controller");
const router = express.Router();

router.post("/user/login", asyncHandler(accessController.login));
router.post("/user/signup", asyncHandler(accessController.signup));

router.use(authentication);
router.post("/user/logout", asyncHandler(accessController.logout));

router.post(
  "/user/handleRefreshToken",
  asyncHandler(accessController.handlerRefreshToken)
);
module.exports = router;
