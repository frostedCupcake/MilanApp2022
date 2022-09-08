import { Sequelize, where } from "sequelize";
import { match } from "../models/matchModel.js";
import { authenticte } from "./auth.js";


// POST API 
export const createMatch = async (req, res) => {
  try {
    let check = authenticte(req.body.emailId);

    if (check == false) {
      throw error;
    } else {
      await match.create({
        team1Name: req.body.team1Name,
        team2Name: req.body.team2Name,
        sport: req.body.sport,
        StartTime: req.body.StartTime,
        gameStatus: true,
        winner: "NAN",
      });
      res.json({ message: "Match created" }).status(201);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET API
export const getAllMatches = async (req, res) => {
  try {
    let allM = await match.findAll({
      where: {
        winner: {
          [Sequelize.Op.ne]: "NAN",
        },
      },
    });

    res.status(200).json(allM);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST API
export const endMatch = async (req, res) => {
  try {
    let t1 = req.body.team1Name;
    let t2 = req.body.team2Name;
    let sp = req.body.sport;
    let w = req.body.winner;

    await match.update(
      {
        winner: w,
        gameStatus: false,
      },
      {
        where: {
          team1Name: t1,
          team2Name: t2,
          sport: sp,
        },
      }
    );

    res.status(201).json({ message: "Match ended" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
