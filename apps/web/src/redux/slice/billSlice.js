import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  billId: '',
  usePoint: false,
  useVoucher: false,
  useDiscount: 0,
  status: '',
  booking: [],
  total: 0,
};

export const billSlice = createSlice({
  name: 'bill',
  initialState,
  reducers: {
    setBill: (prevState = initialState, action) => {
      prevState.billId = action.payload.billId;
      prevState.usePoint = action.payload.usePoint;
      prevState.useVoucher = action.payload.useVoucher;
      prevState.useDiscount = action.payload.useDiscount;
      prevState.status = action.payload.status;
      prevState.booking = action.payload.booking;
      prevState.total = action.payload.total;
    },
  },
});

export const { setBill } = billSlice.actions;

export default billSlice.reducer;
