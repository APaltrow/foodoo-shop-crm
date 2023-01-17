import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  mode: "dark",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleColorMode: (state) => {
      if (state.mode === "dark") {
        state.mode = "light";
      } else {
        state.mode = "dark";
      }
    },
  },
});

export const getUserState = (state: RootState) => state.user;

export const { toggleColorMode } = userSlice.actions;

export default userSlice.reducer;