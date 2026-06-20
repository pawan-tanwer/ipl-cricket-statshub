const express = require("express");

const router =  express.Router();

const {aboutTeam,iplFinals} =  require("../controllers/IplFinal.controller.js");

router.get("/team/:name",aboutTeam);
router.get("/",iplFinals)




module.exports = router;