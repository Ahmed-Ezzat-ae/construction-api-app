
import express from "express"
import { postSolution } from "../controllers/solutions.js";
const router = express.Router();

// router.post("/", postSolution);
router.get("/", postSolution);

export default router