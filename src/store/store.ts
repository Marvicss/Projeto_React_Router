import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authConfig';
import userReducer from '../redux/slices/userSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
  