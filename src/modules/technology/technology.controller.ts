import { Request, Response } from "express";
import { technologyService } from "./technology.service";

// ✅ POST /api/technologies
const createTechnology = async (req: Request, res: Response) => {
  try {
    const { name, icon } = req.body;

    if (!name || !icon) {
      return res.status(400).json({ message: "Name and icon are required" });
    }

    const result = await technologyService.createTechnology({ name, icon });
    res
      .status(201)
      .json({ message: "Technology created successfully", result });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Failed to create technology", error: error.message });
  }
};

const getAllTechnologies = async (req: Request, res: Response) => {
  try {
    const technologies = await technologyService.getAllTechnologies();
    res.json(technologies);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Failed to fetch technologies", error: error.message });
  }
};

// ✅ DELETE /api/technologies/:id
const deleteTechnology = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await technologyService.deleteTechnology(id);

    res.json({ message: "Technology deleted successfully", result });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Failed to delete technology", error: error.message });
  }
};
export const technologyController = {
  createTechnology,
  deleteTechnology,
  getAllTechnologies,
};
