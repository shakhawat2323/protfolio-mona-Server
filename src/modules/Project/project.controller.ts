import { Request, Response } from "express";
import { ProjectService } from "./project.service";

// ✅ Create
const createProject = async (req: Request, res: Response) => {
  try {
    const project = await ProjectService.createProject(req.body);
    res.status(201).json({ message: "Project created successfully!", project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create project", error });
  }
};

// ✅ Get All
const getAllProjects = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 6;
    const search = (req.query.search as string) || "";
    const sort = (req.query.sort as "asc" | "desc") || "desc";

    const result = await ProjectService.getAllProjects({
      page,
      limit,
      search,
      sort,
    });

    res.status(200).json(result);
  } catch (error: any) {
    console.error("Error fetching projects:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch projects", error: error.message });
  }
};

// ✅ Get by ID
const getProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const project = await ProjectService.getProjectById(Number(id));
  if (!project) return res.status(404).json({ message: "Project not found" });
  res.json(project);
};

// ✅ Update
const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updated = await ProjectService.updateProject(Number(id), req.body);
    res.json({ message: "Project updated successfully!", updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update project", error });
  }
};

// ✅ Delete
const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await ProjectService.deleteProject(Number(id));
    res.json({ message: "Project deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete project", error });
  }
};

export const ProjectController = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
