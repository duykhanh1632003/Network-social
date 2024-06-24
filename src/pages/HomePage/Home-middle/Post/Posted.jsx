import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./../../../../redux/post/postsThunks";
import CommentLikeShare from "./CommentLikeShare";
import { MdPublic } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment";
import { getRequestHaveBody } from "../../../../util/services";
import { axiosHaveAuth } from "../../../../util/axios";

const Posted = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.list);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const instance = axiosHaveAuth();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axiosHaveAuth();
        const response = await instance.get("/api/get/allPosts");
        console.log(response.data); // Assuming fetchPosts handles the response
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    };
    fetchData();
  }, []);

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
      {posts?.map((post) => {
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
                    src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_linear_15251_63610)' fill-opacity='.2'/%3E%3Cpath d='M7.1288 10.3912 5.2993 8.5617a.938.938 0 0 1 1.327-1.327l.501.501 2.544-2.502a.938.938 0 0 1 1.327 1.327L8.4554 10.391a.938.938 0 0 1-1.326 0Z' fill='%23fff'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='-2.4928' y1='17.2621' x2='12.0638' y2='5.8308' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2336C5F0'/%3E%3Cstop offset='1' stop-color='%23AC49FF'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_15251_63610' x1='-2.4928' y1='17.2621' x2='12.0638' y2='5.8308' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2336C5F0'/%3E%3Cstop offset='1' stop-color='%23AC49FF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                    alt="like"
                  />
                </div>
                <div className="text-[13px] font-normal text-[#65676B]">
                  {likes} like
                </div>
              </div>
              <div className="text-[13px] font-normal text-[#65676B]">
                {comments} comments
              </div>
              <div className="text-[13px] font-normal text-[#65676B]">
                {share} share
              </div>
            </div>
            <div className="pl-[8px] pr-[8px] pt-[8px] pb-[8px] mt-[4px]">
              <CommentLikeShare postId={post._id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posted;
