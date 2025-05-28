//@Third-Party
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
//------------------------------------------------------

//@Services
import { dataApi } from "~/services";
//------------------------------------------------------

//@Store
import { cartSlice } from "~/store/slices/cart";
//------------------------------------------------------

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
