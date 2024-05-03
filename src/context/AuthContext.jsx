import { createContext, useCallback, useEffect, useState } from "react";
import { axiosNotHaveAuth } from "../util/axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "",
  });
  const [loginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("User");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const registerUser = useCallback(
    async (e) => {
      e.preventDefault();
      setIsRegisterLoading(true);
      setRegisterError(null);

      try {
        const response = await axiosNotHaveAuth.post(
          "api/user/signup",
          registerInfo
        );

        setIsRegisterLoading(false);

        if (response.data.errCode === 1) {
          return setRegisterError(response.data);
        }

        localStorage.setItem("islogin", true);
        localStorage.setItem("User", JSON.stringify(response.data));
        setUser(response.data);
      } catch (error) {
        setIsRegisterLoading(false);
        console.error("Error registering:", error);
      }
    },
    [registerInfo]
  );

  const loginUser = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoginLoading(true);
      setLoginError(null);

      try {
        const response = await axiosNotHaveAuth.post("users/login", loginInfo);

        setIsLoginLoading(false);

        if (response.data.errCode === 1) {
          return setLoginError(response.data);
        }

        localStorage.setItem("islogin", true);
        localStorage.setItem("User", JSON.stringify(response.data));
        setUser(response.data);
      } catch (error) {
        setIsLoginLoading(false);
        console.error("Error logging in:", error);
      }
    },
    [loginInfo]
  );

  const logoutUser = useCallback(() => {
    localStorage.removeItem("User");
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        updateRegisterInfo,
        registerUser,
        registerError,
        isRegisterLoading,
        logoutUser,
        loginInfo,
        loginUser,
        loginError,
        updateLoginInfo,
        isLoginLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
