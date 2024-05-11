import { configureStore } from '@reduxjs/toolkit';

import userSlice from './slice/userSlice';
import ticketSlice from './slice/ticketSlice';
import billSlice from './slice/billSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    ticket: ticketSlice,
    bill: billSlice,
  },
});
