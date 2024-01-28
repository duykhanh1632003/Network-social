import LeftSideBar from "./LeftSideBar";
import MiddleSideBar from "./MiddleSideBar";
import RightSideBar from "./RightSideBar";
const HomePage = () => {
  return (
    <div className="flex h-screen  bg-blue-500 w-full mt-4 homepage">
      <LeftSideBar />
      <MiddleSideBar />
      <RightSideBar />
    </div>
  );
};

export default HomePage;
