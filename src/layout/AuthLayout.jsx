import { Outlet } from "react-router";
import authImg from "../assets/pic_icon/authImage.png";
import Logo from "../Components/Logo/Logo";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 min-h-screen ">
        <div className=" bg-gray-50 pt-11">
          <Logo></Logo>
          <Outlet></Outlet>
        </div>
        <div className="w-full h-full content-center bg-[#FAFDF0]">
          <img
            className="lg:w-142 lg:h-103.5 object-cover mx-auto"
            src={authImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
