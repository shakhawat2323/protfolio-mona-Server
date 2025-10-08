import { prisma } from "../../config/db";
import { Blog, Prisma } from "@prisma/client";

// ✅ Create Blog
const createBlog = async (payload: Prisma.BlogCreateInput): Promise<Blog> => {
  const result = await prisma.blog.create({
    data: payload,
    include: { author: true },
  });
  return result;
};

// ✅ Get All Blogs
const getAllBlogs = async (): Promise<Blog[]> => {
  return await prisma.blog.findMany({
    include: { author: true },
    orderBy: { createdAt: "desc" },
  });
};

// ✅ Get Single Blog by ID
const getBlogById = async (id: number): Promise<Blog | null> => {
  return await prisma.blog.findUnique({
    where: { id },
    include: { author: true },
  });
};

// ✅ Update Blog
const updateBlog = async (
  id: number,
  payload: Prisma.BlogUpdateInput
): Promise<Blog> => {
  return await prisma.blog.update({
    where: { id },
    data: payload,
    include: { author: true },
  });
};

// ✅ Delete Blog
const deleteBlog = async (id: number): Promise<Blog> => {
  return await prisma.blog.delete({
    where: { id },
  });
};

export const blogService = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
