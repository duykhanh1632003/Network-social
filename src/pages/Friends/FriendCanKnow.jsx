import React, { useState } from "react";
import "./FriendCanKnow.css";

const FriendCanKnow = () => {
  // Giả định chúng ta có 30 yêu cầu kết bạn
  const friendRequests = Array.from({ length: 29 }, (_, i) => ({
    id: i + 1,
    name: "Trịnh Phương Linh",
    mutualFriends: 36,
    imageUrl: "/src/assets/328619176_717087896492083_6413426032507387658_n.jpg",
  }));

  const [visibleCount, setVisibleCount] = useState(10);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div className="flex flex-wrap pt-2 ml-7 justify-start overflow-y-auto !z-1">
      {friendRequests.slice(0, visibleCount).map((request) => (
        <div
          key={request.id}
          className="h-[361px] w-[210px] bg-[#F9F9F9] rounded-lg m-[5px] shadow-lg"
        >
          <div className="h-[210px] w-full object-fill rounded-lg cursor-pointer">
            <img className="rounded-lg" src={request.imageUrl} alt="Profile" />
          </div>
          <div className="pt-[5px] pl-[12px] pr-[12px] font-medium text-md hover:underline cursor-pointer">
            {request.name}
          </div>
          <div className="flex items-center ml-4 ">
            <div className="h-[16px] w-[24px] flex">
              <div className="avatar-group">
                <div className="avatar">
                  <img className="" src={request.imageUrl} alt="Avatar" />
                </div>
                <div className="avatar">
                  <img className="z-1" src={request.imageUrl} alt="Avatar" />
                </div>
              </div>
            </div>
            <div className="text-[#657374] ml-1">
              {request.mutualFriends} bạn chung
            </div>
          </div>
          <div className="h-[36px] w-[186px] bg-[#DFE9F2] text-[#0067D0] hover:bg-[#d1dce6] ml-2 mt-[7px] rounded-md flex items-center justify-center font-medium cursor-pointer">
            Thêm bạn bè
          </div>
          <div className="h-[36px] w-[186px] bg-[#E4E6EB] ml-2 mt-[7px] rounded-md flex items-center justify-center font-medium cursor-pointer hover:bg-[#E4E6EB]">
            Xóa
          </div>
        </div>
      ))}
      {visibleCount < friendRequests.length && (
        <div className="w-full flex justify-center mt-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={showMore}
          >
            Xem thêm
          </button>
        </div>
      )}
    </div>
  );
};

export default FriendCanKnow;
