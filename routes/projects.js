
import express from "express"
import { postProjects } from "../controllers/projects.js";
const router = express.Router();

router.get("/", postProjects);
// router.post("/", postProjects);

export default router