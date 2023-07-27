
import express from "express"
import { postAbout } from "../controllers/about.js";
const router = express.Router();

router.get("/", postAbout);
// router.post("/", postAbout);

export default router