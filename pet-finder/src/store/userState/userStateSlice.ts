import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
}

const initialState: UserState = {
  isLoggedIn: false,
};

const UserStateSlice = createSlice({
  name: 'isLoggedIn',
  initialState,
  reducers: {
    setIsLoggedIn: (
      state: UserState,
      action: PayloadAction<boolean>
    ) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = UserStateSlice.actions;
export default UserStateSlice.reducer;
