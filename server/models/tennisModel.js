import { Sequelize } from "sequelize";
import db from "../conn.js";

const { DataTypes } = Sequelize;

export const tennis = db.define(
  "tennis",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    player1: {
      type: DataTypes.STRING,
    },
    player2: {
      type: DataTypes.STRING,
    },
    player1ScoreSet1: {
      type: DataTypes.INTEGER,
    },
    player2ScoreSet1: {
      type: DataTypes.INTEGER,
    },
    player1ScoreSet2: {
      type: DataTypes.INTEGER,
    },
    player2ScoreSet2: {
      type: DataTypes.INTEGER,
    },
    player1ScoreSet3: {
      type: DataTypes.INTEGER,
    },
    player2ScoreSet3: {
      type: DataTypes.INTEGER,
    },
    currentSetPlayer1MatchScore: {
      type: DataTypes.INTEGER,
    },
    currentSetPlayer2MatchScore: {
      type: DataTypes.INTEGER,
    },
    currentPointPlayer1PointScore: {
      type: DataTypes.STRING,
    },
    currentPointPlayer2PointScore: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
