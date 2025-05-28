//@Third-Party
import { createSlice } from "@reduxjs/toolkit";
//------------------------------------------------------

//@Types
import type { ICartItem, IProduct } from "~/types/common";
import type { PayloadAction } from "@reduxjs/toolkit";
//------------------------------------------------------

interface ICartSliceInitialState {
  selectedProducts: ICartItem[];
}

const initialState: ICartSliceInitialState = {
  selectedProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProduct>) {
      const IndexItem = state.selectedProducts.findIndex(
        (item) => item.product.id == action.payload.id
      );

      if (IndexItem !== -1) {
        state.selectedProducts[IndexItem].count += 1;
      } else {
        state.selectedProducts.unshift({
          product: action.payload,
          count: 1,
        });
      }
    },

    deleteFromCart(state, action: PayloadAction<IProduct>) {
      state.selectedProducts = state.selectedProducts.filter(
        (item) => item.product.id !== action.payload.id
      );
    },

    increase(state, action: PayloadAction<IProduct>) {
      const IndexItem = state.selectedProducts.findIndex(
        (item) => item.product.id == action.payload.id
      );
      state.selectedProducts[IndexItem].count += 1;
    },

    decrease(state, action: PayloadAction<IProduct>) {
      const IndexItem = state.selectedProducts.findIndex(
        (item) => item.product.id == action.payload.id
      );
      if (state.selectedProducts[IndexItem].count > 1) {
        state.selectedProducts[IndexItem].count -= 1;
      }
    },
  },
  reducerPath: "cart",
});

export const { addToCart, deleteFromCart, increase, decrease } =
  cartSlice.actions;
