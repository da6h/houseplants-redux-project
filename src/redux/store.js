import { configureStore } from '@reduxjs/toolkit';
import plantReducer from './slices/plantSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    plants: plantReducer,
    cart: cartReducer,
  },
});

export default store;
