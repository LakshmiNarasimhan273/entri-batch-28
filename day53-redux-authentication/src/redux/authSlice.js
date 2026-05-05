import { createSlice } from "@reduxjs/toolkit"

// Global Data
const initialState = {
    users: [],
    loggedUser: null
};  

// {username: "", email: "", password: ""}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        registerUser: (state, action) => {
            const existingUser = state.users.find(
                data => data.email === action.payload.email
                 );

            if(!existingUser){
                state.users.push(action.payload);
            }
        },
        loginUser: (state, action) => {
            const user = state.users.find(
                data => data.email === action.payload.email &&
                data.password === action.payload.password
            );

            if(user){
                state.loggedUser = user;
            }
        } ,
        logoutUser: (state) => {
            state.loggedUser = null;
        }  
    }
}); 

export const {registerUser, loginUser, logoutUser} = authSlice.actions;

export default authSlice.reducer;