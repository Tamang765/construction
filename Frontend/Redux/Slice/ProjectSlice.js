import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProjectByID, getProjectService } from '../Service/ProjectService';
import { toast } from 'react-toastify';
const initialState = {
    isError: false,
    isLoading:false,
    isSuccess: false,
    projectdata: [],
    filtereddata:null,
    message:""
}
export const getAllProjects = createAsyncThunk("project/getAllProject",
    async() => { 
        try {
            const response = await getProjectService();
            return response;
        } catch (error) {
            const message = error.response && error.response.data;
            toast.error(message);
        }
    }
)
export const getProjectByIDAsync = createAsyncThunk("project/getProductbyID",
    async (slug) => { 
        try {
            const response = await getProjectByID(slug);
            return response;
        }
        catch { 
            const message = error.response && error.response.data;
            toast.error(message);
        }
    }
)
const ProjectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProjects.pending, (state) => {
            state.isLoading = true;
        }).addCase(getAllProjects.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.projectdata = action.payload;
        }).addCase(getAllProjects.rejected, (state, action) => {
            state.isError = true;
            toast.error(action.error.message);
        }).addCase(getProjectByIDAsync.pending, (state) => {
            state.isLoading = true;
        }).addCase(getProjectByIDAsync.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = true;
            state.isSuccess = true;
            state.filtereddata = action.payload;
        }).addCase(getProjectByIDAsync.rejected, (state, action) => {
            state.isError = true;
            toast.error(action.error.message);
        })
    }
});
export const setProject = (state) => state.project.projectdata;
export const setProjectById = (state) => state.project.filtereddata;
export const setError = (state) => state.project.isError;
export default ProjectSlice.reducer