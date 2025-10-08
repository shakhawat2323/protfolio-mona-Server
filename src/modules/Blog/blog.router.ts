import express from "express";
import { blogController } from "./blog.controller";

const router = express.Router();

router.post("/blogs", blogController.CreateBlog); // ✅ Create blog
router.get("/", blogController.GetAllBlogs); // ✅ Get all blogs
router.get("/:id", blogController.GetBlogById); // ✅ Get blog by id
router.put("/:id", blogController.UpdateBlog); // ✅ Update blog
router.delete("/:id", blogController.DeleteBlog); // ✅ Delete blog

export const BlogPost = router;
