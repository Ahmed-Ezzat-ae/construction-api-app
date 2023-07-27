
import express from "express"
import { postHome } from "../controllers/home.js";
const router = express.Router();

router.get("/", postHome);
// router.post("/", postHome);

export default router