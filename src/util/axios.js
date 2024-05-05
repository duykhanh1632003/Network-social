import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const axiosHaveAuth = axios.create({
  baseURL: "http://localhost:8000/v1",
  headers: {
    "Content-Type": "application/json",
    "x-api-key":
      "9bb7a851135545a6005bd79f5f4e33dfb23d46b9e90c281448ef8cc11f2c0c46605fa9dbea510052fed6799537d4df04aa1b28298440b61bc5afa360f7e1fc4b",
  },
});

const axiosNotHaveAuth = () => {
  const { authUser } = useAuthContext();

  return axios.create({
    baseURL: "http://localhost:8000/v1",
    headers: {
      "Content-Type": "application/json",
      "x-api-key":
        "9bb7a851135545a6005bd79f5f4e33dfb23d46b9e90c281448ef8cc11f2c0c46605fa9dbea510052fed6799537d4df04aa1b28298440b61bc5afa360f7e1fc4b",
      authorization: authUser.tokens.accessToken,
      "x-client-id": authUser.user._id,
      refreshtoken: authUser.refreshtoken,
    },
  });
};

export { axiosHaveAuth, axiosNotHaveAuth };
