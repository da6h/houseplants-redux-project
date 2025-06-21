import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  const plants = Object.values(cartItems);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Your Shopping Cart</h1>
      <p>Total plants: {totalQuantity}</p>
      <p>Total cost: ${totalPrice.toFixed(2)}</p>

      {plants.length === 0 && <p>Your cart is empty.</p>}

      {plants.map(plant => (
        <div key={plant.id} style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1rem',
          borderBottom: '1px solid #ccc',
          paddingBottom: '1rem'
        }}>
          <img src={plant.thumbnail} alt={plant.name} style={{ width: '100px', height: '80px', objectFit: 'cover', borderRadius: '8px', marginRight: '1rem' }} />
          <div style={{ flexGrow: 1 }}>
            <h3>{plant.name}</
