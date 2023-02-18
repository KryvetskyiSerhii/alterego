import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeneralProps, Login } from "types/generalTypes";

const initialState: GeneralProps = {
  auth: {
    isLoggedIn: false,
    authorized: "initial",
  },
};

const generalSlice = createSlice({
  name: "genralSlice",
  initialState,
  reducers: {
    handleUserAuthorization(state, action: PayloadAction<Login>) {
      if (
        action.payload.name === "admin" &&
        action.payload.password === "12345"
      ) {
        state.auth.authorized = "granted";
        state.auth.isLoggedIn = true;
      } else {
        state.auth.authorized = "rejected";
      }
    },
    setIsLoggedIn(state) {
      console.log("hi");

      state.auth.isLoggedIn = true;
    },
    setLoggedOff(state) {
      state.auth.isLoggedIn = false;
    },
  },
});

export default generalSlice.reducer;

export const { handleUserAuthorization, setIsLoggedIn, setLoggedOff } =
  generalSlice.actions;
