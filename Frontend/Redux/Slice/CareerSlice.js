import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCareerService } from "../Service/CareerService";
import { toast } from "react-toastify";
import { Profiler } from "react";

const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  career: [],
  message: "",
};
export const getAllCareerData = createAsyncThunk(
  "career/getAllCareerData",
  async () => {
    try {
      const response = await getAllCareerService();
      return response;
    } catch (error) {
      const message = error.response && error.response.data;
      toast.error(message);
    }
  }
);
const CareerSlice = createSlice({
  name: "careerdata",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCareerData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCareerData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.career = action.payload;
      })
      .addCase(getAllCareerData.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        toast.error(action.error.message);
      });
  },
});

export const CALC_STORE_VALUE = CareerSlice.actions;
export const selectLoading = (state) => state.career.isLoading;
export const selectError = (state) => state.career.isError;
export const selectCareer = (state) => state.career.career;

export default CareerSlice.reducer;
