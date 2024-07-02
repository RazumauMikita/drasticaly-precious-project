import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IStoredUser } from '../../requests/interfaces'
import { RootState } from '../store'

export interface UserData {
  user: IStoredUser
}

const initialState: UserData = {
  user: null,
}

const UserDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state: UserData, action: PayloadAction<UserData>) => {
      state.user = action.payload.user
    },
  },
})

export const { setUserData } = UserDataSlice.actions
export const selectUserData = (state: RootState) => state.userData.user
export default UserDataSlice.reducer
