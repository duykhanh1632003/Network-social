const { User } = require("./models/User");
const { FriendRequest } = require("./models/FriendRequest");
const { FriendList } = require("./models/FriendList");

// Chấp nhận yêu cầu kết bạn và thêm bạn vào danh sách bạn bè
const acceptFriendRequest = async (requestId) => {
  try {
    const request = await FriendRequest.findById(requestId);
    if (request) {
      request.status = "accepted";
      await request.save();

      // Thêm bạn bè vào danh sách của người gửi
      await FriendList.updateOne(
        { user: request.sender },
        { $addToSet: { friends: request.receiver } },
        { upsert: true }
      );

      // Thêm bạn bè vào danh sách của người nhận
      await FriendList.updateOne(
        { user: request.receiver },
        { $addToSet: { friends: request.sender } },
        { upsert: true }
      );

      console.log("Friend request accepted and friends added successfully!");
    } else {
      console.log("Friend request not found!");
    }
  } catch (error) {
    console.error("Error accepting friend request:", error);
  }
};

// Lấy danh sách bạn bè của người dùng
const getFriendList = async (userId) => {
  try {
    const friendList = await FriendList.findOne({ user: userId }).populate("friends");
    return friendList ? friendList.friends : [];
  } catch (error) {
    console.error("Error getting friend list:", error);
    return [];
  }
};
