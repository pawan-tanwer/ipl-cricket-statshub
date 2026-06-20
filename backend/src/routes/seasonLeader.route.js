const express = require("express");

const router = express.Router();

const {seasonLeaders} = require("../controllers/seasonLeader.cotroller.js")

router.get("/season-leaders/:year", seasonLeaders);

module.exports = router;