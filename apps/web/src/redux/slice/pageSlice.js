import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 0,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (prevState = initialState, action) => {
      prevState.currentPage = action.payload.currentPage;
    },
  },
});

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
