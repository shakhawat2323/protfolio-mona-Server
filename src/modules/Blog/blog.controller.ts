import { Request, Response } from "express";
import { blogService } from "./blog.service";

const CreateBlog = async (req: Request, res: Response) => {
  try {
    const result = await blogService.createBlog(req.body);
    res.status(201).json({ message: "Blog created successfully!", result });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Failed to create blog", error: error.message });
  }
};

const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 6;
    const search = (req.query.search as string) || "";
    const isPublished = req.query.isPublished
      ? req.query.isPublished === "true"
      : undefined;
    const authorId = req.query.authorId
      ? Number(req.query.authorId)
      : undefined;
    const sort = (req.query.sort as "asc" | "desc") || "desc";

    const result = await blogService.getAllBlogs({
      page,
      limit,
      search,
      isPublished,
      authorId,
      sort,
    });

    res.status(200).json(result);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Failed to fetch blogs", error: error.message });
  }
};

const GetBlogById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await blogService.getBlogById(id);
    if (!result) return res.status(404).json({ message: "Blog not found" });
    res.json(result);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Failed to fetch blog", error: error.message });
  }
};

const UpdateBlog = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await blogService.updateBlog(id, req.body);
    res.json({ message: "Blog updated successfully!", result });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Failed to update blog", error: error.message });
  }
};

const DeleteBlog = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await blogService.deleteBlog(id);
    res.json({ message: "Blog deleted successfully!" });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Failed to delete blog", error: error.message });
  }
};

export const blogController = {
  CreateBlog,
  getAllBlogs,
  GetBlogById,
  UpdateBlog,
  DeleteBlog,
};
