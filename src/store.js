import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';
import productReducer from './productSlice.js';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    productId: productReducer,
  },
});
