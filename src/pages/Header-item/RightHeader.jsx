import { FaFacebookMessenger } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

const RightHeader = () => {
  return (
    <div className=" flex">
      <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-gray-100 mr-[8px] cursor-pointer">
        <BsGrid3X3GapFill className="text-xl" />
      </div>
      <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-gray-100 mr-[8px] cursor-pointer">
        <FaFacebookMessenger className="text-xl" />
      </div>
      <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-gray-100 mr-[8px] cursor-pointer">
        <IoMdNotifications className="text-2xl" />
      </div>
      <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-gray-100 mr-[8px] cursor-pointer">
        <div>
          <img
            src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
            className="text-2xl rounded-full relative"
          />
        </div>
        <div className="absolute bg-gray-100 rounded-full w-[12px] h-[12px] flex items-center justify-center ml-7 mt-7 p-[2px] cursor-pointer ">
          <BsChevronDown className="text-[7px] font-semibold " />
        </div>
      </div>
    </div>
  );
};

export default RightHeader;
