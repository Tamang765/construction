import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllTeams } from '../Service/teamService';
import { toast } from 'react-toastify';

const initialState = {
    isError: false,
    isLoading: false,
    isSuccess: false,
    teams: [],
    message: ""
};
export const getAllTeamAsync = createAsyncThunk(
    "team/getAll",
    async() => { 
        try {
            const response = await getAllTeams();
            return response;
        } catch (error) {
            const message = error.response && error.response.data;
            toast.error(message);
        }
    }
) 
 const teamSlice = createSlice({
  name: "teams",
  initialState,
    reducers: {
    },
    extraReducers: (builder) => { 
        builder.addCase(getAllTeamAsync.pending, (state) => { 
            state.isLoading= true;
        }).addCase(getAllTeamAsync.fulfilled, (state, action) => { 
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.teams = action.payload;
        }).addCase(getAllTeamAsync.rejected, (state, action) => { 
            state.isError = true;
            toast.error(action.error.message);
        })
    }
});

export const setLoading = (state) => state.teams.isLoading;
export const setError = (state) => state.teams.isError;
export const setTeam = (state) =>state.teams.teams;
export default teamSlice.reducer