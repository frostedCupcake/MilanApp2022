import { Sequelize } from "sequelize";
import db from "../conn.js";

const { DataTypes } = Sequelize;

export const football = db.define(
  "football",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    team1Score: {
      type: DataTypes.INTEGER,
    },
    team2Score: {
      type: DataTypes.INTEGER,
    },
    team1Name: {
      type: DataTypes.STRING,
    },
    team2Name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

//await football.sync({ force: true });