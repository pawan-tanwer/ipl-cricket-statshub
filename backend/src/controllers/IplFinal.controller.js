const iplFinalModel = require("../models/iplFinal.model.js");
const iplModel =  require("../models/iplAllData.model.js")

const aboutTeam = async(req,res)=>{

    const {name} = req.params;
    const totalMatches = await iplModel.aggregate([// aaj tak kitne total matches jeete team

        {$match:{
            $or:[
                {"team1Name":name},
                {"team2Name":name}
            ]
        }}
    ])

    const teamWin = await iplModel.aggregate([
        {$match:{"winningTeam":name}}
    ])

    const winningPercentage = parseFloat(((teamWin.length / totalMatches.length) * 100).toFixed(2));

    const teamTrophy  = await iplFinalModel.aggregate([
        {$match:{
            "winner": name
        }},
        
    ])
    
    const winningYears = await iplFinalModel.aggregate([
        {$match:{winner:name}},
        {$sort:{"year":1}},
        {$project:{
            _id:0,
            year:1,
        }}
    ])

    res.json({teamTrophy:teamTrophy.length,
              winningPercentage:winningPercentage, 
              totalMatches:totalMatches.length,
              teamWin:teamWin.length,
              winningYear:winningYears
            })
}

const iplFinals = async(req, res)=>{

    const final = await iplFinalModel.aggregate([
        {$sort:{"year":-1}},
        {$project:{
            _id:0,
            year:1,
            team1:1,
            team2:1,
            score:1,
            winner:1,
            result:1,
            venue:1
        }}
    ])
    
    if(!final){
        return res.json({message:"no finals data founds"})
    }

    res.status(200).json({finals:final})
    
}

module.exports ={
    aboutTeam,
    iplFinals
}