
import { FaTrophy } from "react-icons/fa6";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const IplList = ({final}) => {

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
  };

  const teamText = {
    "Punjab Kings": "#ED1B24",
    "Kings XI Punjab": "#ED1B24",
    "Delhi Capitals": "#0078BC",
    "Delhi Daredevils": "#0078BC",
    "Mumbai Indians": "#38BDF8",
    "Chennai Super Kings": "#F5C518",
    "Kolkata Knight Riders": "#9333EA",
    "Royal Challengers Bangalore": "#CC0000",
    "Sunrisers Hyderabad": "#FF6B00",
    "Rajasthan Royals": "#EA1A85",
    "Gujarat Titans": "#22D3EE",
    "Lucknow Super Giants": "#00AAE4",
    "Rising Pune Supergiant": "#EA1A85",
    "Deccan Chargers": "#FF6B00",
  };

  const getTeamLogo = (teamName) => {
    const fileName = teamLogoMap[teamName];
    if (!fileName) return null;
    return `/teams/${fileName}`;
  };

  return (
    /* Mobile: stacked card layout | Desktop: grid row */
    <div className='w-full h-auto'>

      {/* ── DESKTOP ROW (md and above) ── */}
      <div className='hidden md:grid grid-cols-7 justify-around px-2 py-3 border-b border-gray-700 hover:bg-white/5 transition-colors items-center'>
        {/* Year */}
        <div className='font-bold text-amber-300 text-sm'>{final?.year}</div>

        {/* Team 1 */}
        <div className='flex items-center gap-1' >
          <img src={getTeamLogo(final?.team1)} alt={final?.team1}
            className='w-7 h-7 object-contain'
            onError={(e) => e.target.style.display = 'none'} />
          <div style={{ color: teamText[final?.team1] ?? '#ffffff' }}
            className='font-bold text-sm leading-tight'>{final?.team1}</div>
        </div>

        {/* Team 2 */}
        <div className='flex items-center gap-1'>
          <img src={getTeamLogo(final?.team2)} alt={final?.team2}
            className='w-7 h-7 object-contain'
            onError={(e) => e.target.style.display = 'none'} />
          <div style={{ color: teamText[final?.team2] ?? '#ffffff' }}
            className='font-bold text-sm leading-tight'>{final?.team2}</div>
        </div>

        {/* Score */}
        <div className='text-gray-200 text-xs'>{final?.score}</div>

        {/* Winner */}
        <div className='flex items-center gap-1'>
          <span className='text-amber-300 text-sm'>🏆</span>
          <div className='font-bold text-sm text-white'>{final?.winner}</div>
        </div>

        {/* Result */}
        <div className='text-green-400 text-xs font-medium'>{final?.result}</div>

        {/* Venue */}
        <div className='text-gray-300 text-xs'>{final?.venue}</div>
      </div>

      {/* ── MOBILE CARD (below md) ── */}
      <div className='md:hidden bg-white/5 rounded-xl p-4 border border-white/10 hover:border-amber-300/40 transition-colors'>
        {/* Year badge */}
        <div className='inline-block bg-amber-300 text-gray-900 font-bold text-xs px-2 py-0.5 rounded-full mb-3'>
          {final?.year}
        </div>

        {/* Teams row */}
        <div className='flex items-center justify-between gap-2 mb-3'>
          {/* Team 1 */}
          <div className='flex flex-col items-center gap-1 flex-1'>
            <img src={getTeamLogo(final?.team1)} alt={final?.team1}
              className='w-10 h-10 object-contain'
              onError={(e) => e.target.style.display = 'none'} />
            <div style={{ color: teamText[final?.team1] ?? '#ffffff' }}
              className='font-bold text-xs text-center leading-tight'>{final?.team1}</div>
          </div>

          <div className='text-gray-400 text-xs font-bold'>VS</div>

          {/* Team 2 */}
          <div className='flex flex-col items-center gap-1 flex-1'>
            <img src={getTeamLogo(final?.team2)} alt={final?.team2}
              className='w-10 h-10 object-contain'
              onError={(e) => e.target.style.display = 'none'} />
            <div style={{ color: teamText[final?.team2] ?? '#ffffff' }}
              className='font-bold text-xs text-center leading-tight'>{final?.team2}</div>
          </div>
        </div>

        {/* Score */}
        <div className='text-gray-300 text-xs mb-2 text-center'>{final?.score}</div>

        {/* Winner */}
        <div className='flex items-center gap-1 mb-1'>
          <span className='text-amber-300'>🏆</span>
          <span className='font-bold text-white text-sm'>{final?.winner}</span>
        </div>

        {/* Result */}
        <div className='text-green-400 text-xs mb-1'>{final?.result}</div>

        {/* Venue */}
        <div className='text-gray-400 text-xs'>📍 {final?.venue}</div>
      </div>
    </div>
  )
}

export default IplList
