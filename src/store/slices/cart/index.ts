import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../../types/common";

interface ICartSliceInitialState {
  selectedProducts: IProduct[];
}

const initialState: ICartSliceInitialState = {
  selectedProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProduct>) {
      state.selectedProducts.push(action.payload);
    },
  },
  reducerPath: "card",
});

export const { addToCart } = cartSlice.actions;
