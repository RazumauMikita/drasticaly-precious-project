import { configureStore } from "@reduxjs/toolkit";


import userStateReducer from "./userState/userStateSlice";


export const store = configureStore({
  reducer:{
    isLoggedIn: userStateReducer,
  }
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
