import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

const ProductListing = () => {
  const plants = useSelector(state => state.plants.plants);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Group plants by category
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div style={{ padding: '2rem' }}>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {plants.filter(p => p.category === category).map(plant => (
              <div key={plant.id} style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '1rem',
                width: '180px',
                textAlign: 'center'
              }}>
                <img src={plant.thumbnail} alt={plant.name} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px' }} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button
                  disabled={!!cartItems[plant.id]}
                  onClick={() => dispatch(addToCart(plant))}
                >
                  {cartItems[plant.id] ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
