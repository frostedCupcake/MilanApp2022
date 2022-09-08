import { Sequelize } from "sequelize";

const userName = "root";
const password = "Tsunami123!";
const dbName = "milan";

const db = new Sequelize(`${dbName}`, `${userName}`, `${password}`, {
  host: "localhost",
  dialect: "mysql",
});

export default db;
