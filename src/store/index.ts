import { configureStore } from '@reduxjs/toolkit';
import reducerLanguage from './languageReducer';

export const store = configureStore({
  reducer: {
    reducerLanguage: reducerLanguage,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
