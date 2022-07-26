import { Router } from "express";
import {
  renderData,

} from "../controllers/data.controller.js";
import { isAuthenticated } from "../helpers/auth.js";

const router = Router();

// Data
router.get("/getData", isAuthenticated, renderData);


export default router;
