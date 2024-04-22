import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postRegisterUser } from "../../../util/axios";
import { toast } from "react-toastify";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function registerUser(e) {
    e.preventDefault();
    toast.success("hello");
    console.log("check", email, name, password);
    const response = await postRegisterUser({ name, email, password });
    if (response) {
      navigate("/");
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-lg mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder={"Nguyen Van A"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder={"t@gmail.com"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Register</button>
          <div className="text-center py-2">
            Nếu bạn đã có tài khoản?{" "}
            <Link className="underline text-br" to={"/signin"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
