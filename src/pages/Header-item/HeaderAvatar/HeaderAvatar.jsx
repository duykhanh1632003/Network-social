import { BsChevronDown } from "react-icons/bs";
import { useEffect } from "react";
import useComponentHideAvatar from "../../../hooks/useComponentHideAvatar";

const HeaderAvatar = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentHideAvatar(false);

  useEffect(() => {
    if (isComponentVisible) {
      // Use a more reasonable timeout duration, or remove it if not necessary
      const timeout = setTimeout(() => {
        setIsComponentVisible(false);
      }, 500000000000); // 5 seconds

      return () => clearTimeout(timeout);
    }
  }, [isComponentVisible, setIsComponentVisible]);

  return (
    <div ref={ref}>
      <div
        className="box-right-top-bar-item"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        <div>
          <img
            src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
            className="avatar-topbar"
            alt="Avatar"
          />
        </div>
        <div className="absolute bg-gray-100 rounded-full w-[12px] h-[12px] flex items-center justify-center ml-7 mt-7 cursor-pointer">
          <BsChevronDown className="text-[7px] font-semibold" />
        </div>
      </div>
      {isComponentVisible && (
        <div
          style={{ boxShadow: "5px 5px 5px 5px rgb(0 0 0 / 0.1)" }}
          className="absolute mt-[5px]	 p-1 bg-[#FFFFFF] w-[330px] h-[400px] flex ml-[-290px] rounded-lg pl-[1px]"
        >
          <div
            style={{ boxShadow: "2px 2px 3px 2px rgb(0 0 0 / 0.1)" }}
            className="h-[60px] w-full p-2 cursor-pointer bg-[#FFFFFF] flex items-center text-white rounded-lg hover:bg-[#d7d6d6]"
          >
            <div className="w-[39px] shadow-2xl	 h-[39px] rounded-full object-fit mr-2  ">
              <img
                className="w-full h-full rounded-full"
                src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
                alt="avatar"
              />{" "}
            </div>
            <div className="text-black font-medium">Hoàng Quốc Toàn</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderAvatar;
