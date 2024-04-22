import { useState } from "react";
import CreatePost from "./CreatePost";

const Posts = () => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="h-[67px] w-full bg-red-300 flex items-center justify-start ">
      <div className="w-[40px] h-[40px] rounded-full ml-[13px] mt-[10px]">
        <img
          className="rounded-full w-[40px] h-[40px]"
          src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
          alt="avatar"
        />
      </div>
      <input
        onClick={() => setModalShow(true)}
        className="w-[509px] h-[39px] rounded-3xl mt-[10px] ml-[8px] pl-[14px] cursor-pointer border-none outline-none"
        placeholder="Toàn ơi bạn đang nghĩ gì thế?"
      />
      <CreatePost show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Posts;
