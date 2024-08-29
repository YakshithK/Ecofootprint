import React from 'react';
import '../App.css'
import backgroundImage from '../assets/images/bg.jpg'; // Update the path accordingly

export const Home = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      textAlign: 'center',
      flexDirection: 'column',
    },
    title: {
      fontSize: '64px',
      fontWeight: 'bold',
      marginBottom: '20px',
      fontFamily: 'Arial, sans-serif', // Replace with your custom font
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    },
    button: {
      padding: '15px 30px',
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#333',
      backgroundColor: '#c1b100',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '10px',
      boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to EcoFootprint</h1>
      <div>
        <button style={styles.button}>Get Started</button>
        <button style={styles.button}>Go to Dashboard</button>
      </div>
    </div>
  );
};
