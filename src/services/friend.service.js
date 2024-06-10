"use strict";

const { default: mongoose } = require("mongoose");
const friendList = require("../models/friendList");
const friendRequest = require("../models/friendRequest");
const { user } = require("../models/user.model");
const { BadRequestError } = require("../core/error.response");

class FriendService {
  static getNonFriends = async (userId) => {
    try {
      // Lấy danh sách bạn bè
      const friendLists = await friendList.findOne({ user: userId }).exec();
      const friends = friendLists ? friendLists.friends : [];

      // Lấy danh sách đã gửi lời mời
      const sendRequests = await friendRequest.find({ sender: userId }).exec();
      const sentRequestIds = sendRequests.map((request) => request.receiver);

      // Lấy danh sách lời mời đã nhận
      const receivedRequests = await friendRequest
        .find({ receiver: userId })
        .exec();
      const receivedRequestIds = receivedRequests.map(
        (request) => request.sender
      );

      const excludedIds = [
        ...friends,
        ...sentRequestIds,
        ...receivedRequestIds,
        new mongoose.Types.ObjectId(userId),
      ];

      // Lấy danh sách người dùng không phải bạn bè
      const nonFriends = await user.find({ _id: { $nin: excludedIds } }).exec();

      // Tính toán bạn chung cho mỗi người dùng không phải bạn bè
      const nonFriendsWithMutualFriends = await Promise.all(
        nonFriends.map(async (nonFriend) => {
          const nonFriendList = await friendList
            .findOne({ user: nonFriend._id })
            .exec();
          const nonFriendFriends = nonFriendList ? nonFriendList.friends : [];

          const mutualFriends = nonFriendFriends.filter((nonFriendFriend) =>
            friends.includes(nonFriendFriend.toString())
          );

          // Lấy thông tin chi tiết của bạn chung
          const mutualFriendsDetails = await user
            .find({ _id: { $in: mutualFriends } })
            .exec();

          return {
            nonFriend: nonFriend,
            mutualFriends: mutualFriendsDetails.map((friend) => ({
              userId: friend._id,
              avatar: friend.avatar,
            })),
          };
        })
      );

      return nonFriendsWithMutualFriends;
    } catch (e) {
      console.log(e);
      throw new BadRequestError("Error fetching non-friends", e);
    }
  };
}

module.exports = FriendService;
