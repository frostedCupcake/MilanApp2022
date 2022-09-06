import { Sequelize } from "sequelize";
import db from "../conn.js";

const { DataTypes } = Sequelize;

export const cricket = db.define(
  "cricket",
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
    numberOfBallsLeft: {
      type: DataTypes.INTEGER,
    },
    runs: {
      type: DataTypes.INTEGER,
    },
    numberOfOversOver: {
      type: DataTypes.INTEGER,
    },
    ballsLeftInThisOver: {
      type: DataTypes.INTEGER,
    },
    numberOfWickets: {
      type: DataTypes.INTEGER,
    },
    runRate: {
      type: DataTypes.VIRTUAL,
      get() {
        let runs = this.runs;
        let overs = this.numberOfOversOver;
        return runs / overs;
      },
      set(value) {
        throw new Error("Do not try to set the `fullName` value!");
      },
    },
  },
  {
    freezeTableName: true,
  }
);

//await cricket.sync({ force: true });
