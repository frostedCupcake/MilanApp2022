import express from "express";
import {
  getScore as getTScore,
  putScore as putTScore,
} from "../controllers/tennis.js";
import {
  getScore as getCScore,
  putScore as putCScore,
} from "../controllers/cricket.js";
import {
  getScore as getFScore,
  putScore as putFScore,
} from "../controllers/football.js";

const router = express.Router();

router.get("/football", getFScore);
router.get("/tennis", getTScore);
router.get("/cricket", getCScore);

router.post("/football", putFScore);
router.post("/tennis", putTScore);
router.post("/cricket", putCScore);


export default router;
