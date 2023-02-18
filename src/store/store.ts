import { configureStore, combineReducers } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";

const rootReducer = combineReducers({
  newsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 348 },
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
