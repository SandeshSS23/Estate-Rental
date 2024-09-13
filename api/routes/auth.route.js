import express from "express";
import {
  google,
  signin,
  signOut,
  signup,
} from "../controllers/auth.controller.js";

const router = express.Router();

// post request as we are sending data from the body
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signOut);
export default router;
