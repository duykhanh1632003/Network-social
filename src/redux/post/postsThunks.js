import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  addPost,
} from "./postsSlice";
import { axiosHaveAuth } from "../../util/axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imageDb } from "../../config/FireBaseUrl";
import { toast } from "react-toastify";
import { v4 } from "uuid";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(fetchPostsStart());
    try {
      const response = await axios.get("/api/posts");
      thunkAPI.dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      thunkAPI.dispatch(fetchPostsFailure(error.toString()));
    }
  }
);

export const createNewPost = createAsyncThunk(
  "posts/createNewPost",
  async (
    { inputValue, img, setImg, setInputValue, setModalShow, authUser },
    { dispatch }
  ) => {
    try {
      const instance = axiosHaveAuth();

      console.log("Creating new post..."); // Add this
      let url = "";
      if (img !== null) {
        const imgRef = ref(imageDb, `files/${v4()}`);
        const snapshot = await uploadBytes(imgRef, img.file);
        url = await getDownloadURL(snapshot.ref);
      }

      const body = {
        image: url,
        content: inputValue,
        author: authUser.user._id,
        likes: [],
        comments: [],
        share: [],
      };

      const response = await instance.post("/api/new/post", body);

      if (response) {
        console.log("Post created successfully:", response.data); // Add this
        toast.success("Tạo bài viết thành công");
        setImg(null);
        setInputValue("");
        setModalShow(false); // Đóng modal
        dispatch(addPost(response.data));
      }
    } catch (error) {
      toast.error("Tạo bài viết không thành công");
      console.error("Error creating post:", error); // Add this
    }
  }
);
