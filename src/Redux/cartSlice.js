import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items[action.payload.dish_id] = { ...action.payload, quantity: 1 };
    },
    removeFromCart: (state,action) => {
        delete state.items[action.payload.dish_id];
    },
    incrementQnty: (state, action) => {
      state.items[action.payload.dish_id].quantity ++;
    },
    decrementQnty: (state, action) => {
      state.items[action.payload.dish_id].quantity --;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, incrementQnty, decrementQnty } =
  cartSlice.actions;

export default cartSlice.reducer;
