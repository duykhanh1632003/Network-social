"use strict";

const { BadRequestError } = require("../core/error.response");
const { post } = require("../models/post.model");
const { user } = require("../models/user.model");

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
    const findUser = user.findById(userId);
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
}

module.exports = PostService;
