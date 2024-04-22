import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ISessionData {
  firstName?: string;
  lastName?: string;
  isLoggedIn?: boolean;
  accessToken?: string;
}

export interface ILoginModalState {
  isOpen: boolean;
}

export interface ILoginState {
  sessionData: ISessionData;
  modalState: ILoginModalState;
}

const initialState: ILoginState = {
  sessionData: {
    firstName: "Maria",
    isLoggedIn: false,
    accessToken: "",
  },
  modalState: {
    isOpen: false,
  },
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setSessionData: (state, action: PayloadAction<ISessionData>) => {
      state.sessionData = { ...action.payload };
    },
    toggleLoginModal: (state, action: PayloadAction<boolean>) => {
      console.log("toggleLoginModal", action.payload);
      state.modalState.isOpen = action.payload;
    },
  },
});

export const { setSessionData, toggleLoginModal } = loginSlice.actions;

export default loginSlice.reducer;
