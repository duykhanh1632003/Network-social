import { FaFacebookMessenger } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import ChangeDarkMode from "../../hooks/ChangeDarkMode";

const RightHeader = () => {
  return (
    <div className=" flex">
      <div className="box-right-top-bar-item">
        <div>
          <ChangeDarkMode />
        </div>
      </div>
      <div className="box-right-top-bar-item">
        <BsGrid3X3GapFill className="text-xl" />
      </div>
      <div className="box-right-top-bar-item">
        <FaFacebookMessenger className="text-xl" />
      </div>
      <div className="box-right-top-bar-item">
        <IoMdNotifications className="text-2xl" />
      </div>
      <div className="box-right-top-bar-item">
        <div>
          <img
            src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
            className="avatar-topbar"
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
