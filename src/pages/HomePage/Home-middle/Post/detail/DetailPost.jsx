import { MdCancel, MdPublic } from "react-icons/md";
import RightHeader from "./../../../../Header-item/RightHeader";
import { BsThreeDots } from "react-icons/bs";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import CommentLikeShareDetail from "./CommentLikeShareDetail";
import { FaCaretDown } from "react-icons/fa";
import CommentList from "../../../../Comments/CommentList";
import "./DetailPost.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePostContext } from "../../../../../context/PostContext";
import { CiFaceSmile } from "react-icons/ci";
import SendIcon from "@mui/icons-material/Send";
import Send from "@mui/icons-material/Send";
import LikeIcon from "../../../../../img/likeIcon";
import EmojiPicker from "@emoji-mart/react";
const commentsData = [
  {
    id: "609e14cb2f02c459cc4e1b1g",
    message: "This is the first comment",
    postId: "609e14cb2f02c459cc4e1b1a",
    userId: "609e14cb2f02c459cc4e1b1b",
    parentId: null,
    childrenId: ["609e14cb2f02c459cc4e1b1c", "609e14cb2f02c459cc4e1b1d"],
    user: {
      firstName: "John",
      lastName: "Doe",
      avatar: "path/to/avatar1.jpg",
    },
  },
  {
    id: "609e14cb2f02c459cc4e1b1h",
    message: "Another comment here",
    postId: "609e14cb2f02c459cc4e1b1a",
    userId: "609e14cb2f02c459cc4e1b1c",
    parentId: "609e14cb2f02c459cc4e1b1g",
    childrenId: ["609e14cb2f02c459cc4e1b1b"],
    user: {
      firstName: "Jane",
      lastName: "Smith",
      avatar: "path/to/avatar2.jpg",
    },
  },
  {
    id: "609e14cb2f02c459cc4e1b1a",
    message: "Comment of user",
    postId: "609e14cb2f02c459cc4e1b1a",
    userId: "609e14cb2f02c459cc4e1b1b",
    parentId: "609e14cb2f02c459cc4e1b1h",
    childrenId: [],
    user: {
      firstName: "Jane",
      lastName: "Smith",
      avatar: "path/to/avatar3.jpg",
    },
  },
  {
    id: "609e14cb2f02c459cc4e1b1i",
    message: "Reply to the second comment",
    postId: "609e14cb2f02c459cc4e1b1a",
    userId: "609e14cb2f02c459cc4e1b1d",
    parentId: "609e14cb2f02c459cc4e1b1g",
    childrenId: [],
    user: {
      firstName: "Alice",
      lastName: "Johnson",
      avatar: "path/to/avatar3.jpg",
    },
  },
  {
    id: "609e14cb2f02c459cc4e1b1j",
    message: "Yet another comment",
    postId: "609e14cb2f02c459cc4e1b1a",
    userId: "609e14cb2f02c459cc4e1b1f",
    parentId: null,
    childrenId: [],
    user: {
      firstName: "Bob",
      lastName: "Brown",
      avatar: "path/to/avatar4.jpg",
    },
  },
  {
    id: "609e14cb2f02c459cc4e1b1k",
    message: "A new top-level comment",
    postId: "609e14cb2f02c459cc4e1b1b",
    userId: "609e14cb2f02c459cc4e1b1e",
    parentId: null,
    childrenId: ["609e14cb2f02c459cc4e1b1g"],
    user: {
      firstName: "Charlie",
      lastName: "Davis",
      avatar: "path/to/avatar5.jpg",
    },
  },
  {
    id: "609e14cb2f02c459cc4e1b1l",
    message: "Reply to the new comment",
    postId: "609e14cb2f02c459cc4e1b1b",
    userId: "609e14cb2f02c459cc4e1b1g",
    parentId: "609e14cb2f02c459cc4e1b1k",
    childrenId: [],
    user: {
      firstName: "Eve",
      lastName: "Evans",
      avatar: "path/to/avatar6.jpg",
    },
  },
];

