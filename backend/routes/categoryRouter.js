import express from "express";
import { addCategory } from "../controllers/categoryController.js";
const router = express.Router();

router.post("/addCategory", addCategory);

export default router;
