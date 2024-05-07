import { configureStore } from '@reduxjs/toolkit';

import userSlice from './slice/userSlice';
import ticketSlice from './slice/ticketSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    ticket: ticketSlice,
  },
});
