export interface GetAllBlogsParams {
  page?: number;
  limit?: number;
  search?: string;
  isPublished?: boolean;
  authorId?: number;
  sort?: "asc" | "desc";
}

export interface GetAllProjectsParams {
  page?: number;
  limit?: number;
  search?: string;
  sort?: "asc" | "desc";
}
