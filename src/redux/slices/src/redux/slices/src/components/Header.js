import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalQuantity);

  return (
    <header style={{ padding: '1rem', backgroundColor: '#4CAF50', color: 'white' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.5rem' }}>
            Houseplants Shop
          </Link>
        </div>
        <div>
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none', position: 'relative' }}>
            🛒
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              backgroundColor: 'red',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '0.8rem',
              color: 'white'
            }}>
              {totalItems}
            </span>
          </Link>
          {' '}
          <Link to="/products" style={{ color: 'white', marginLeft: '1rem' }}>
            Products
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
