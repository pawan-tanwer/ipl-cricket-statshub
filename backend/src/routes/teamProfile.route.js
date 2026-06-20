const express = require("express");

const router =  express.Router();

const {teamProfile} =  require("../controllers/teamProfile.controller.js");

router.get("/team/:name", teamProfile);

module.exports = router;