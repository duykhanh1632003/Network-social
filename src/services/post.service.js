"use strict";

const { BadRequestError } = require("../core/error.response");
const { post } = require("../models/post.model");
const { user } = require("../models/user.model");
const { likeComment } = require("../models/likeComment.model");
const { comment } = require("../models/comment.model");
const friendList = require("../models/friendList");

class PostService {
  static createPost = async ({
    content,
    image,
    author,
    likedPost,
    comments,
    share,
  }) => {
    const newPost = await post.create({
      content,
      image,
      author,
      likedPost,
      comments,
      share,
    });
    if (!newPost) {
      throw new BadRequestError("Cannot create post");
    }
    return newPost;
  };

  static likedPost = async ({ userId, postId }) => {
    const existingPost = await post.findById(postId);
    if (!existingPost) {
      throw new Error("Bài đăng không tồn tại");
    }
    const isLiked = existingPost.likes.includes(userId);
    if (isLiked) {
      existingPost.likes = existingPost.likes.filter((id) => id !== userId);
    } else {
      existingPost.likes.push(userId);
    }
    await existingPost.save();
  };

  static savePost = async ({ userId, postId }) => {
    const existingPost = await post.findById(postId);
    if (!existingPost) {
      throw new Error("Bài đăng không tồn tại");
    }
    const findUser = await user.findById(userId);
    if (!findUser) {
      throw new BadRequestError("Không tìm được user");
    }
    const isSaved = findUser.savePosts.includes(postId);
    if (isSaved) {
      findUser.savePosts = findUser.savePosts.filter((id) => id !== userId);
    } else {
      findUser.savePosts.push(userId);
    }
    await findUser.save();
  };

  static handleGetAllPosts = async (userId) => {
    const posts = await post
      .find()
      .populate("author", "firstName lastName avatar")
      .populate("comments");
    const friendLists = await friendList.find({ user: userId });

    const allPosts = posts.filter((p) =>
      friendLists.some((fl) => fl.friends.includes(p.author._id))
    );

    const postsWithComments = await Promise.all(
      allPosts.map(async (p) => {
        const comments = await comment
          .find({ postId: p._id })
          .populate("userId", "firstName lastName avatar");
        return { ...p._doc, comments };
      })
    );

    return postsWithComments;
  };
}

module.exports = PostService;
