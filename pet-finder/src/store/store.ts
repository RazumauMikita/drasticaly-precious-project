import { configureStore } from '@reduxjs/toolkit'

import userStateReducer from './userState/userStateSlice'
import userDataReducer from './userData/userDataSlice'
import petDataReducer from './petData/petDataSlice'

export const store = configureStore({
  reducer: {
    isLoggedIn: userStateReducer,
    userData: userDataReducer,
    allPetData: petDataReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
