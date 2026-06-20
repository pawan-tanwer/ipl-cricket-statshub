import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import TeamPlayersProfile from "./TeamPlayersProfile";

const Bottom = () => {
  const { teamName} = useContext(StoreContext);
  const [batter, setBatter] = useState(null);
  const [bowler, setBowler] = useState(null);
  const [allRounder, setAllRounder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8000/ipl/players/${teamName}`,
      );
      setBatter(response.data.batter);
      setBowler(response.data.bowler);
      setAllRounder(response.data.allRounder);
    };
    fetchData();
  }, [teamName]);

  useEffect(() => {
    console.log("batter:", batter);
    console.log(bowler);
    console.log(allRounder);
  }, []);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-2 p-5">
        <div className="flex justify-between">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-200">
            Batters
          </h2>
          <h2 className="text-2xl font-medium text-gray-300">Season 2025</h2>
        </div>
        <div
          className="w-full h-full rounded-2xl overflow-hidden 
  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
  gap-3 sm:gap-4 lg:gap-5 px-3 sm:px-4 py-3"
        >
          {batter && Array.isArray(batter) && batter.length > 0 ? (
            batter.map((item, index) => (
              <TeamPlayersProfile key={index} batter={item} />
            ))
          ) : (
            <div>No batters found</div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5">
        <div className="flex justify-between">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-200">
            AllRounder
          </h2>
        </div>
        <div
          className="w-full h-full rounded-2xl overflow-hidden 
  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
  gap-3 sm:gap-4 lg:gap-5 px-3 sm:px-4 py-3"
        >
          {allRounder && Array.isArray(allRounder) && allRounder.length > 0 ? (
            allRounder.map((item, index) => (
              <TeamPlayersProfile key={index} batter={item} />
            ))
          ) : (
            <div>No AllRounder found</div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5">
        <div className="flex justify-between">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-200">
            Bowler
          </h2>
        </div>
        <div 
          className="w-full h-full rounded-2xl overflow-hidden 
  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
  gap-3 sm:gap-4 lg:gap-5 px-3 sm:px-4 py-3"
        >
          {bowler && Array.isArray(bowler) && bowler.length > 0 ? (
            bowler.map((item, index) => (
              <TeamPlayersProfile key={index} batter={item}  />
            ))
          ) : (
            <div>No AllRounder found</div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Bottom;
