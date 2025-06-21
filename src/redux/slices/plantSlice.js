import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plants: [
    { id: 1, name: 'Monstera', category: 'Indoor', price: 25, thumbnail: '/images/monstera.jpg' },
    { id: 2, name: 'Fiddle Leaf Fig', category: 'Indoor', price: 30, thumbnail: '/images/fiddle.jpg' },
    { id: 3, name: 'Snake Plant', category: 'Low Light', price: 20, thumbnail: '/images/snake.jpg' },
    { id: 4, name: 'ZZ Plant', category: 'Low Light', price: 22, thumbnail: '/images/zz.jpg' },
    { id: 5, name: 'Succulent', category: 'Succulents', price: 15, thumbnail: '/images/succulent.jpg' },
    { id: 6, name: 'Aloe Vera', category: 'Succulents', price: 18, thumbnail: '/images/aloe.jpg' },
  ],
};

const plantSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {},
});

export default plantSlice.reducer;
