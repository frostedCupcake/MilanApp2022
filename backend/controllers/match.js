import { Sequelize, where } from "sequelize";
import { match } from "../models/matchModel.js";
import { authenticte } from "./auth.js";

export const createMatch = async (req, res) => {
  try {
    let check = authenticte(req.body.emailId);

    if (check == false) {
      throw error;
    } else {
      await match.create(req.body);
      res.json({ message: "Match created" }).status(201);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
