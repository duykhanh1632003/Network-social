"use strict";
const express = require("express");
const asyncHandler = require("../../helpers/asyncHandler");
const { authentication } = require("../../auth/authUtils");
const friendController = require("../../controllers/friend.controller");
const router = express.Router();

router.use(authentication);
router.get("/noneFr/user", asyncHandler(friendController.handleGetNoneFriend));

module.exports = router;
