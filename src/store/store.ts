import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cartSlice } from "./slices/cart";
import { dataApi } from "../services";

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
    [cartSlice.reducerPath]: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
  devTools: import.meta.env.DEV,
});

setupListeners(store.dispatch);
