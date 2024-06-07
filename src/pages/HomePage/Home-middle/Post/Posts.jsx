import { useState } from "react";
import CreatePost from "./CreatePost";

const Posts = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="h-[67px] w-full bg-[#FFFFFF] flex items-center justify-start rounded-lg">
      <div className="w-[40px] h-[40px] rounded-full ml-[13px] mt-[10px]">
        <img
          className="rounded-full w-[40px] h-[40px]"
          src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
          alt="avatar"
        />
      </div>
      <div className="w-[509px] h-[39px] bg-[#F0F2F5] rounded-3xl mt-[10px] ml-[8px] pl-[14px] cursor-pointer border-none outline-none hover:bg-[#E4E6E9]">
        <button
          onClick={() => setModalShow(true)}
          className="flex items-center mt-[9px] text-[#65676B]"
        >
          Toàn ơi bạn đang nghĩ gì thế?
        </button>
      </div>

      <CreatePost
        show={modalShow}
        setModalShow={setModalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Posts;
