import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Filter = () => {
  const { sortValue, setSortValue } = useContext(StoreContext);

  const setHandler = () => {
    const selectValue = event.target.value;
    setSortValue(selectValue);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-4 px-1">
      <h2 className="text-lg sm:text-2xl font-bold text-amber-100">Top Players</h2>
      <div className="flex gap-1.5 items-center self-end sm:self-auto">
        <p className="text-gray-500 text-sm">sort by:</p>
        <select
          onChange={setHandler}
          value={sortValue}
          className="text-amber-700 bg-transparent border border-amber-700/40 rounded-lg px-2 py-1 text-sm focus:outline-none cursor-pointer"
          name="Most Runs"
          id="Most Runs"
        >
          <option value="mostRuns">Most Runs</option>
          <option value="mostCenturies">Most Centuries</option>
          <option value="mostSixes">Most Sixes</option>
          <option value="mostWickets">Most Wickets</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
