import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import deliverySlice from "./features/deliveryDetails/deliveryDetailsSlice";
import paymentSlice from "./features/payment/paymentSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    delivery: deliverySlice,
    payment: paymentSlice,
  },
});

export default store;
