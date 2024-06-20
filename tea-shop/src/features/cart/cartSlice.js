import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.cart.push(newItem);
      }
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseCartQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity--;
        item.totalPrice = item.quantity * item.price;
        if (item.quantity === 0) {
          state.cart = state.cart.filter((i) => i.id !== action.payload);
        }
      }
    },
    clearCartState(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseCartQuantity,
  decreaseQuantity,
  clearCartState,
} = cartSlice.actions;

export default cartSlice.reducer;
