import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'productId',
  initialState: '',
  reducers: {
    change: (state, action) => action.payload,
  },
});

export const { change } = productSlice.actions;
export default productSlice.reducer;
