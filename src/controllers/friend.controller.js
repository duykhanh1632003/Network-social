"use strict";
const { SuccessResponse } = require("../core/success.response");
const FriendService = require("../services/friend.service");

class FriendController {
  handleGetNoneFriend = async (req, res, next) => {
    const data = await FriendService.getNonFriends(req.body.userId);
    new SuccessResponse({
      message: "Get non-friends success",
      metadata: data,
    }).send(res);
  };
}

module.exports = new FriendController();
