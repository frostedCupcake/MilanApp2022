import { cricket } from "../models/cricketModel.js";
import { Sequelize, where } from "sequelize";
import { authenticte } from "./auth.js";

export const getScore = async (req, res) => {
  try {
    let check = authenticte(req.body.emailId);

    if (check == false) {
      throw error;
    } else {
      let score = await cricket.findAll();
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
      await cricket.create(req.body);
      res.status(201).json({ message: "Score Noted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
