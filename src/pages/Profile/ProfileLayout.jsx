import { Outlet } from "react-router-dom";
import Header from "../HomePage/Header";

const ProfileLayout = () => {
  return (
    <div className="w-full h-full">
      <div className="z-4">
        <Header />
      </div>
    </div>
  );
};

export default ProfileLayout;
