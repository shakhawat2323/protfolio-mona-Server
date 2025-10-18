import compression from "compression";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { BlogPost } from "./modules/Blog/blog.router";
import { ProjectRouter } from "./modules/Project/project.route";
import { AboutMeRouter } from "./modules/About/about.route";
import { TechnologyRouter } from "./modules/technology/technology.route";
import { AuthRouter } from "./modules/Auth/auth.route";

const app = express();

// Middleware
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(compression()); // Compresses response bodies for faster delivery
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Default route for testing
app.get("/", (_req, res) => {
  res.send("API is running");
});
app.use("/api/v1", BlogPost);
app.use("/api/v1", ProjectRouter);
app.use("/api/v1", AboutMeRouter);
app.use("/api/v1", TechnologyRouter);
app.use("/api/v1", AuthRouter);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
