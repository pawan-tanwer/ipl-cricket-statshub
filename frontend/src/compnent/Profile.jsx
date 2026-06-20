import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";

const Profile = ({ data }) => {
  const { setName } = useContext(StoreContext);

  const getImageUrl = (name) => {
    const encodedName = encodeURIComponent(name);
    return `https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/${encodedName}.png`;
  };

  if (!data) return <p className="text-white">Loading...</p>;

  const cards = [
    { label: "Highest Runs",    player: data.highestRuns,    unit: "Runs"      },
    { label: "Most Sixes",      player: data.mostSixes,      unit: "Sixes"     },
    { label: "Most Wickets",    player: data.mostWickets,    unit: "Wickets"   },
    { label: "Most Centuries",  player: data.mostCenturies,  unit: "Centuries" },
    { label: "Most Fifties",    player: data.mostFifties,    unit: "Fifties"   },
  ];

  return (
    // flex → grid, w-40 fixed → responsive columns
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-white w-full mt-4">
      {cards.map((card, index) => (

        card.player?.value == 0 || card.player?.value === null

          // Empty state card
          ? <div
              key={index}
              className="border flex flex-col items-center justify-center text-centertext-amber-50 p-3 bg-[#0A1428] rounded-2xl min-h-[160px]">
              <p className="text-amber-400 font-medium text-sm">{card.label}</p>
              <p className="text-xs mt-2">No {card.unit} this season</p>
            </div>

          // Player card
          : <Link
              key={index}
              to="/profile"
              onClick={() => setName(card.player?.name)}
              className="border flex flex-col items-center p-2 bg-[#0A1428] rounded-2xl hover:bg-[#1a2a48] transition-colors cursor-pointer">
              <p className="text-amber-400 font-medium text-sm text-center">
                {card.player?.category}
              </p>

              <img
                className="h-28 w-auto object-contain mt-1"
                src={getImageUrl(card.player?.name)}
                alt={card.player?.name}
                onError={(e) => e.target.style.display = 'none'}
              />

              <p className="font-light text-sm text-center mt-1">
                {card.player?.name}
              </p>

              <p className="text-amber-300 text-sm font-medium mt-1">
                {card.player?.value} {card.unit}
              </p>
            </Link>
      ))}
    </div>
  );
};

export default Profile;