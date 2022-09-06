import { Sequelize } from "sequelize";
import db from "../conn.js";

const { DataTypes } = Sequelize;

export const teams = db.define(
  "teams",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    teamName: {
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

//await teams.sync({ force: true });
