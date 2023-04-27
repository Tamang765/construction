import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { getFaqService } from '../Service/FAQ';

const initialState = {
    isError: false,
    isLoading: false,
    isSuccess: false,
    faq: [],
    message:""
}
export const getAllFAQ = createAsyncThunk("faq/getAll",
    async()=>{
        try {
            const response = await getFaqService();
            return response;
         }
        catch(error) { 
            const message = error.response && error.response.data
            toast.error(message);
        }
    }
)
const FAQSlice = createSlice({
  name: "faq",
  initialState,
    reducers: {}
    ,
    extraReducers:(builder)=> {
        builder.addCase(getAllFAQ.pending, (state) => { 
            state.isLoading = true;
        }).addCase(getAllFAQ.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess= true;
            state.faq = action.payload;
            state.isError = false;
        }).addCase(getAllFAQ.rejected, (state,action)=>{
            state.isError = true;
            toast.error(action.error.message);
        })
    }
});
export const selectFAQ= (state)=>state.faq.faq
export default FAQSlice.reducer;
