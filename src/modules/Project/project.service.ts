import { Prisma, Project } from "@prisma/client";
import { prisma } from "../../config/db";
import { GetAllProjectsParams } from "../../Type/Types";

// ✅ Create Project
const createProject = async (
  payload: Prisma.ProjectCreateInput
): Promise<Project> => {
  const result = await prisma.project.create({
    data: payload,
  });
  return result;
};

// ✅ Get All Projects
const getAllProjects = async ({
  page = 1,
  limit = 6,
  search,
  sort = "desc",
}: GetAllProjectsParams): Promise<{
  data: Project[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}> => {
  const skip = (page - 1) * limit;

  const where: any = search
    ? {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
        ],
      }
    : {};

  const data = await prisma.project.findMany({
    skip,
    take: limit,
    where,
    orderBy: { createdAt: sort },
  });

  const total = await prisma.project.count({ where });

  return {
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

// ✅ Get Single Project by ID
const getProjectById = async (id: number): Promise<Project | null> => {
  return await prisma.project.findUnique({
    where: { id },
  });
};

// ✅ Update Project
const updateProject = async (
  id: number,
  data: Prisma.ProjectUpdateInput
): Promise<Project> => {
  return await prisma.project.update({
    where: { id },
    data,
  });
};

// ✅ Delete Project
const deleteProject = async (id: number): Promise<Project> => {
  return await prisma.project.delete({
    where: { id },
  });
};

export const ProjectService = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
