import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { useContext, useState, useEffect } from "react";
import TeamProfile from "../compnent/TeamProfile";
import TeamOverViewGraph from "../compnent/TeamOverViewGraph";

const Team = () => {
  const { teamDetails, setTeamName } = useContext(StoreContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(teamDetails);
  }, [teamDetails]);

  return (
    <div className="min-h-screen w-full bg-[#0A1428] px-4 sm:px-8 lg:px-12 py-8">

      {/* ── Header Section ── */}
      <div className="flex justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-amber-50 text-2xl sm:text-3xl font-semibold">
            IPL Teams
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-1 max-w-md">
            Explore All Indian Premier League Teams, their history, stats and achievementz
          </p>
        </div>
        {/* Trophy — mobile pe chhota, desktop pe bada */}
        <img
          className="h-24 sm:h-36 lg:h-44 object-contain flex-shrink-0"
          src="/ipl-trophy.png"
          alt="IPL Trophy"
        />
      </div>

      {/* ── Stats Cards ── */}
      <div className="bg-gradient-to-b from-[#0B1F36] to-[#0A1A2B] border 
                      border-white/10 rounded-2xl p-4 sm:p-6 
                      shadow-[0_10px_30px_rgba(0,0,0,0.4)] mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">

          {/* Card 1 — Teams */}
          <div className="bg-gradient-to-b from-[#112742] to-[#0E2238] border 
                          border-white/10 rounded-xl p-4 flex items-center gap-3">
            <div className="text-[#4DA3FF] text-2xl">👥</div>
            <div>
              <p className="text-white text-lg font-semibold">10</p>
              <p className="text-gray-400 text-sm">Teams</p>
            </div>
          </div>

          {/* Card 2 — Seasons */}
          <div className="bg-gradient-to-b from-[#112742] to-[#0E2238] border 
                          border-white/10 rounded-xl p-4 flex items-center gap-3">
            <div className="text-[#4DA3FF] text-2xl">📅</div>
            <div>
              <p className="text-white text-lg font-semibold">17</p>
              <p className="text-gray-400 text-sm">Seasons</p>
            </div>
          </div>

          {/* Card 3 — Matches */}
          <div className="bg-gradient-to-b from-[#112742] to-[#0E2238] border 
                          border-white/10 rounded-xl p-4 flex items-center gap-3">
            <div className="text-[#FFC72C] text-2xl">🏆</div>
            <div>
              <p className="text-white text-lg font-semibold">1,186</p>
              <p className="text-gray-400 text-sm">Matches</p>
            </div>
          </div>

          {/* Card 4 — Players */}
          <div className="bg-gradient-to-b from-[#112742] to-[#0E2238] border 
                          border-white/10 rounded-xl p-4 flex items-center gap-3">
            <div className="text-[#FFC72C] text-2xl">🏏</div>
            <div>
              <p className="text-white text-lg font-semibold">25K+</p>
              <p className="text-gray-400 text-sm">Players</p>
            </div>
          </div>

          {/* Card 5 — Countries */}
          <div className="bg-gradient-to-b from-[#112742] to-[#0E2238] border 
                          border-white/10 rounded-xl p-4 flex items-center gap-3
                          col-span-2 sm:col-span-1">
            <div className="text-[#4DA3FF] text-2xl">🌍</div>
            <div>
              <p className="text-white text-lg font-semibold">7</p>
              <p className="text-gray-400 text-sm">Countries</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Team Cards Grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
        {data.map((team, index) => (
          <Link
            to='/particularTeam'
            state={{ team: team }}
            onClick={() => setTeamName(team.team)}
            key={index}
          >
            <TeamProfile
              key={index}
              logo={team.logo}
              name={team.team}
              date={team.date}
              bg={team.bg}
              text={team.text}
              accent={team.accent}
              statColor={team.statColor}
            />
          </Link>
        ))}
      </div>

      {/* ── Graph Section ── */}
      <div className="mt-12 w-full overflow-x-auto">
        <TeamOverViewGraph />
      </div>

    </div>
  );
};

export default Team;