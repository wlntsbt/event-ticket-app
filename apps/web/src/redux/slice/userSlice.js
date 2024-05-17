import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uid: '',
  role: '',
  username: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (prevState = initialState, action) => {
      // console.log("action payload",action.payload);
      prevState.uid = action.payload.uid;
      prevState.role = action.payload.role;
      prevState.username = action.payload.username;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
