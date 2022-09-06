import { Sequelize, where } from "sequelize";
import { football } from "../models/footballModel.js";
import { authenticte } from "./auth.js";

export const getScore = async (req, res) => {
  try {
    let check = authenticte(req.body.emailId);

    if (check == false) {
      throw error;
    } else {
      let score = await football.findAll();
      res.status(200).json(score[0]);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const putScore = async (req, res) => {
  try {
    let check = authenticte(req.body.emailId);

    if (check == false) {
      throw error;
    } else {
      await football.create(req.body);
      res.status(201).json({ message: "Score Noted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
