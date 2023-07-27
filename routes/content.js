
import express from "express"
import { postContent } from "../controllers/content.js";
const router = express.Router();

// router.post("/", postContent);
router.get("/", postContent);

export default router