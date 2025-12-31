import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    increment: (state, action) => {
      state[action.payload].itemCount += 1;
    },
    decrement: (state, action) => {
      if (state[action.payload].itemCount > 1) {
        state[action.payload].itemCount -= 1;
      }
    },
    removeItem: (state, action) => {
      if (action.payload !== -1) {
        state.splice(action.payload, 1);
      }
    },
  },
});

export const { add, increment, decrement, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
