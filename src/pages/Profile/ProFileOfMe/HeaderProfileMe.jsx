import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { axiosHaveAuth } from "../../../util/axios";
const HeaderProfileMe = ({ id }) => {
  const instance = axiosHaveAuth();

  //   const [dataUser, setDataUser] = useState(null);

  //   useEffect(() => {
  //     const getDataOfUser = async () => {
  //       const getDataUser = instance.get(`/getProfile/:${id}`);
  //     };
  //     getDataOfUser();
  //   }, [id]);

  const [showDropdown, setShowDropdown] = useState(false); // State to control the dropdown menu

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  return (
    <div>
      <div className="w-[1094px] h-[404px] ml-[212px] rounded-sm relative">
        <img
          className="w-full h-full object-cover items-center justify-center flex rounded-sm"
          src="/src/assets/anh-bia.jpg"
          alt="anh-bia"
        />
        <div className="h-[161px] w-[1030px] flex">
          {/* avt */}
          <div className="ml-[36px] w-[170px] h-[170px] rounded-full absolute mt-[-28px] bg-white border-4 border-transparent">
            <img
              className="w-[169px] h-[169px] rounded-full object-cover"
              src="/src/assets/anh-dai-dien.jpg"
              alt="avt"
            />
          </div>
          <div className="ml-[220px] mt-[28px]">
            <div className="text-3xl font-bold">Huyền Trang (Buns)</div>
            <div className="text-[#656770] text-sm font-medium mt-[5px] mb-[5px]">
              1020 bạn bè
            </div>
            <div className="h-[31px] w-[31px] flex">
              <div className="avatar-group-profile">
                <div className="avatar-profile">
                  <img
                    src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
                    alt="Avatar"
                  />
                </div>
                <div className="avatar-profile">
                  <img
                    src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
                    alt="Avatar"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex pl-[200px] mt-[48px]">
            <div className="ml-[8px] flex w-[50px] h-[37px] rounded-md bg-[#E4E6EB] justify-center items-center cursor-pointer">
              <div className="text-xl">
                <FaChevronDown />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[0.5px] bg-black w-full"></div>
      </div>
    </div>
  );
};

export default HeaderProfileMe;
