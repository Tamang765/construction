import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllTeams } from '../Service/teamService';
import { toast } from 'react-toastify';

const initialState = {
    isError: false,
    isLoading: false,
    isSuccess: false,
    team: [],
    message: ""
};
export const getAllTeamAsync = createAsyncThunk(
    "team/getAll",
    async () => { 
        try {
            const response = await getAllTeams();
            return response;
        } catch (error) {
            const message = error.response && error.response.data;
            toast.error(message);
        }
    }
) 
export const teamSlice = createSlice({
  name: "team",
  initialState,
    reducers: {
        CALC_STORE_VALUE(state, action) {
            console.log("store");
          },
    },
    extraReducers: (builder) => { 
        builder.addCase(getAllTeamAsync.pending, (state) => { 
            state.isLoading= true;
        }).addCase(getAllTeamAsync.fulfilled, (state, action) => { 
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.team = action.payload;
            toast.success(action.payload)
        }).addCase(getAllTeamAsync.rejected, (state, action) => { 
            state.isError = true;
            state.isLoading = false;
            state.message = action.payload;
            toast.error(action.payload);
        })
    }
});
export const CALC_STORE_VALUE = teamSlice.actions;
export const selectLoading = (state) => state.team.isLoading;
export const selectError = (state) => state.team.isError;
export const selectTeam = (state) =>state.team.team;
export default teamSlice.reducer