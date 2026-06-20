require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path")
const playerRouter = require("./routes/player.route.js");
const seasonLeaderRouter = require("./routes/seasonLeader.route.js")
const iplFinalRouter = require("./routes/iplFinal.route.js")
const teamProfileRouter = require("./routes/teamProfile.route.js")


const app = express();


// CORS — frontend ko allow karo
app.use(cors({
  origin: "http://localhost:5173",     // aapka frontend port
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connection of mongodb dataBase
const connectToDb = require("./config/db.js");
connectToDb();

// routes calling  or start point
app.use("/ipl",playerRouter);
app.use("/ipl",seasonLeaderRouter);
app.use("/ipl/final",iplFinalRouter)
app.use("/src/teams", express.static(path.join(__dirname, "../src/teams")))
app.use("/ipl", teamProfileRouter)


app.get("/", (req,res)=>{
    res.send("Here you can get all data of any player")
})

app.listen(process.env.PORT||8000, ()=>console.log("server is live"));