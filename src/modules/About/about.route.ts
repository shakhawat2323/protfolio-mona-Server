import express from "express";
import { AboutMeController } from "./about.controller";

const router = express.Router();

// Get AboutMe
router.get("/aboutme", AboutMeController.getAboutMe);

// Update AboutMe
router.patch("/aboutme", AboutMeController.updateAboutMe);

// Get all certifications
router.get("/certifications", AboutMeController.getCertifications);

// Add new certification
router.post("/certifications", AboutMeController.addCertification);
router.get("/certifications/:id", AboutMeController.GetCertificationById);
// Update certification by id
router.patch("/certifications/:id", AboutMeController.updateCertification);

// Delete certification by id
router.delete("/certifications/:id", AboutMeController.deleteCertification);
router.post("/creareaboutme", AboutMeController.createAboutMe);

export const AboutMeRouter = router;
