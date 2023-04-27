import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { getAllServices } from '../Service/services';

const initialState = {
    isError: false,
    isLoading: false,
    isSuccess: false,
    services: [],
    message: ""
};   
export const getAllServicesAsync = createAsyncThunk(
    "service/getAll",
    async () => {
        try {
            const response = await getAllServices();
            return response;
        } catch (error) {
            const message = error.response && error.response.data
            toast.error(message);
        }
     }
)

const serviceSlice = createSlice({
  name: "services",
  initialState,
    reducers: {},
    extraReducers: (builder) => { 
        builder.addCase(getAllServicesAsync.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAllServicesAsync.fulfilled, (state, action) => { 
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.services = action.payload;
            

        }).addCase(getAllServicesAsync.rejected, (state, action) => { 
            state.isLoading = false;
            state.isError = true;
            toast.error(action.error.message)
        })
    }
});

export const setError = (state) => state.service.isError;
export const setIsLoading = (state) => state.service.isLoading;
export const setServices =(state)=> state.service.services
export default serviceSlice.reducer