import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    enquiry: [],
    message:""
}

const enquirySlice = createSlice({
    name:"enquiry",
    initialState,
    reducers: {
        setEnquiry(state, action) {
            state.enquiry = action.payload
        }
    }
})

export const { setEnquiry } = enquirySlice.actions;
export default enquirySlice.reducer;