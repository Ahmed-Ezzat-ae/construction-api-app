
import express from "express"
import { postServices } from "../controllers/services2.js";
const router = express.Router();

router.get("/", postServices);
// router.post("/", postServices);



export default router