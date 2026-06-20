const playerModel = require("../models/players.model.js")

const seasonLeaders = async (req, res) => {
  const year = parseInt(req.params.year);

  const [topRuns, topSixes, topWickets, topCenturies, topFifties] = await Promise.all([

    // 1. Highest Runs
    playerModel.aggregate([
      { $unwind: "$stats.batting" },
      { $match: { "stats.batting.season": year } },
      { $sort: { "stats.batting.runs": -1 } },
      { $limit: 1 },
      { $project: { _id:0, name:1, team:1, 
          value: "$stats.batting.runs" }}
    ]),

    // 2. Most Sixes
    playerModel.aggregate([
      { $unwind: "$stats.batting" },
      { $match: { "stats.batting.season": year } },
      { $sort: { "stats.batting.sixes": -1 } },
      { $limit: 1 },
      { $project: { _id:0, name:1, team:1, 
          value: "$stats.batting.sixes" }}
    ]),

    // 3. Most Wickets
    playerModel.aggregate([
      { $unwind: "$stats.bowling" },
      { $match: { "stats.bowling.season": year } },
      { $sort: { "stats.bowling.wickets": -1 } },
      { $limit: 1 },
      { $project: { _id:0, name:1, team:1, 
          value: "$stats.bowling.wickets" }}
    ]),

    // 4. Most Centuries
    playerModel.aggregate([
      { $unwind: "$stats.batting" },
      { $match: { "stats.batting.season": year } },
      { $sort: { "stats.batting.centuries": -1 } },
      { $limit: 1 },
      { $project: { _id:0, name:1, team:1, 
          value: "$stats.batting.centuries" }}
    ]),

    // 5. Most Fifties
    playerModel.aggregate([
      { $unwind: "$stats.batting" },
      { $match: { "stats.batting.season": year } },
      { $sort: { "stats.batting.half_centuries": -1 } },
      { $limit: 1 },
      { $project: { _id:0, name:1, team:1, 
          value: "$stats.batting.half_centuries" }}
    ]),

  ]);

  res.status(200).json({
    season: year,
    leaders: {
      highestRuns:    { ...topRuns[0],      category: "Highest Runs" },
      mostSixes:      { ...topSixes[0],     category: "Most Sixes" },
      mostWickets:    { ...topWickets[0],   category: "Most Wickets" },
      mostCenturies:  { ...topCenturies[0], category: "Most Centuries" },
      mostFifties:    { ...topFifties[0],   category: "Most Fifties" },
    }
  });
};

module.exports ={seasonLeaders}