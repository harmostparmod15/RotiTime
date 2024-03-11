import { createSlice } from "@reduxjs/toolkit";

const restaurantDataSlice = createSlice({
  name: "restaurantData",
  initialState: {
    restaurants: null,
    searchQuery: null,
  },
  reducers: {
    addRestaurantData: (state, action) => {
      state.restaurants = action.payload;
    },
    addSearchedRestaurantData: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearSearchedRestaurantData: (state) => {
      state.searchQuery = [];
    },
  },
});

export const {
  addRestaurantData,
  addSearchedRestaurantData,
  clearSearchedRestaurantData,
} = restaurantDataSlice.actions;
export default restaurantDataSlice.reducer;
