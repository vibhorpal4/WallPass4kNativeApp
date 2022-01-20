import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    user: null
    
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            token: action.payload.token,
            user: action.payload.user
        }
    }
})


export default auth.reducer