import { Link, useLocation } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser";
import {
  BellIcon, HomeIcon, UsersIcon,
  Info, MenuIcon, XIcon, LogOutIcon
} from "lucide-react";
import { useState } from "react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";

const Sidebar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const { logoutMutation } = useLogout();

  const navItem = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 
     ${
       currentPath === path
         ? "bg-primary text-white shadow-md"
         : "hover:bg-base-300 text-base-content"
     }`;

  const SidebarContent = () => (
    <>
      {/* 🔥 LOGO */}
      <div className="p-5 border-b border-base-300 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <img src="/logo.png" alt="logo" className="w-14 h-14" />
          <span className="text-xl font-bold">
            <span className="text-orange-500">Bindaas</span>
            <span className="text-white">Talk</span>
          </span>
        </Link>
        {/* Close button - mobile only */}
        <button
          className="lg:hidden btn btn-ghost btn-circle"
          onClick={() => setIsOpen(false)}
        >
          <XIcon className="size-5" />
        </button>
      </div>

      {/* 🚀 NAVIGATION */}
      <nav className="flex-1 p-4 space-y-2">
        <Link to="/" className={navItem("/")} onClick={() => setIsOpen(false)}>
          <HomeIcon className="size-5" />
          <span>Home</span>
        </Link>
        <Link to="/friends" className={navItem("/friends")} onClick={() => setIsOpen(false)}>
          <UsersIcon className="size-5" />
          <span>Friends</span>
        </Link>
        <Link to="/notifications" className={navItem("/notifications")} onClick={() => setIsOpen(false)}>
          <BellIcon className="size-5" />
          <span>Notifications</span>
        </Link>
        <Link to="/about" className={navItem("/about")} onClick={() => setIsOpen(false)}>
          <Info className="size-5" />
          <span>About</span>
        </Link>
      </nav>

      {/* 🎨 THEME + 🚪 LOGOUT */}
      <div className="p-4 border-t border-base-300 space-y-2">

        {/* Theme Selector Row */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-base-300 transition cursor-pointer">
          <span className="text-sm font-medium flex-1">Theme</span>
          <ThemeSelector />
        </div>

        {/* Logout Button */}
        <button
          onClick={logoutMutation}
          className="flex items-center gap-3 px-4 py-3 rounded-xl 
          hover:bg-red-500/10 text-red-400 transition w-full"
        >
          <LogOutIcon className="size-5" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>

      {/* 👤 USER PROFILE */}
      <div className="p-4 border-t border-base-300">
        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-base-300 transition">
          <div className="relative">
            <img
              src={authUser?.profilePic}
              alt="User"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-primary"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-base-200 rounded-full"></span>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm">{authUser?.fullName}</p>
            <p className="text-xs text-success">Online</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* ===== DESKTOP SIDEBAR ===== */}
      <aside className="w-64 bg-base-200 border-r border-base-300 hidden lg:flex flex-col h-screen sticky top-0">
        <SidebarContent />
      </aside>

      {/* ===== MOBILE HAMBURGER BUTTON ===== */}
      <button
        className="lg:hidden fixed top-4 left-3 z-50 btn btn-ghost btn-circle bg-base-200"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon className="size-5" />
      </button>

      {/* ===== MOBILE OVERLAY ===== */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ===== MOBILE DRAWER ===== */}
      <aside
        className={`lg:hidden fixed top-0 left-0 h-screen w-64 bg-base-200 
        border-r border-base-300 flex flex-col z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <SidebarContent />
      </aside>
    </>
  );
};

export default Sidebar;