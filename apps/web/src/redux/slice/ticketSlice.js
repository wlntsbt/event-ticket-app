import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookingData: [],
};

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    addTicket: (prevState = initialState, action) => {
      const { ticketId, qty } = action.payload;
      const currentBooking = prevState.bookingData.find(
        (booking) => booking.ticketId === ticketId,
      );
      if (currentBooking) {
        currentBooking.qty = qty;
      } else {
        prevState.bookingData.push(action.payload);
      }
    },
    updateTicket: (prevState = initialState, action) => {
      const { ticketId, qty } = action.payload;
      const updatedBooking = prevState.bookingData.find(
        (booking) => booking.ticketId === ticketId,
      );
      if (updatedBooking) {
        updatedBooking.qty = qty;
      }
    },
  },
});

export const { addTicket, updateTicket, removeTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
