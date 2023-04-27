import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllTestimonialService } from '../Service/TestimonialService';

const initialState = {
    isError: false,
    isLoading: false,
    isSuccess: false,
    testimonial:[],
    message:""
}

export const getAllTestimonial=createAsyncThunk("testimonial/getAll",
    async () => { 
        try {
            const response = await getAllTestimonialService();
            return response.data;
        } catch (error) {
            const message = error.response && error.response.data;
            toast.error(message);
        }
    }
)

const TestimonialSlice = createSlice({
  name: "testimonial",
  initialState,
    reducers: {},
    extraReducers: (builder) => { 
        builder.addCase(getAllTestimonial.pending, (state) => { 
            state.isLoading = true;
        }).addCase(getAllTestimonial.fulfilled, (state, action) => { 
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.testimonial = action.payload;
        }).addCase(getAllTestimonial.rejected, (state, action) => { 
            state.isError = true;
            toast.error(action.errror.message);
        })
    }
});


export const selectTestimonial = (state) => state.testimonial.testimonial;
export default TestimonialSlice.reducer;