import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./SignIn.css";
const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex pl-[272px] bg-[#F0F2F5] w-full h-screen">
      <div className="w-[250px] h-[70px] mt-[99px] mr-[332px]">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
          alt="logo"
        />
      </div>
      <div className="w-[398px] h-[348px] bg-[#FFFFFF] mt-[130px] rounded-1 flex flex-col items-center">
        <div className="relative border border-gray-300 rounded-lg focus-within:border-blue-500 w-[364px] h-[52px] bg-[##FFFFFF] mb-[12px] mt-[18px]">
          <textarea
            className="w-full bg-transparent outline-none resize-none text-sm input-textarea"
            placeholder="Email hoặc số điện thoại"
            onChange={(e) => setEmail(e.target.email)}
          ></textarea>
        </div>
        <div className="relative border border-gray-300 rounded-lg focus-within:border-blue-500 w-[364px] h-[52px] bg-[##FFFFFF] mb-[16px]">
          <input
            type={passwordVisible ? "text" : "password"}
            className="w-full bg-transparent outline-none resize-none text-sm input-textarea h-full ml-[15px]"
            placeholder="Mật khẩu"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
          </button>
        </div>{" "}
        <div className="w-[364px] h-[52px] bg-[#0866FF] hover:bg-[#4889f1] rounded-lg cursor-pointer flex justify-center items-center text-[#FFFFFF] text-xl font-medium">
          Đăng nhập
        </div>
        <div className="mt-[18px] text-sm text-[#0899FF] cursor-pointer relative">
          <span className="group">Quên mật khẩu?</span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SignIn;