const DetailPost = () => {
  const { post, rootComments } = usePostContext();
  const [commentsInput, setCommentsInput] = useState(null);
  const [textareaHeight, setTextareaHeight] = useState(25);
  const commentListContainerRef = useRef(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const textareaRef = useRef(null);

  const handleTextareaChange = (e) => {
    setCommentsInput(e.target.value);
  };

  const handleEmojiClick = (event, emojiObject) => {
    const cursorPosition = textareaRef.current.selectionStart;
    const textBeforeCursor = commentsInput.substring(0, cursorPosition);
    const textAfterCursor = commentsInput.substring(cursorPosition);

    const newText = textBeforeCursor + emojiObject.emoji + textAfterCursor;
    setCommentsInput(newText);

    // Reposition the cursor
    setTimeout(() => {
      textareaRef.current.selectionStart =
        cursorPosition + emojiObject.emoji.length;
      textareaRef.current.selectionEnd =
        cursorPosition + emojiObject.emoji.length;
      textareaRef.current.focus();
    }, 0);
  };

  return (
    <div className="flex">
      <div>
        <div className="absolute ">
          <div className="w-[40px] h-[40px] rounded-full flex mt-2 ml-4 ">
            <div className="h-[35px] w-[35px] cursor-pointer rounded-full text-[35px] mr-1">
              <MdCancel />
            </div>
            <img src="/src/assets/Facebook_Logo_(2019).png" alt="logo" />
          </div>
        </div>
        <div className="w-[1174px] bg-[#ced9e3] h-[729px] flex items-center justify-center object-contain">
          <img
            className="h-[729px]"
            src="https://tintuc-divineshop.cdn.vccloud.vn/wp-content/uploads/2022/03/review-va-giai-thich-phim-ao-anh-mirage-y-nghia-cua-nhung-nhanh-thoi-gian_623806dc0fdbe.jpeg"
            alt="img"
          />
        </div>
      </div>
      <div className="">
        <div className="mt-2 ml-[120px]">
          <RightHeader />
        </div>
        <div className="w-[362px] pt-[6px] pb-3">
          <div className=" w-[362px] border-b border-gray-400 "></div>
        </div>
        <div className="pl-[16px] pr-[16px] comment-list-container ">
          <div className="flex justify-between">
            <div className="flex ">
              <div className="w-[41px] h-[41px] rounded-full ">
                <img
                  className="w-[41px] h-[41px] rounded-full"
                  src="/src/assets/406860438_1048481983054231_6833658113738926574_n.jpg"
                  alt="avt"
                />
              </div>
              <div className="ml-[8px]">
                <div className="text-md font-bold ">TOP Comments</div>
                <div className="flex">
                  <div className="text-[11px] font-medium pr-1 text-[#606770]">
                    11 phút
                  </div>
                  <div className="text-[#606770]">
                    <MdPublic />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-center h-[50px]">
              <div className="h-[30px] cursor-pointer w-[30px] rounded-full mt-1 flex items-center justify-center  hover:bg-[#eeeaea9f]">
                <BsThreeDots className="text-2xl" />{" "}
              </div>
            </div>
          </div>
          <div className="text-sm">
            Đại ca rồng tính xa thật 🤣🤣 đã thu nạp thằng e mới giải ngũ rồi
          </div>
          <div className="flex justify-between mt-[36px]">
            <div className="flex">
              <LikeIcon />
              <div className="text-[#606770] text-[14px]">7.7K</div>
            </div>
            <div className="flex text-[#606770]">
              <div className="flex items-center justify-center mr-2">
                <div className="mr-1">158</div>
                <div>
                  <FaComment />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="mr-1">62</div>
                <div>
                  <FaShare />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[331px]  pt-[6px]">
            <div className="border-b border-gray-300 w-full"></div>
          </div>
          <CommentLikeShareDetail />
          <div className="w-[331px]  pt-[6px]">
            <div className="border-b border-gray-300 w-full"></div>
          </div>
          <div className="flex items-center justify-end text-[#606770] font-medium cursor-pointer">
            <div>Tất cả bình luận</div>
            <div>
              <FaCaretDown />
            </div>
          </div>
          <div className="w-[331px] pt-[6px] pb-3 ">
            <CommentList comments={rootComments} />
          </div>{" "}
        </div>
        <div className="flex pl-[14px] pr-[11px] h-[76px]  pt-[8px]">
          <div className="w-[33px] h-[33px] rounded-full ">
            <img
              className="w-[33px] h-[33px] rounded-full"
              src="/src/assets/328619176_717087896492083_6413426032507387658_n.jpg"
              alt="avt"
            />
          </div>
          <div className="ml-2 w-[289px] pr-[17px] bg-[#F0F2F5] rounded-2xl">
            <textarea
              onChange={handleTextareaChange}
              className="w-full resize-none bg-transparent outline-none pt-2 pl-1 text-sm"
              placeholder="Viết bình luận..."
              ref={textareaRef}
            />
            <div className="h-[37px] flex w-[289px] p-2 justify-between absolute mt-[-40px]">
              <div className="text-lg">
                {showEmojiPicker && (
                  <div className="absolute z-10 mt-[-440px]">
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                  </div>
                )}
                <CiFaceSmile
                  className="text-[#7B8289] font-medium mt-1 cursor-pointer"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                />
              </div>
              <div className="text-lg">
                <div className="text-lg">
                  {commentsInput ? (
                    <Send style={{ color: "#1167C9" }} fontSize="small" />
                  ) : (
                    <Send style={{ color: "#C2C6CC" }} fontSize="small" />
                  )}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
