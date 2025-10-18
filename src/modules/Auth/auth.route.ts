import express from "express";
import { verifyToken } from "../../Middleware/middleware";
import { AuthControllers } from "./auth.controller";

const router = express.Router();

// 🔑 Login route
router.post("/auth/login", AuthControllers.credentialsLogin);

// 🚪 Logout route
router.post("/auth/logout", verifyToken, AuthControllers.logoutAdmin);

export const AuthRouter = router;
