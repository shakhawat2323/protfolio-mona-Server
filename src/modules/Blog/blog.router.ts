import express from "express";
import { blogController } from "./blog.controller";

const router = express.Router();

router.post("/blogs", blogController.CreateBlog); // ✅ Create blog
router.get("/blogs", blogController.getAllBlogs); // ✅ Get all blogs
router.get("/blogs/:id", blogController.GetBlogById); // ✅ Get blog by id
router.patch("/blogs/:id", blogController.UpdateBlog); // ✅ Update blog
router.delete("/blogs/:id", blogController.DeleteBlog); // ✅ Delete blog

export const BlogPost = router;
