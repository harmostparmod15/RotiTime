import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurantDataSlice";

const store = configureStore({
  reducer: {
    restaurant: restaurantSlice,
  },
});

export default store;
