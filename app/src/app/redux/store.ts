"use client";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Features/productsSlice";

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
