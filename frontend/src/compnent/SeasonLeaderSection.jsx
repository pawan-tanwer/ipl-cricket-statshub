import React, { useEffect } from "react";
import Profile from "./Profile";
import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const SeasonLeaderSection = () => {
  const [years, setYears] = useState("2025");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fatchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/ipl/season-leaders/${years}`,
        );

        setData(response.data.leaders);
      } catch (error) {
        console.log(error);
      }
    };

    fatchData();
  }, [years]);

  const seasons = Array.from({ length: 18 }, (_, i) => (2008 + i).toString());

  return (
    // absolute left/top fixed values hata, normal flow mein lao
    <div className="relative z-6 text-white w-full px-4 sm:px-8 mt-8">
      <h1 className="text-2xl sm:text-3xl font-mono">
        Season Leaders-Year Wise
      </h1>

      {/* Year pills — w-[780px] hata, w-full overflow-x-auto rakho */}
      <div className="flex gap-3 w-auto border border-yellow-500/20 backdrop-blur-sm shadow-xl rounded-3xl p-3 overflow-x-auto scrollbar-hide mt-2">
        {seasons.map((year) => (
          <NavLink
            onClick={() => setYears(year)}
            key={year}
            className={`bg-[#0a1428] text-amber-50 px-2 py-2 rounded-2xl cursor-pointer flex-shrink-0
            ${years === year ? "bg-amber-400 text-black" : "bg-[#0A1428]"}`}
          >
            {year}
          </NavLink>
        ))}
      </div>

      <Profile data={data} />
    </div>
  );
};

export default SeasonLeaderSection;
