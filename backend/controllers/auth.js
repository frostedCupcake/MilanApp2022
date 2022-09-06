import { Sequelize, where } from "sequelize";
import { users } from "../models/admin.js";

export const authenticte = async (emailId, password) => {
   try {
      let user = await users.findAll({
         where: {
            emailId: emailId,
         }
      });

      if (user[0].password == password) {
         return true;
      } else {
         return false;
      }
   } catch (error) {
      return false
   }
};
