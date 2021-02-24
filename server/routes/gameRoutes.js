import express from "express";
import cors from 'cors';
import { getGameData } from "../controllers/gameController.js";

const router = express.Router();

router.get("/:id?/:apiPath?", getGameData, cors());

export default router;
