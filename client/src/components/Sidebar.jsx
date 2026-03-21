import { Link, useLocation } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser";
import {
  BellIcon,
  HomeIcon,
  UsersIcon,
  Info,
} from "lucide-react";

const Sidebar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const currentPath = location.pathname;

  const navItem = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 
     ${
       currentPath === path
         ? "bg-primary text-white shadow-md"
         : "hover:bg-base-300 text-base-content"
     }`;

  return (
    <aside className="w-64 bg-base-200 border-r border-base-300 hidden lg:flex flex-col h-screen sticky top-0">

      {/* 🔥 LOGO */}
      <div className="p-5 border-b border-base-300">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-14 h-14" />
          <span className="text-xl font-bold">
            <span className="text-orange-500">Bindaas</span>
            <span className="text-white">Talk</span>
          </span>
        </Link>
      </div>

      {/* 🚀 NAVIGATION */}
      <nav className="flex-1 p-4 space-y-2">

        <Link to="/" className={navItem("/")}>
          <HomeIcon className="size-5" />
          <span>Home</span>
        </Link>

        <Link to="/friends" className={navItem("/friends")}>
          <UsersIcon className="size-5" />
          <span>Friends</span>
        </Link>

        <Link to="/notifications" className={navItem("/notifications")}>
          <BellIcon className="size-5" />
          <span>Notifications</span>
        </Link>

        <Link to="/about" className={navItem("/about")}>
          <Info className="size-5" />
          <span>About</span>
        </Link>
      </nav>

      {/* 👤 USER PROFILE */}
      <div className="p-4 border-t border-base-300">
        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-base-300 transition">

          {/* Avatar with online dot */}
          <div className="relative">
            <img
              src={authUser?.profilePic}
              alt="User"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-primary"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-base-200 rounded-full"></span>
          </div>

          {/* User Info */}
          <div className="flex-1">
            <p className="font-semibold text-sm">
              {authUser?.fullName}
            </p>
            <p className="text-xs text-success">
              Online
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;