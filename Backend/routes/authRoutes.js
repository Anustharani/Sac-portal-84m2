import express from "express";
import { signup, login, getProfile } from "../controllers/authController.js";
import authMiddlewares from "../middleware/authMiddlewares.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// Protected Route
router.get("/profile", authMiddlewares, getProfile);

export default router;