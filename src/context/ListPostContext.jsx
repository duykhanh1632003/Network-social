import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { axiosHaveAuth } from "../util/axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imageDb } from "../config/FireBaseUrl";
import { v4 } from "uuid";
import { useAuthContext } from "./AuthContext";

export const ListPostContext = createContext();

export const useListPostContext = () => {
  return useContext(ListPostContext);
};

export const ListPostContextProvider = ({ children }) => {
  const [listPost, setListPost] = useState([]);
  const { authUser } = useAuthContext();
  const instance = axiosHaveAuth();

  const createPost = async (
    inputValue,
    img,
    setImg,
    setInputValue,
    setModalShow
  ) => {
    try {
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
        toast.success("Tạo bài viết thành công");
        setImg(null);
        setInputValue("");
        setModalShow(false); // Đóng modal
        setListPost((prevListPost) => [response.data, ...prevListPost]);
      }
    } catch (error) {
      toast.error("Tạo bài viết không thành công");
      console.error("Error creating post:", error);
    }
  };
  return (
    <ListPostContext.Provider value={{ listPost, setListPost, createPost }}>
      {children}
    </ListPostContext.Provider>
  );
};
