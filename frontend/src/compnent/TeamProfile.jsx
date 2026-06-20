import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

const TeamProfile = ({ logo, name, date, bg, text, accent, statColor }) => {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8000/ipl/final/team/${name}`
      );
      setTeamData(response.data);
    };
    fetchData();
  }, [name]);

  return (
    <div className="mt-6">
      <div
        style={{ backgroundColor: bg }}
        className="flex flex-col gap-3 w-full text-center 
                   border px-3 py-3 rounded-2xl cursor-pointer
                   hover:scale-105 transition-transform duration-200"
      >
        {/* Logo */}
        <div className="h-32 sm:h-40 w-full flex items-center justify-center">
          <img
            src={logo}
            alt={name}
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Name + Established */}
        <div className="flex flex-col gap-1">
          <h2
            style={{ color: text }}
            className="font-semibold text-sm sm:text-base leading-tight"
          >
            {name}
          </h2>
          <p className="text-gray-200 text-xs">
            Established: {date}
          </p>
        </div>

        {/* Stats — Titles, Matches, Win% */}
        <div className="flex justify-around border-t border-white/20 pt-2">
          <div className="flex flex-col items-center">
            <p
              style={{ color: accent }}
              className="text-xs"
            >
              Titles
            </p>
            <p
              style={{ color: statColor }}
              className="font-bold text-sm"
            >
              {teamData?.teamTrophy ?? '-'}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p
              style={{ color: accent }}
              className="text-xs"
            >
              Matches
            </p>
            <p
              style={{ color: statColor }}
              className="font-bold text-sm"
            >
              {teamData?.totalMatches ?? '-'}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p
              style={{ color: accent }}
              className="text-xs"
            >
              Win %
            </p>
            <p
              style={{ color: statColor }}
              className="font-bold text-sm"
            >
              {teamData?.winningPercentage ?? '-'}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeamProfile;