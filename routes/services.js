
import express from "express"
import { postServices } from "../controllers/services1.js";
const router = express.Router();

router.get("/", postServices);
// router.post("/", postServices);



export default router