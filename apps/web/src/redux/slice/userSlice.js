import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uid: '',
  role: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (prevState = initialState, action) => {
      console.log("action payload",action.payload);
      prevState.uid = action.payload.uid;
      prevState.role = action.payload.role;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
