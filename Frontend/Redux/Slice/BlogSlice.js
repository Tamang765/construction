import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import blogServices, { getAllBlogs } from "../Service/blogService";

const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  blogs: [],
  message: "",
};
export const getAllBlogAsync = createAsyncThunk(
  "blogs/getAll",
  async () => {
    try {
      const response =await  getAllBlogs();
        return response;
    } catch (error) {
      const message = error.response && error.response.data;
      toast.error(message);
    }

  }
);

export const BlogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    CALC_STORE_VALUE(state, action) {
      console.log("store");
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(getAllBlogAsync.pending, (state) => {
          state.isLoading = true;
        })
      .addCase(getAllBlogAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.blogs = action.payload;
      })
      .addCase(getAllBlogAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        toast.error(action.error.message);
      });
  },
});

export const CALC_STORE_VALUE = BlogSlice.actions;
export const selectLoading = (state) => state.blog.isLoading;
export const selectBlog = (state) => state.blog.blog;
export default BlogSlice.reducer;

