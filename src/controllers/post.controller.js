"use strict";
const { CREATED, SuccessResponse } = require("../core/success.response.js");
const PostService = require("../services/post.service.js");

class PostController {
  handleAddNewPost = async (req, res, next) => {
    const data = await PostService.createPost(req.body);
    new SuccessResponse(data).send(res);
  };
}

module.exports = new PostController();
