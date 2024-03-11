import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import restaurantSlice from "./restaurantDataSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice,
  },
});

export default store;
