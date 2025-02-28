import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dishes: [],
};

export const homeSlice = createSlice({
  name: "homedata",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.dishes = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItems } = homeSlice.actions;

export default homeSlice.reducer;
