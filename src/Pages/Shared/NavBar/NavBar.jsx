import { Link, NavLink } from "react-router";
import Logo from "../../../Components/Logo/Logo";
import { MdArrowOutward } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";

const NavBar = () => {
  const { logOutUser, user } = useAuth();

  //signOut
  const handleLogOut = () => {
    logOutUser()
      .then()
      .catch((error) =>
        console.log("Failed to log out. Please try again.", error),
      );
  };

  // NavLink এর ভিতরে className prop function আকারে ব্যবহার করলে React Router নিজে থেকে isActive দেয়।
  const navStyle = ({ isActive }) =>
    isActive
      ? "bg-[#CAEB66] text-[#606060] rounded-[50px] px-4 py-2"
      : " text-[#606060] rounded-[50px] px-4 py-2";

  const links = (
    <>
      <li>
        <NavLink className={navStyle} to={"/"}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink className={navStyle} to={"/coverage"}>
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink className={navStyle} to={"/about"}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink className={navStyle} to={"/pricing"}>
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink className={navStyle} to={"/rider"}>
          Be a Rider
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl"> */}
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <div className="flex items-center justify-center">
          <div className="mr-4">
            {user ? (
              <a onClick={handleLogOut} className="btn  rounded-xl">
                sign out
              </a>
            ) : (
              <Link to={"/login"} className="btn  rounded-xl">
                sign In
              </Link>
            )}
          </div>
          <Link to={"/rider"} className="flex justify-center">
            <button className="btn bg-[#CAEB66] rounded-xl">Be a rider</button>
            <button className="rounded-full h-10 w-10 flex items-center justify-center  bg-black text-[#CAEB66] text-xl">
              <MdArrowOutward />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
