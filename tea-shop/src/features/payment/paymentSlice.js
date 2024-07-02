import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentCard: "",
  expiryDate: "",
  cvc: "",
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addPaymentCard: (state, action) => {
      state.paymentCard = action.payload;
    },
    addExpiryDate: (state, action) => {
      state.expire = action.payload;
    },
    addCVC: (state, action) => {
      state.cvc = action.payload;
    },
    clearInfomration: (state) => {
      state.paymentCard = "";
      state.expiryDate = "";
      state.cvc = "";
    },
  },
});

export const { addPaymentCard, addExpiryDate, addCVC } = paymentSlice.actions;

export default paymentSlice.reducer;
