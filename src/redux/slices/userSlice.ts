import { createSlice } from "@reduxjs/toolkit";
import { UserRoles } from "../../types/User/User";
import { RootState } from "../store";

const initialState = {
  mode: "dark",
  userRole: UserRoles.PRODUCT_OWNER,
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
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
  },
});

export const getUserState = (state: RootState) => state.user;

export const { toggleColorMode, setUserRole } = userSlice.actions;

export default userSlice.reducer;
