import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";
import { axiosNotHaveAuth } from "./../util/axios";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    const success = handleInputErrors(email, password);
    if (!success) return;
    setLoading(true);
    try {
      const body = JSON.stringify({
        email,
        password,
      });
      const res = await axiosNotHaveAuth.post("/api/user/login", body);
      console.log("check res", res);
      const data = await res.data.metadata;
      if (data.error) {
        throw new Error(data.error);
      }
      toast.success("Đăng nhập thành công");
      localStorage.setItem("user", JSON.stringify(data));
      setAuthUser(data);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};
export default useLogin;

function handleInputErrors(email, password) {
  if (!email || !password) {
    toast.error("Hãy điền đủ thông tin");
    return false;
  }

  return true;
}
