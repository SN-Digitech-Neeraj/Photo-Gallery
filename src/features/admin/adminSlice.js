import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../components/api/axiosInstance";
import { isAuthenticated } from "../../components/utils/AuthToken";


export const loginAdmin = createAsyncThunk(
  "auth/login",
  async (Credential, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/login", Credential);

      console.log("Login Response:", response.data);
      return response.data;
    } catch (error) {
      if (!error.response) {
        return rejectWithValue("Network error. Cannot reach server.");
      }
      return rejectWithValue(error.response.data || "Login failed");
    }
  }
);



const adminSlice = createSlice({
    name: "admin",
    initialState: {
        admin: null,
        token: localStorage.getItem("token") || null,
        loading: false,
        error: null,
        isAuthenticated: isAuthenticated(),
    },
    reducers: {
        logout(state) {
            state.admin = null;
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.admin = action.payload.admin;
                state.token = action.payload.token;
                state.isAuthenticated = true;
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Login failed";
                state.isAuthenticated = false;
            });
    },
});

export const { logout } = adminSlice.actions;
export default adminSlice.reducer;

