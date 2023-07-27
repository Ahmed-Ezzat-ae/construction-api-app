
import express from "express"
import { postContact } from "../controllers/contact.js";
const router = express.Router();

// router.post("/", postContact);
router.get("/", postContact);

export default router