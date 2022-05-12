import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    login: async (state, action) => {
        try {
            const { accessToken, refreshToken, err } = await axios.post(
              "/auth/login",
              action.payload
            );
            console.log('err:', err)
            if (err) {
              state.err = data.err;
            }
            state.refreshToken = refreshToken;
            state.accessToken = accessToken;
        } catch (error) {
            console.log('ERR:', error)
        }
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
