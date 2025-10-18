import { prisma } from "../../config/db";
import { Certification, Prisma } from "@prisma/client";

const createAboutMe = async (data: any) => {
  const existing = await prisma.aboutMe.findFirst();
  if (existing) {
    throw new Error("AboutMe already exists. Use update instead.");
  }

  return prisma.aboutMe.create({
    data: {
      technologiesMastered: data.technologiesMastered,
      happyClients: data.happyClients,
      completedProjects: data.completedProjects,
      yearsOfExperience: data.yearsOfExperience,
      certifications: {
        create: data.certifications || [],
      },
    },
    include: { certifications: true },
  });
};
// Get AboutMe data
const getAboutMe = async () => {
  return prisma.aboutMe.findFirst({
    include: { certifications: true },
  });
};

const getCertificationById = async (
  id: number
): Promise<Certification | null> => {
  return await prisma.certification.findUnique({
    where: { id },
  });
};

// Create default AboutMe if not exist
const createDefaultAboutMe = async () => {
  const existing = await prisma.aboutMe.findFirst({
    include: { certifications: true },
  });
  if (!existing) {
    return prisma.aboutMe.create({
      data: {
        certifications: {
          create: [
            {
              title: "JavaScript (Advanced)",
              org: "HackerRank",
              year: "2024",
              image: "https://example.com/js.png",
            },
            {
              title: "Frontend with React",
              org: "Meta/Coursera",
              year: "2023",
              image: "https://example.com/react.png",
            },
          ],
        },
      },
      include: { certifications: true },
    });
  }
  return existing;
};

// Update AboutMe (numbers + certifications)
const updateAboutMe = async (data: Prisma.AboutMeUpdateInput) => {
  const existing = await createDefaultAboutMe();
  return prisma.aboutMe.update({
    where: { id: existing.id },
    data,
    include: { certifications: true },
  });
};

// Get all certifications
const getAll = async () => {
  return prisma.certification.findMany();
};

// Create new certification
const create = async (data: Prisma.CertificationCreateInput) => {
  return prisma.certification.create({ data });
};

// Update certification by id
const update = async (id: number, data: Prisma.CertificationUpdateInput) => {
  return prisma.certification.update({
    where: { id },
    data,
  });
};

// Delete certification by id
const deletes = async (id: number) => {
  return prisma.certification.delete({
    where: { id },
  });
};

export const AboutMeService = {
  createAboutMe,
  getCertificationById,
  getAboutMe,
  createDefaultAboutMe,
  updateAboutMe,
  deletes,
  getAll,
  create,
  update,
};
