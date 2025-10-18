import { prisma } from "../../config/db";
import { Blog, Prisma } from "@prisma/client";
import { GetAllBlogsParams } from "../../Type/Types";

// ✅ Create Blog
const createBlog = async (payload: Prisma.BlogCreateInput): Promise<Blog> => {
  const result = await prisma.blog.create({
    data: payload,
    include: { author: true },
  });
  return result;
};

// ✅ Get All Blogs
const getAllBlogs = async ({
  page = 1,
  limit = 6,
  search,
  isPublished,
  authorId,
  sort = "desc",
}: GetAllBlogsParams) => {
  const skip = (page - 1) * limit;

  const where: any = {
    AND: [
      search && {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { content: { contains: search, mode: "insensitive" } },
        ],
      },
      typeof isPublished === "boolean" && { isPublished },
      authorId && { authorId },
    ].filter(Boolean),
  };

  const data = await prisma.blog.findMany({
    skip,
    take: limit,
    where,
    include: { author: true },
    orderBy: { createdAt: sort },
  });

  const total = await prisma.blog.count({ where });

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
