import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, LogOutIcon, Search } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const navigate = useNavigate();

  const { logoutMutation } = useLogout();

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    // 👉 navigate to friends page with search query
    navigate(`/friends?search=${search}`);
    setSearch("");
  };

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="w-full px-4 flex items-center gap-4">

        

        {/* 🔍 SEARCH BAR */}
        <form
          onSubmit={handleSearch}
          className="hidden sm:flex items-center bg-base-300 rounded-full px-3 py-1 flex-1 max-w-md"
        >
          <Search className="size-4 opacity-70 mr-2" />
          <input
            type="text"
            placeholder="Search friends..."
            className="bg-transparent outline-none w-full text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 ml-auto">

          {/* 🔔 NOTIFICATIONS */}
          <Link to="/notifications">
            <button className="btn btn-ghost btn-circle">
              <BellIcon className="h-5 w-5 opacity-70" />
            </button>
          </Link>

          {/* 🎨 THEME */}
          <ThemeSelector />

          {/* 👤 USER */}
          <div className="avatar">
            <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={authUser?.profilePic} alt="User" />
            </div>
          </div>

          {/* 🚪 LOGOUT */}
          <button
            className="btn btn-ghost btn-circle"
            onClick={logoutMutation}
          >
            <LogOutIcon className="h-5 w-5 opacity-70" />
          </button>
        </div>
      </div>

      {/* 📱 MOBILE SEARCH */}
      <div className="sm:hidden px-4 pb-2">
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-base-300 rounded-full px-3 py-1"
        >
          <Search className="size-4 opacity-70 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;