import { Router } from "express";
import {

  renderSigninForm,
  signin,
  logout,
} from "../controllers/auth.controllers.js";

const router = Router();

// Routes

router.get("/auth/signin", renderSigninForm);

router.post("/auth/signin", signin);

router.get("/auth/logout", logout);

export default router;
