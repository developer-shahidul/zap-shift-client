import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import {
  HiOutlineDocumentText,
  HiOutlineHome,
  HiOutlineBuildingStorefront,
  HiOutlineTag,
  HiOutlineMapPin,
  HiOutlineCog6Tooth,
  HiOutlineLockClosed,
  HiOutlineQuestionMarkCircle,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineAlignLeft, AiOutlineDown } from "react-icons/ai";
import { FaRegBell, FaUser } from "react-icons/fa6";

import Logo from "../Components/Logo/Logo";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  const menuItems = [
    {
      path: "/dashboard",
      icon: <HiOutlineHome></HiOutlineHome>,
      label: "Dashboard",
    },
    {
      path: "/dashboard/deliveries",
      icon: <TbTruckDelivery />,
      label: "All Deliveries",
    },
    {
      path: "/dashboard/invoices",
      icon: <HiOutlineDocumentText />,
      label: "Invoices",
    },
    {
      path: "/dashboard/stores",
      icon: <HiOutlineBuildingStorefront />,
      label: "Stores",
    },
    {
      path: "/dashboard/pricing",
      icon: <HiOutlineTag />,
      label: "Pricing Plan",
    },
    {
      path: "/dashboard/coverage",
      icon: <HiOutlineMapPin />,
      label: "Coverage Area",
    },
  ];

  const genaralMenu = [
    {
      path: "/dashboard/setting",
      icon: <HiOutlineCog6Tooth />,
      label: "Setting",
    },
    {
      path: "/dashboard/changePasswoard",
      icon: <HiOutlineLockClosed />,
      label: "Change Passwoard",
    },
    {
      path: "/dashboard/help",
      icon: <HiOutlineQuestionMarkCircle />,
      label: "Help",
    },
    {
      path: "/dashboard/logout",
      icon: <HiOutlineArrowRightOnRectangle />,
      label: "Logout",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      {/* Overlay (মোবাইলের জন্য) */}
      {open && (
        <div
          className="fixed inset-0 lg:hidden  z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ===== Sidebar ===== */}
      <aside
        className={`bg-white p-6 h-screen fixed  top-0 left-0 lg:static transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        <div>
          <Logo></Logo>
        </div>
        <hr className="my-3 text-[#e7d6d6]" />
        <div>
          <h3 className="text-sm text-[#151726] font-medium mb-3">Menu</h3>
        </div>
        <nav>
          <ul>
            {menuItems?.map((menu) => (
              <li key={menu?.label}>
                <NavLink
                  to={menu?.path}
                  className="flex gap-2 px-3 py-2 items-center"
                >
                  <span className="text-xl"> {menu?.icon}</span>
                  <span className="text-sm text-[#606060] font-medium">
                    {menu?.label}
                  </span>
                </NavLink>
              </li>
            ))}

            <li className="mt-6 mb-3">
              <h3 className="text-sm font-medium text-[#151726]">Genaral</h3>
            </li>

            {genaralMenu?.map((menu) => (
              <li key={menu?.label}>
                <NavLink
                  to={menu?.path}
                  className="flex gap-2 px-3 py-2 items-center"
                >
                  <span className="text-xl"> {menu?.icon}</span>
                  <span className="text-sm text-[#606060] font-medium">
                    {menu?.label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* ===== Main Content ===== */}
      <div className="flex-1 flex-col min-h-screen ">
        <header className="flex justify-between items-center  bg-white">
          <div>
            <button onClick={() => setOpen(true)} className="py-6 p-8">
              <AiOutlineAlignLeft className="text-2xl text-[#303030]" />
            </button>
          </div>
          <div className="flex gap-3 mr-8 items-center">
            <div>
              <button className="h-10 w-10 rounded-full bg-[#F5F5F5] flex justify-center items-center">
                <FaRegBell className="text-xl" />
              </button>
            </div>
            <div className="h-10 w-10 rounded-full bg-[#D9D9D9] flex items-center justify-center overflow-hidden">
              {user?.photoURL ? (
                <img
                  src={user?.photoURL}
                  className="h-full w-full object-cover"
                  alt="profile"
                />
              ) : (
                <FaUser className="text-gray-500 text-xl" />
              )}
            </div>
            <div>
              <h3 className="text-[#1F1F1F] text-[16px] font-semibold">
                Shahidul Islam
              </h3>
              <p className="text-sm text-[#606060]">admin</p>
            </div>
            <div>
              <button className="h-5 w-5">
                <AiOutlineDown className="text-gray-700" />
              </button>
            </div>
          </div>
        </header>
        <main className="p-6 flex-1">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
