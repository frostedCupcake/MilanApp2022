import { Sequelize, where } from "sequelize";
import { teams } from "../models/teamModel.js";
import { authenticte } from "./auth.js";

export const createTeam = async (req, res) => {
  try {
    let check = authenticte(req.body.emailId);

    if (check == false) {
      throw error;
    } else {
      await teams.create({
        teamName: req.body.teamName,
        score: 0,
      });
      res.json({ message: "Team created" }).status(201);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// PUT API for updating the score of a team.
export const updateTeamScore = async (req, res) => {
  try {
    let check = authenticte(req.body.emailId);

    if (check == false) {
      throw error;
    } else {
      await teams.update(
        {
          score: req.body.score,
        },
        {
          where: {
            teamName: req.body.teamName,
          },
        }
      );

      res.json({ message: "Score Updated" }).status(201);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
