import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    user:
    {
        email: "",
        contactNumber: "",
        address:""
    }
}
const authSlice = createSlice({
  name: "auth",
  initialState,
    reducers: {
        setLogin(state,action) { 
            state.isLoggedIn = action.payload
        },
        setName(state,action) { 
            state.name =action.payload
        }
  }
});

export const { setLogin, setName } = authSlice.actions
export const selectIsloggedIn = (state) => state.auth.isLoggedIn
export const selectName = (state) => state.auth.name
export const selectUser=(state)=>state.auth.user

export default authSlice.reducer