import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { StoreContext } from "../context/StoreContext";

const SearchBar = () => {
  const { searchIcon, setName, setSearchIcon } = useContext(StoreContext);
  const [playerName, setPlayerName] = useState("");
  const [error, setError] = useState(""); // error message dikhane ke liye
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!playerName.trim()) return; // empty search ignore karo

    try {
      const res = await axios.get(
        `http://localhost:8000/ipl/search/${playerName}`,
      );

      if (res.data.success) {
        setName(res.data.name); // DB se aaya full correct name
        setError("");
        navigate("/profile");
      }
    } catch (err) {
      // 404 wala case — player nahi mila
      if (err.response?.data?.success === false) {
        setError(err.response.data.message); // "Enter Proper name"
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <div
      className={`relative z-4 flex flex-col gap-2 items-center w-full px-4 mt-6 ${searchIcon === true ? "block" : "hidden"}`}
    >
      {/* Search bar */}
      <div className="flex bg-gradient-to-r from-lime-400 to-green-500 shadow-[0_0_20px_rgba(132,204,22,0.6)] rounded-full overflow-hidden">
        <input
          className="border-0 w-full text-gray-900 px-3 py-3 rounded-l-full placeholder-gray-500 bg-white"
          type="text"
          onChange={(e) => setPlayerName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (handleSearch(),setSearchIcon(!searchIcon)) } // Enter dabane pe search
          placeholder="Search any player... eg. Virat Kohli, Jasprit Bumrah"
          value={playerName}
        />

        <button
          onClick={() => {
            handleSearch();
            setSearchIcon(!searchIcon); // jo bhi dusra function chahiye
          }}
          type="button"
          className="border rounded-r-full text-gray-500 bg-lime-400 hover:bg-lime-500 px-5 py-3 font-bold whitespace-nowrap"
        >
          Search
        </button>
      </div>

      {/* Error message — agar player nahi mila */}
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default SearchBar;
