import express from "express";
import { ProjectController } from "./project.controller";

const router = express.Router();

// ✅ Create
router.post("/projects", ProjectController.createProject);

// ✅ Read All
router.get("/projects", ProjectController.getAllProjects);

// ✅ Read Single
router.get("/projects/:id", ProjectController.getProjectById);

// ✅ Update
router.patch("/projects/:id", ProjectController.updateProject);

// ✅ Delete
router.delete("/projects/:id", ProjectController.deleteProject);

export const ProjectRouter = router;
