import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";
import { axiosHaveAuth } from "./../util/axios";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await axiosHaveAuth.post("/api/user/logout");
      if (res.metadata) {
        toast.success("Đăng nhập thành công");
        localStorage.removeItem("user");
        setAuthUser(null);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { logout };
};
export default useLogin;
