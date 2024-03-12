import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log("ac pl", action.payload.card.info.id);
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const copyState = [...state.items];
      const itemsToRetain = copyState.filter(
        (item) => item?.card?.info.id != action.payload
      );
      state.items = itemsToRetain;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
