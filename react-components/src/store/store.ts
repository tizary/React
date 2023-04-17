import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import { newsAPI } from '../services/NewsService';

const rootReducer = combineReducers({
  appReducer,
  [newsAPI.reducerPath]: newsAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
