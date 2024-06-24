import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, likePost } from "./../../../../redux/post/postsThunks";
import CommentLikeShare from "./CommentLikeShare";
import { MdPublic } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment";

const Posted = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.list);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const userId = useSelector((state) => state.auth.user._id); // Assuming you have user ID in auth state

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleLike = (postId) => {
    dispatch(likePost({ postId, userId }));
  };

  const timeFromNow = (date) => {
    const now = moment();
    const postDate = moment(date);
    if (now.diff(postDate, "days") >= 7) {
      return postDate.format("MMM Do YYYY");
    }
    return postDate.fromNow();
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {posts.map((post) => {
        const { author, createdAt, content, image, likes, comments, share } =
          post;
        return (
          <div
            key={post._id}
            className="w-full mt-[14px] bg-[#FFFFFF] rounded-md"
          >
            <div className="flex justify-between pl-[16px] pr-[16px] pt-[10px]">
              <div className="flex">
                <div className="w-[41px] h-[41px] rounded-full ">
                  <img
                    className="w-[41px] h-[41px] rounded-full"
                    src={author.avatar}
                    alt="avt"
                  />
                </div>
                <div className="ml-[8px]">
                  <div className="text-md font-bold ">
                    {author.firstName} {author.lastName}
                  </div>
                  <div className="flex">
                    <div className="text-[11px] font-medium pr-1 text-[#898A8D]">
                      {timeFromNow(createdAt)}
                    </div>
                    <div className="text-[#898A8D]">
                      <MdPublic />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-center h-[50px]">
                <div className="h-[30px] cursor-pointer w-[30px] rounded-full mt-1 flex items-center justify-center  hover:bg-[#eeeaea9f]">
                  <BsThreeDots className="text-2xl" />
                </div>
                <div className="h-[30px] cursor-pointer w-[30px] mt-1 rounded-full flex items-center justify-center hover:bg-[#eeeaea9f]">
                  <CloseIcon fontSize="small" />
                </div>
              </div>
            </div>
            <div className="pl-[16px] pr-[16px] text-sm font-normal mb-[14px]">
              {content}
            </div>

            {image && (
              <div className="w-[588px] object-contain max-h-[584px]">
                <img
                  className="w-[588px] max-h-[584px] object-cover"
                  src={image}
                  alt="image"
                />
              </div>
            )}

            <div className="flex justify-between items-center text-[#77797C] pl-[16px] pr-[16px] pt-[12px]">
              <div className="flex ">
                <div className="w-[19px] h-[19px] rounded-full mr-1 mt-[1px]">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M8 0C3.583 0 0 3.582 0 8C0 12.418 3.583 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0Z' fill='%231E81FB'/%3E%3Cpath d='M11.6667 7.34079C11.6667 8.96015 10.3261 10.3008 8.70675 10.3008H6.62597C6.3638 10.3008 6.13372 10.1235 6.06489 9.87052L5.00333 5.82921C4.93368 5.57567 5.11304 5.3335 5.37521 5.3335H7.01846C6.78337 4.6417 6.87991 3.83919 7.36697 3.28764C7.65746 2.95162 8.06379 2.7505 8.50197 2.7505C9.39161 2.7505 10.1115 3.47079 10.1115 4.36042C10.1115 4.66791 10.0318 4.95877 9.88548 5.21213C9.71863 5.50074 9.55015 5.66663 9.55015 6.00379C9.55015 6.1623 9.65879 6.29968 9.80813 6.29968H11.2952C11.4474 6.29968 11.6112 6.48455 11.6112 6.63679C11.6112 6.71294 11.6354 6.75888 11.6547 6.79211C11.6643 6.8092 11.6705 6.82029 11.6751 6.82863C11.6753 6.82901 11.6755 6.82938 11.6756 6.82973C11.679 6.83583 11.681 6.84007 11.6824 6.84313C11.6835 6.8456 11.6841 6.84691 11.6843 6.84735C11.6935 6.86989 11.7014 6.90445 11.7034 6.96909C11.7035 6.97307 11.7036 6.97695 11.7036 6.98071C11.7036 7.0069 11.7013 7.07973 11.6667 7.34079Z' fill='white'/%3E%3Cpath d='M5.06666 6.66667C5.48888 6.66667 5.83332 6.32223 5.83332 5.9C5.83332 5.47778 5.48888 5.13334 5.06666 5.13334C4.64444 5.13334 4.3 5.47778 4.3 5.9C4.3 6.32223 4.64444 6.66667 5.06666 6.66667ZM4.5 7.03334C4.27779 7.25556 3.92221 7.25556 3.7 7.03334L1.86667 5.2C1.64444 4.97778 1.64444 4.62223 1.86667 4.4C2.08889 4.17778 2.44444 4.17778 2.66667 4.4L4.5 6.23334C4.72221 6.45556 4.72221 6.81111 4.5 7.03334Z' fill='%23FBED21'/%3E%3C/svg%3E"
                    alt="like"
                  />
                </div>
                <span
                  onClick={() => handleLike(post._id)}
                  className="pt-[2px] text-[13px] text-[#65676B] hover:text-[#222222] cursor-pointer"
                >
                  {likes.length} Lượt thích
                </span>
              </div>
              <div className="flex">
                <span className="mr-2 text-[13px] text-[#65676B] hover:text-[#222222] cursor-pointer">
                  {comments.length} bình luận
                </span>
                <span className="text-[13px] text-[#65676B] hover:text-[#222222] cursor-pointer">
                  {share.length} Lượt chia sẻ
                </span>
              </div>
            </div>

            <CommentLikeShare post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default Posted;
