import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProjectService } from '../Service/ProjectService';
import { toast } from 'react-toastify';

const initialState = {
    isError: false,
    isLoading:false,
    isSuccess: false,
    projectdata: [],
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
const ProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
    extraReducers: (builder) => { 
        builder.addCase(getAllProjects.pending, (state) => { 
            state.isLoading=true;
        }).addCase(getAllProjects.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.projectdata = action.payload; 
            
        }).addCase(getAllProjects.rejected,(state,action)=>{
            state.isError = true;
            toast.error(action.error.message);
        })
    }
});

export const setProject = (state) => state.project.projectdata;
export const setError = (state) => state.project.isError;
export default ProjectSlice.reducer