import { Request, Response } from "express";
import { AboutMeService } from "./about.service";

const createAboutMe = async (req: Request, res: Response) => {
  try {
    const aboutMe = await AboutMeService.createAboutMe(req.body);
    res.json({ message: "AboutMe created successfully", aboutMe });
  } catch (error: any) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to create AboutMe", error: error.message });
  }
};
const getAboutMe = async (req: Request, res: Response) => {
  try {
    const about = await AboutMeService.createDefaultAboutMe();
    res.json(about);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch AboutMe", error });
  }
};

const updateAboutMe = async (req: Request, res: Response) => {
  try {
    const updated = await AboutMeService.updateAboutMe(req.body);
    res.json({ message: "AboutMe updated successfully", updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update AboutMe", error });
  }
};

// Get all certifications
const getCertifications = async (req: Request, res: Response) => {
  try {
    const certifications = await AboutMeService.getAll();
    res.json(certifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch certifications", error });
  }
};

// Add new certification
const addCertification = async (req: Request, res: Response) => {
  try {
    const certification = await AboutMeService.create(req.body);
    res.json({ message: "Certification added", certification });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add certification", error });
  }
};

// Update certification by id
const updateCertification = async (req: Request, res: Response) => {
  try {
    const certification = await AboutMeService.update(
      Number(req.params.id),
      req.body
    );
    res.json({ message: "Certification updated", certification });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update certification", error });
  }
};

// Delete certification by id
const deleteCertification = async (req: Request, res: Response) => {
  try {
    await AboutMeService.deletes(Number(req.params.id));
    res.json({ message: "Certification deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete certification", error });
  }
};

//Get certification by id
const GetCertificationById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await AboutMeService.getCertificationById(id);

    if (!result) {
      return res.status(404).json({ message: "Certification not found" });
    }

    res.json(result);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Failed to fetch certification", error: error.message });
  }
};

export const AboutMeController = {
  createAboutMe,
  GetCertificationById,
  getAboutMe,
  updateAboutMe,
  getCertifications,
  addCertification,
  updateCertification,
  deleteCertification,
};
