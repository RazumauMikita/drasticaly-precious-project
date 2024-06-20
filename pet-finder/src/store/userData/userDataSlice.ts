import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  user: {
    name: string
  };
}

const initialState: UserData = {
  user: {
    name: "John"
  },
};

const UserDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (
      state: UserData,
      action: PayloadAction<UserData>
    ) => {
      state.user = action.payload.user;
    },
  },
});

export const { setUserData } = UserDataSlice.actions;
export default UserDataSlice.reducer;