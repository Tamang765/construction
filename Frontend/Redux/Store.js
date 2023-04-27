  import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice";
import BlogSlice from "./Slice/BlogSlice";
import teamSlice from "./Slice/teamSlice";
import serviceSlice from "./Slice/serviceSlice";
import enquirySlice from "./Slice/enquirySlice";
import CareerSlice from "./Slice/CareerSlice";
import FAQSlice from "./Slice/FAQSlice";
import ProjectSlice from "./Slice/ProjectSlice";
import TestimonialSlice from "./Slice/TestimonialSlice";

export const Store = configureStore({
  reducer: 
  {
    auth: authSlice,
    blog: BlogSlice,
    team: teamSlice,
    service: serviceSlice,
    enquiry: enquirySlice,
    career:CareerSlice,
    faq: FAQSlice,
    project: ProjectSlice,
    testimonial:TestimonialSlice
  }
})