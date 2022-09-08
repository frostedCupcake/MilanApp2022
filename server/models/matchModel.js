import { Sequelize } from "sequelize";
import db from "../conn.js";

const { DataTypes } = Sequelize;

export const match = db.define(
  "match",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    team1Name: {
      type: DataTypes.STRING,
    },
    team2Name: {
      type: DataTypes.STRING,
    },
    sport: {
      type: DataTypes.STRING,
    },
    StartTime: {
      type: DataTypes.DATE,
    },
    gameStatus: {
      type: DataTypes.BOOLEAN,
    },
    winner: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

//await match.sync({ force: true });
