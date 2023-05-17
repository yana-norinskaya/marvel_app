import { configureStore } from "@reduxjs/toolkit";
import { marvelApi } from "../store/marvel/marvel.api";
import { marvelReducer } from "../store/marvel/marvel.slice";

export const store = configureStore({
  reducer: {
    [marvelApi.reducerPath]: marvelApi.reducer,
    marvel: marvelReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(marvelApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
