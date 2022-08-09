import { configureStore } from '@reduxjs/toolkit';
import scooterSlice from '../features/scooterSlice';

export const store = configureStore({
  reducer: {
    scooter: scooterSlice,
  },
});