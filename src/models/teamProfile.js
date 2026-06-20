const mongoose = require("mongoose");

 const teamProfileSchema = new mongoose.Schema({
    teamName: {
        type:String
    },
    shortName:{
        type:String
    },
    established:{
        type:Number
    },
    owner:{
        type:String
    },
    homeGround:{
        type:String
    },
    battingCoach:{
        type:String
    },
    bowlingCoach:{
        type:String
    },
    bio:{
        type:String
    }
 })

 const teamProfileModel = mongoose.model("teamProfile", teamProfileSchema);

 module.exports = teamProfileModel;