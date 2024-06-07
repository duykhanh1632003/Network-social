import FriendRequest from "./FriendRequest";

const FriendContainer = () => {
  return (
    <div className=" bg-[#EDEFF2] w-full">
      <div className="flex justify-between pt-[36px] pr-[36px] pl-[36px]">
        <div className="text-2xl font-bold">Lời mời kết bạn</div>
        <div className="text-[#396cc9]">Xem tất cả</div>
      </div>
      <div>
        <FriendRequest />
      </div>
    </div>
  );
};

export default FriendContainer;
