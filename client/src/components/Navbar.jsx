import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuthUser from "../hooks/useAuthUser";
import { Search } from "lucide-react";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/friends?search=${search}`);
    setSearch("");
  };

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30">
      <div className="w-full h-16 flex items-center gap-2 pl-14 pr-3 lg:pl-4 lg:pr-4">

        {/* 🔍 SEARCH BAR */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-base-300 rounded-full
          px-3 py-1.5 flex-1 min-w-0"
        >
          <Search className="size-4 opacity-70 mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Search friends..."
            className="bg-transparent outline-none w-full text-sm min-w-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        {/* 👤 PROFILE PIC ONLY */}
        <div className="avatar shrink-0">
          <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={authUser?.profilePic} alt="User" />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;