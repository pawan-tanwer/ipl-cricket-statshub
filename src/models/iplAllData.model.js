const mongoose = require("mongoose");

const iplMatchSchema = new mongoose.Schema(
  {
    matchType: {
      type: String,
      required: true,
      trim: true,
    },
    matchCentreURL: {
      type: String,
      trim: true,
    },
    matchDate: {
      type: String,
      required: true,
      trim: true,
    },
    matchVenue: {
      type: String,
      required: true,
      trim: true,
    },
    winningTeam: {
      type: String,
      trim: true,
    },
    winningMargin: {
      type: String,
      trim: true,
    },
    team1Name: {
      type: String,
      required: true,
      trim: true,
    },
    team1Score: {
      type: String,
      trim: true,
    },
    team2Name: {
      type: String,
      required: true,
      trim: true,
    },
    team2Score: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: "ipl_matches",
  }
);

const iplModel = mongoose.model("IplMatch", iplMatchSchema);

module.exports = iplModel;