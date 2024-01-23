import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdHomeFilled } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { MdScreenSearchDesktop } from "react-icons/md";
import { LuWarehouse } from "react-icons/lu";
import { RiGroup2Line } from "react-icons/ri";
import { HiOutlineHome } from "react-icons/hi";
const Header = () => {
  return (
    <div className="h-[56px] border-l-amber-900 bg-slate-500 pt-[8px] flex">
      <div className="flex w-[304px] ml-[16px]">
        <Link to={"/"} className="w-[40px] rounded-full">
          <img src="/src/assets/Facebook_Logo_(2019).png" alt="logo" />
        </Link>
        <div className="w-[237px] flex bg-slate-600 rounded-full pl-3 ml-[7px]">
          <CiSearch className="mt-3 text-gray-300 mr-2 text-md" />
          <input
            className="border-none bg-slate-600 focus:border-transparent focus:outline-none w-13 rounded-full"
            placeholder="Tìm kiếm trên facebook"
          />
        </div>
      </div>
      <div className="ml-[145px] w-[590px] bg-slate-100 flex justify-between">
        <div className="w-[108px] ml-[4px] flex items-center justify-center mb-[10px] cursor-pointer bg-red-500 h-full :hover: ">
          <HiOutlineHome className="text-black text-4xl" />
        </div>

        <div className="w-[107px] flex items-center justify-center mb-[10px] cursor-pointer bg-slate-400">
          <FaUserFriends className="text-black text-4xl" />
        </div>
        <div className="w-[107px]  flex items-center justify-center mb-[10px] cursor-pointer">
          <MdScreenSearchDesktop className="text-black text-4xl" />
        </div>
        <div className="w-[107px]   flex items-center justify-center mb-[10px] cursor-pointer">
          <LuWarehouse className="text-black text-4xl" />
        </div>
        <div className="w-[108px] mr-[4px] flex items-center justify-center mb-[10px] cursor-pointer">
          <RiGroup2Line className="text-black text-4xl" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
