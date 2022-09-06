import db from "./conn.js";
import express from "express";
import cors from "cors";
import router from "./routes/index.js";

const app = express();

try {
  db.authenticate();
  console.log("Data base connected");
} catch (error) {
  console.log("Connection error: ", error);
}

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(5002, () => {
  console.log("Running on port 5002");
});