import { configureStore } from '@reduxjs/toolkit';

import userSlice from './slice/userSlice';
import ticketSlice from './slice/ticketSlice';
import billSlice from './slice/billSlice';
import pageSlice from './slice/pageSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    ticket: ticketSlice,
    bill: billSlice,
    page: pageSlice,
  },
});
