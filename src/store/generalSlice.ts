import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GeneralProps, Login } from "types/generalTypes";

const initialState: GeneralProps = {
  auth: {
    isLoggedIn: false,
    authorized: "initial",
  },
  language: {
    modalIsVisible: false,
    code: "en",
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
      state.auth.isLoggedIn = true;
    },
    setLoggedOff(state) {
      state.auth.isLoggedIn = false;
    },
    setTheLanguage(state, action: PayloadAction<string>) {
      state.language.code = action.payload;
    },
    setModalIsVisible(state) {
      state.language.modalIsVisible = true;
    },
    setOffModalIsVisible(state) {
      state.language.modalIsVisible = false;
    },
  },
});

export default generalSlice.reducer;

export const {
  handleUserAuthorization,
  setIsLoggedIn,
  setLoggedOff,
  setTheLanguage,
  setModalIsVisible,
  setOffModalIsVisible,
} = generalSlice.actions;
