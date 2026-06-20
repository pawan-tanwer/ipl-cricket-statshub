const teamProfileModel = require("../models/teamProfile.js")

const teamProfile =async(req,res)=>{

    const {name} = req.params;

    const data = await teamProfileModel.findOne({teamName:name})

    if(!data){
        return res.json({success:false, message:"NO Data "})
    }

    res.json({data})
}

module.exports = {
    teamProfile
} 