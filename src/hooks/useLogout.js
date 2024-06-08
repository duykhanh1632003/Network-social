import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";
import { axiosHaveAuth } from "./../util/axios";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const instance = axiosHaveAuth(); 
  const logout = async () => {
    setLoading(true);
    try {
      const res = await instance.post("/api/user/logout");
      toast.success("Đăng xuất thành công");
      localStorage.removeItem("user");
      setAuthUser(null);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { logout };
};
export default useLogout;
