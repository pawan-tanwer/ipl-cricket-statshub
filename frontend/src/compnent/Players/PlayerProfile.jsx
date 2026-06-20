import React, { useContext,} from 'react'
import { Link, Navigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const PlayerProfile = ({player,position}) => {
    const {setName} = useContext(StoreContext);
    const{sortValue}= useContext(StoreContext)
     const getUrlImage =(name)=>{
        console.log(name)
    const encodedName = encodeURIComponent(name);
    return `https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/${encodedName}.png`
  }

  const teamLogoMap = {
    "Mumbai Indians": "Mumbai Indians.png",
    "Chennai Super Kings": "Chennai Super Kings.png",
    "Kolkata Knight Riders": "Kolkata Knight Riders.png",
    "Royal Challengers Bangalore": "Royal Challengers Bangalore.png",
    "Sunrisers Hyderabad": "Sunrisers Hyderabad.png",
    "Rajasthan Royals": "Rajasthan Royals.png",
    "Gujarat Titans": "Gujarat Titans.png",
    "Lucknow Super Giants": "Lucknow Super Giants.png",
    "Rising Pune Supergiant": "Rising Pune Supergiant.png",
    "Deccan Chargers": "Sunrisers Hyderabad.png",
    "Punjab Kings": "Punjab Kings.png",
    "Kings XI Punjab": "Punjab Kings.png",
    "Delhi Capitals": "Delhi Capitals.png",
    "Delhi Daredevils": "Delhi Capitals.png",
    "Royal Challengers Bengaluru":"Royal Challengers Bangalore.png",
  };

  let statValue = 0;

  if (sortValue === "mostRuns") {
    statValue = player.runs || player.score || 0; // Backend key ke according name check karein
  } else if (sortValue === "mostSixes") {
    statValue = player.sixes || 0;
  } else if (sortValue === "mostWickets") {
    statValue = player.wickets || 0;
  } else if (sortValue === "mostCenturies") {
    statValue = player.centuries || 0;
  }

  const getTeamLogo = (teamName) => {
    const fileName = teamLogoMap[teamName];
    if (!fileName) return null;
    return `/teams/${fileName}`;
  };

  const category={
    "mostRuns":"Runs",
    "mostWickets":"Wickets",
    "mostSixes":"Sixes",
    "mostCenturies":"Centures"
  }

  return (
    <Link to="/profile" onClick={()=>setName(player?.name)}
       
      className="relative w-full rounded-2xl border border-slate-700 bg-[#040d21] p-3 font-sans text-white cursor-pointer hover:border-amber-400/60 hover:scale-[1.02] transition-all duration-200 active:scale-95"
    >
      {/* Position badge + Team logo row */}
      <div className="flex justify-between items-center mb-1">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f1c232] font-bold text-slate-800 text-xs flex-shrink-0">
          {position}
        </div>
        <img
          src={getTeamLogo(player?.team)}
          alt={player?.team}
          className="h-7 w-auto object-contain brightness-110"
          onError={(e) => e.target.style.display = 'none'}
        />
      </div>

      {/* Player image */}
      <div className="flex justify-center">
        <div className="h-28 w-28 sm:h-36 sm:w-36 overflow-hidden rounded-full bg-gradient-to-b from-slate-800/50 to-transparent p-1">
          <img
            src={getUrlImage(player?.name)}
            alt={player?.name}
            className="h-full w-full object-cover object-top"
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
      </div>

      {/* Name & role */}
      <div className="mt-2 text-center">
        <h3 className="text-sm sm:text-base font-bold tracking-wide leading-tight">{player?.name}</h3>
        <p className="text-xs text-slate-400 mt-0.5">{player?.role}</p>
      </div>

      {/* Divider */}
      <div className="my-2 h-[1px] w-full bg-slate-800/60" />

      {/* Stats */}
      <div className="grid grid-cols-2 gap-1 text-center">
        <div className="border-r border-slate-800">
          <span className="block text-base sm:text-xl font-bold tracking-tight text-[#38bdf8]">
            {statValue}
          </span>
          <span className="text-xs text-slate-400">{category[sortValue] ?? 'Runs'}</span>
        </div>
        <div>
          <span className="block text-xs sm:text-sm font-bold text-white/90">{player?.nationality}</span>
          <span className="text-xs text-slate-400">nationality</span>
        </div>
      </div>
    </Link>
  );
};

export default PlayerProfile;
