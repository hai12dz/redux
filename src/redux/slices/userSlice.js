import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

export const fetchAllUsers = createAsyncThunk(
    'users/fetchAllUsers',
    async () => {
        const response = await axios.get('http://localhost:8080/users/all');
        return response.data
    },
)

const initialState = {
    listUser: [],
    isLoading: false,
    isError: null
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder

            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                // Add user to the state array
                state.listUser = action.payload
                state.isLoading = false;
                state.isError = false
            })
            .addCase(fetchAllUsers.pending, (state, action) => {
                // Add user to the state array
                state.isLoading = true;
                state.isError = false
            })

            .addCase(fetchAllUsers.rejected, (state, action) => {
                // Add user to the state array
                state.isLoading = false;
                state.isError = true
            })



    },

})


export default userSlice.reducer