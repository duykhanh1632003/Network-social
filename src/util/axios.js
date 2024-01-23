import axios from "axios";
const postRegisterUser = ({ name, email, password }) => {
  return axios.post("/register", {
    name,
    email,
    password,
  });
};

export { postRegisterUser };
