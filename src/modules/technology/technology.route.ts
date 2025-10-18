import express from "express";
import { technologyController } from "./technology.controller";

const router = express.Router();
router.get("/technology", technologyController.getAllTechnologies);
// Add new technology
router.post("/technology", technologyController.createTechnology);

// Delete technology by ID
router.delete("/technology/:id", technologyController.deleteTechnology);

export const TechnologyRouter = router;
