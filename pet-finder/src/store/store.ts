import { configureStore } from '@reduxjs/toolkit'

import userStateReducer from './userState/userStateSlice'
import userDataReducer from './userData/userDataSlice'

export const store = configureStore({
  reducer: {
    isLoggedIn: userStateReducer,
    userData: userDataReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
