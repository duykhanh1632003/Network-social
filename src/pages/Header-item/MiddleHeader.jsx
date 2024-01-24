import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdScreenSearchDesktop } from "react-icons/md";
import { LuWarehouse } from "react-icons/lu";
import { RiGroup2Line } from "react-icons/ri";

const MiddleHeader = () => {
  return (
    <div className="ml-[145px] w-[590px] flex justify-between mr-[264px]">
        <div className="w-[108px] ml-[4px] flex items-center justify-center mb-[10px] cursor-pointer h-full hover:bg-gray-100 hover:bg-opacity-90 hover:rounded-lg hover:mb-1 active:text-blue-500">
          <AiFillHome className="text-black	text-3xl " />
        </div>

        <div className="w-[107px] ml-[4px] flex items-center justify-center mb-[10px] cursor-pointer h-full hover:bg-gray-100 hover:bg-opacity-90 hover:rounded-lg hover:mb-1 active:text-blue-500">
          {" "}
          <FaUserFriends className="text-black	 text-3xl" />
        </div>
        <div className="w-[107px] ml-[4px] flex items-center justify-center mb-[10px] cursor-pointer h-full hover:bg-gray-100 hover:bg-opacity-90 hover:rounded-lg hover:mb-1 active:text-blue-500">
          {" "}
          <MdScreenSearchDesktop className="text-black	text-3xl" />
        </div>
        <div className="w-[107px] ml-[4px] flex items-center justify-center mb-[10px] cursor-pointer h-full hover:bg-gray-100 hover:bg-opacity-90 hover:rounded-lg hover:mb-1 active:text-blue-500">
          {" "}
          <LuWarehouse className="text-black	 text-3xl" />
        </div>
        <div className="w-[108px] ml-[4px] flex items-center justify-center mb-[10px] cursor-pointer h-full hover:bg-gray-100 hover:bg-opacity-90 hover:rounded-lg hover:mb-1 active:text-blue-500">
          {" "}
          <RiGroup2Line className="text-black	 text-3xl" />
        </div>
      </div>
  )
}

export default MiddleHeader
