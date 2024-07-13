import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

interface UserState {
  isLoggedIn: boolean
}

const initialState: UserState = {
  isLoggedIn: false,
}

const UserStateSlice = createSlice({
  name: 'isLoggedIn',
  initialState,
  reducers: {
    setIsLoggedIn: (state: UserState, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    },
  },
})

export const { setIsLoggedIn } = UserStateSlice.actions
export const selectIsLoggedIn = (state: RootState) =>
  state.isLoggedIn.isLoggedIn

export default UserStateSlice.reducer
