import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import { StoreContext } from "../context/StoreContext";
import SearchBar from "./SearchIBar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const{searchIcon,setSearchIcon} = useContext(StoreContext);

  return (
    <div className="h-20 sticky top-0 z-50 w-full">
      <div className="bg-[#0A1428] border-b-2 border-[#F5C400] h-full flex px-5 items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img className="w-16" src="/ipl_logo.png" alt="logo" />
        </Link>

        {/* Desktop Nav Links — md se upar dikhega */}
        <div className="hidden md:flex items-center gap-10 text-white font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-[#F5C400] border-b-2 border-[#F5C400] pb-1"
                : "text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/players"
            className={({ isActive }) =>
              isActive
                ? "text-[#F5C400] border-b-2 border-[#F5C400] pb-1"
                : "text-white"
            }
          >
            Players
          </NavLink>

          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive
                ? "text-[#F5C400] border-b-2 border-[#F5C400] pb-1"
                : "text-white"
            }
          >
            Teams
          </NavLink>

          <NavLink
            to="/iplFinals"
            className={({ isActive }) =>
              isActive
                ? "text-[#F5C400] border-b-2 border-[#F5C400] pb-1"
                : "text-white"
            }
          >
            IPL Finals
          </NavLink>
        </div>

        {/* Search + Hamburger */}
        <div className="flex items-center gap-3 text-white">
          <CiSearch onClick={()=>setSearchIcon(!searchIcon)} className="h-10 w-12 rounded bg-transparent border p-2 cursor-pointer" />

          {/* Hamburger button — sirf mobile pe dikhega */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A1428] border-b border-[#F5C400] flex flex-col items-start gap-4 px-6 py-4 text-white font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-[#F5C400] border-b-2 border-[#F5C400] pb-1"
                : "text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/players"
            className={({ isActive }) =>
              isActive
                ? "text-[#F5C400] border-b-2 border-[#F5C400] pb-1"
                : "text-white"
            }
          >
            Players
          </NavLink>

          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive
                ? "text-[#F5C400] border-b-2 border-[#F5C400] pb-1"
                : "text-white"
            }
          >
            Teams
          </NavLink>

          <NavLink
            to="/iplFinals"
            className={({ isActive }) =>
              isActive
                ? "text-[#F5C400] border-b-2 border-[#F5C400] pb-1"
                : "text-white"
            }
          >
            IPL Finals
          </NavLink>
        </div>
      )}
      <SearchBar/>
    </div>
  );
};

export default Navbar;
