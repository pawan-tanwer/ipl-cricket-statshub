const playerModel = require("../models/players.model");
const fs = require("fs");
const path = require("path");

const battingCareer = async (req, res) => {
  const { name } = req.params;
  const player = await playerModel.findOne({ name: name });

  if (!player) {
    return res.json({ message: `${name} naam ka player nahi mila` });
  }

  const battingCareerStats = player.stats.batting.find(
    (b) => b.season === "career",
  );
  const bowlingCareerStats = player.stats.bowling.find(
    (b) => b.season === "career",
  );

  res.json({
    name: player.name,
    team: player.team,
    nationality: player.nationality,
    role: player.role,
    ipl_debut: player.ipl_debut,
    bio: player.bio,
    matches: player.matches,
    battingCareerStats,
    bowlingCareerStats,
    batting: player.stats.batting,
    bowling: player.stats.bowling,
  });
};

const mostSixesList = async (req, res) => {
  try {
    const sixesResult = await playerModel.aggregate([

      // Step 1 — Array tod do
      { $unwind: "$stats.batting" },

      // Step 2 — Sirf career stats lo jisme sixes > 0
      {
        $match: {
          "stats.batting.season": "career",
          "stats.batting.sixes": { $gt: 0 },
        },
      },

      // Step 3 — ✅ Duplicates hatao — max sixes lo
      {
        $group: {
          _id: "$name",
          name:        { $first: "$name" },
          team:        { $first: "$team" },
          role:        { $first: "$role" },
          nationality: { $first: "$nationality" },
          sixes:       { $max: "$stats.batting.sixes" },  
        }
      },

      // Step 4 — Sort karo — sabse zyada sixes pehle
      { $sort: { sixes: -1 } },

      // Step 5 — Top 10
      { $limit: 10 },

      // Step 6 — Clean output
      {
        $project: {
          _id: 0,
          name: 1,
          team: 1,
          role: 1,
          nationality: 1,
          sixes: 1,
        }
      }

    ]);

    res.status(200).json(sixesResult);

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error", error })
  }
};

const mostWicketsList = async (req, res) => {
  const wicketsResult = await playerModel.aggregate([
    { $unwind: "$stats.bowling" },

    {
      $match: { "stats.bowling.season": "career"},
    },

    { $sort: { "stats.bowling.wickets": -1 } }, 
    

    {
      $project: {
        _id: 0,
        name: 1,
        team: 1,
        role:1,
        nationality:1,
        wickets: "$stats.bowling.wickets",
      },
    },
  ]);

  res.json(wicketsResult);
};

const mostRunsList = async(req,res)=>{
  const runsResult= await playerModel.aggregate([
    {$unwind:"$stats.batting"},
    {$match:{
      "stats.batting.season":"career",
      "stats.batting.runs":{$gt:0}
    }},

     {
        $group: {
          _id: "$name",
          name:        { $first: "$name" },
          team:        { $first: "$team" },
          role:        { $first: "$role" },
          nationality: { $first: "$nationality" },
          runs:       { $max: "$stats.batting.runs" },  
        }
      },

      { $sort: { runs: -1 } },

      // Step 5 — Top 10
      { $limit: 10 },

      // Step 6 — Clean output
      {
        $project: {
          _id: 0,
          name: 1,
          team: 1,
          role: 1,
          nationality: 1,
          runs: 1,
        }
      }
  ])

  res.status(200).json(runsResult);
}

const mostCenturiesList = async(req,res)=>{
  const centuriesResult = await playerModel.aggregate([

    {$unwind:"$stats.batting"},

    {$match:{
      "stats.batting.season":"career",
      "stats.batting.centuries":{$gt:0}
    }},

    {$group:{
      _id:"$name",
      name:{$first:"$name"},
      team:{$first:"$team"},
      role:{$first:"$role"},
      nationality:{$first:"$nationality"},
      centuries:{$max:"$stats.batting.centuries"}
    }},

    {$sort:{centuries:-1}},

    {$limit:10},

    {$project:{
      _id:0,
      name:1,
      team:1,
      role:1,
      nationality:1,
      centuries:1
    }}
  ])

  res.status(200).json(centuriesResult)
}

const playersName = async (req, res) => {// not for api 
  try {
    const names = await playerModel.find({});

    names.forEach((e) => {
      const filePath = path.join(__dirname, "../../src/name.txt");
      fs.appendFileSync(filePath, `${e.name}\n`);
    });

    res.json({ message: "success", total: names.length });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
};

const teamPlayers = async (req, res) => {// use in particular team page. meams  teams ke player
  const { name } = req.params;

   const batters = await playerModel.aggregate([
      {
        $match:{
          $or:[
            {$and:[{team:name},{role:"Batter"}]},
            {$and:[{team:name},{role:"Wicketkeeper Batter"}]}
          ]
        }
      },
      {
        $unwind: "$stats.batting"
      },
      {
        $match: {
          "stats.batting.season": 2025
        }
      },
      {
        $group: {
          _id: "$name",
          name: { $first: "$name" },
          team: { $first: "$team" },
          role: { $first: "$role" },
          nationality:{$first: "$nationality"},
        }
      },
      {
        $project: {
          _id: 0,
          name: 1,
          team: 1,
          role: 1,
          nationality:1
        }
      },
      
    ])

    const allRounders = await playerModel.aggregate([
      {
        $match:{
          $and:[{team:name},{role:"All Rounder"}]
        }
      },
      {
        $unwind: "$stats.batting"
      },
      {
        $match: {
          "stats.batting.season": 2025
        }
      },
      {
        $group: {
          _id: "$name",
          name: { $first: "$name" },
          team: { $first: "$team" },
          role: { $first: "$role" },
          nationality:{$first: "$nationality"},
        }
      },
      {
        $project: {
          _id: 0,
          name: 1,
          team: 1,
          role: 1,
          nationality:1
        }
      },
      
    ])

    const bowlers = await playerModel.aggregate([
      {
        $match:{
          $and:[{team:name},{role:"Bowler"}]
        }
      },
      {
        $unwind: "$stats.batting"
      },
      {
        $match: {
          "stats.batting.season": 2025
        }
      },
      {
        $group: {
          _id: "$name",
          name: { $first: "$name" },
          team: { $first: "$team" },
          role: { $first: "$role" },
          nationality:{$first: "$nationality"},
        }
      },
      {
        $project: {
          _id: 0,
          name: 1,
          team: 1,
          role: 1,
          nationality:1
        }
      },
      
    ])
    
    if (!batters || batters.length === 0) {
      return res.status(200).json({
        success: true,
        data: [],
        message: "No batters found for 2025 season"
      })
    }
    
    return res.status(200).json({
      success: true,
      batter: batters,
      allRounder:allRounders,
      bowler:bowlers
    })
};

const playerName =  async (req, res) => {
  try {
    const searchTerm = req.params.name;

    const players = await playerModel.find({
      name: { $regex: searchTerm, $options: 'i' }
    });

    // Koi player nahi mila
    if (players.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Enter Proper name"
      });
    }

    // Exact match check karo
    const exactMatch = players.find(
      p => p.name.toLowerCase() === searchTerm.toLowerCase()
    );

    const bestMatch = exactMatch || players[0];

    // Success response — full name DB se
    res.json({
      success: true,
      name: bestMatch.name
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

module.exports = {
  battingCareer,
  mostSixesList,
  mostWicketsList,
  mostRunsList,
  mostCenturiesList,
  playersName,
  teamPlayers,
  playerName
};
