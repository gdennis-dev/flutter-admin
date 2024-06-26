import express from "express";
import {
  loginClient,
  registerClient,
  getAllClient,
  setApply,
} from "../controllers/clientController.js";
const router = express.Router();

router.post("/loginClient", loginClient);
router.post("/registerClient", registerClient);
router.get("/getAllClient", getAllClient);
router.put("/setApply", setApply);

export default router;
