import { Sequelize, where } from "sequelize";
import { users } from "../models/admin.js";

export const authenticte = async (emailId, password) => {
  try {
    let user = await users.findAll({
      where: {
        emailId: emailId,
      },
    });

    if (user[0].password == password) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};


// POST API for authenticating user
export const auth = async (req, res) => {
  try {
    let check = await authenticte(req.body.emailId, req.body.password);

    if (check == true) {
      res.status(200).json({ message: "User is authentic", authCode: 1 });
    } else {
      res.status(500).json({ message: "User is not authentic", authCode: 0 });
    }
  } catch (error) {
    res.status(500).json({ message: "User is authentic", authCode: 0 });
  }
};
