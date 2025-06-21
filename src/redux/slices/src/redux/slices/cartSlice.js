import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}, // { [plantId]: { ...plant, quantity } }
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const plant = action.payload;
      if (!state.items[plant.id]) {
        state.items[plant.id] = { ...plant, quantity: 1 };
        state.totalQuantity += 1;
        state.totalPrice += plant.price;
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += state.items[id].price;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      if (state.items[id] && state.items[id].quantity > 1) {
        state.items[id].quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= state.items[id].price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        const qty = state.items[id].quantity;
        const price = state.items[id].price * qty;
        delete state.items[id];
        state.totalQuantity -= qty;
        state.totalPrice -= price;
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
