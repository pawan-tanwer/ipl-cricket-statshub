const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  player_id: String,
  name: String,
  nationality: String,
  team: String,
  role: String,
  date_of_birth: Number,
  ipl_debut: Number,
  total_matches: Number,
  profile_url: String,
  bio: String,
  stats: {
    batting: [mongoose.Schema.Types.Mixed], // jo bhi aaye accept karo
    bowling: [mongoose.Schema.Types.Mixed],
  },
},{timestamps:true});

const playerModel = mongoose.model("Player", playerSchema);

module.exports = playerModel;
