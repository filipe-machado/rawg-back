import express from "express";
import { getGameData } from "../controllers/gameController.js";

const router = express.Router();

router.get("/:id?", getGameData, );

export default router;
