import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  street: "",
  postCode: "",
  city: "",
  country: "",
  email: "",
};

export const deliveryDetailsSlice = createSlice({
  name: "deliveryDetails",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setStreet: (state, action) => {
      state.street = action.payload;
    },
    setPostCode: (state, action) => {
      state.postCode = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    clearDeliveryDetails: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.street = "";
      state.postCode = "";
      state.city = "";
      state.country = "";
      state.email = "";
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setStreet,
  setPostCode,
  setCity,
  setCountry,
  setEmail,
  clearDeliveryDetails,
} = deliveryDetailsSlice.actions;

export default deliveryDetailsSlice.reducer;
