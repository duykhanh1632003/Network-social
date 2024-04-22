import LeftHeader from "../Header-item/LeftHeader";
import MiddleHeader from "../Header-item/MiddleHeader";
import RightHeader from "../Header-item/RightHeader";

const Header = () => {
  return (
    <div className="h-[56px] border-l-amber-900 pt-[8px] flex bg-white shadow-md header">
      <LeftHeader />
      <MiddleHeader />
      <RightHeader />
    </div>
  );
};

export default Header;
