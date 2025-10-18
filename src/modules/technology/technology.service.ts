import { prisma } from "../../config/db";
import { Technology } from "@prisma/client";

// ✅ Create new technology
const createTechnology = async (data: {
  name: string;
  icon: string;
}): Promise<Technology> => {
  return await prisma.technology.create({
    data,
  });
};

// ✅ Delete technology by ID
const deleteTechnology = async (id: number): Promise<Technology | null> => {
  return await prisma.technology.delete({
    where: { id },
  });
};
const getAllTechnologies = async (): Promise<Technology[]> => {
  return await prisma.technology.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const technologyService = {
  createTechnology,
  deleteTechnology,
  getAllTechnologies,
};
