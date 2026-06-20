const express = require("express");
const router = express.Router();

const {battingCareer,mostSixesList,mostWicketsList,mostRunsList,mostCenturiesList,playersName,teamPlayers,playerName} = require("../controllers/player.controller.js");

router.get("/battingCareer/:name",battingCareer);
router.get("/mostSixes",mostSixesList);// list of most sixes in ipl
router.get("/mostWickets",mostWicketsList);//list of most Wickets in ipl
router.get("/mostRuns",mostRunsList);//list of most runs in ipl
router.get("/mostCenturies",mostCenturiesList);
router.get("/playersName",playersName);
router.get("/players/:name",teamPlayers);//list of all player of particular team name :name== team ka name
router.get("/search/:name",playerName)// finding player name in database, using in search bar

module.exports= router;