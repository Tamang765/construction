import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice";
import BlogSlice from "./Slice/BlogSlice";
import teamSlice from "./Slice/teamSlice";

export const Store = configureStore({
  reducer: 
  {
    auth: authSlice,
    blog: BlogSlice,
    team:teamSlice,
  }
})