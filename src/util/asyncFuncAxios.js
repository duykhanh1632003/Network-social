import { axiosHaveAuth } from "./axios";
const instance = axiosHaveAuth();
const handleAddNewPost = (body) => {
  return instance.post("/new/post", body);
};

export { handleAddNewPost };
