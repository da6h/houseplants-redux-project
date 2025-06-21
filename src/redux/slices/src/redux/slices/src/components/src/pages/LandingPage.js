import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{
      backgroundImage: 'url(/images/background.jpg)',
      backgroundSize: 'cover',
      height: '100vh',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h1>Welcome to Houseplants Shop</h1>
      <p>Your one-stop shop for beautiful houseplants.</p>
      <Link to="/products">
        <button style={{ padding: '0.75rem 1.5rem', fontSize: '1.2rem', marginTop: '1rem' }}>
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
