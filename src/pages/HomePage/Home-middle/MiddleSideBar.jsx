import { useRef, useEffect } from "react";
import SlickCarousel from "./SlickCarousel";
import Status from "./Post/Status";
import "./MiddleSideBar.css"; // Import file for custom styles
import Test from "../Test";

const MiddleSideBar = () => {
  const middleRef = useRef();

  const handleScroll = () => {
    if (middleRef.current) {
      middleRef.current.scrollTop = window.scrollY;
    }
  };

  useEffect(() => {
    // Thêm sự kiện lắng nghe cuộn trang
    window.addEventListener("scroll", handleScroll);

    // Xóa sự kiện lắng nghe khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-[587px] bg-red-500 sticky ml-[112px] h-screen overflow-y-auto max-h-screen middlesidebar"
      ref={middleRef}
    >
      <SlickCarousel />
      <Status />
      <Test />
      <Test />
      <Test />
      <Test />
      <Test />
    </div>
  );
};

export default MiddleSideBar;
