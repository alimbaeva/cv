import { configureStore } from '@reduxjs/toolkit';
import reducerLanguage from './languageReducer';
import reducerTask from './teaskReducer';

export const store = configureStore({
  reducer: {
    reducerLanguage: reducerLanguage,
    reducerTask: reducerTask,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
