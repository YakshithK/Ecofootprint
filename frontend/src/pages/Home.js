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
      fontSize: 150,
      fontWeight: 1,
      color: '#514E20',
      marginBottom: 50,
      fontFamily: 'Karantina',
      textShadow: '-5px -5px 0 #000',
      WebKitTextStrokeWidth: 2,
      WebkitTextStrokeColor: 'white',
      textShadow: '-1px -1px 0 #000'
    },
    button: {
      WebkitTextStrokeColor: '#312A21',
      fontFamily: 'Viga',
      marginBottom: 160,
      padding: '10px 35px',
      fontWeight: '3px',
      fontSize: 35,
      color: '#fff',
      backgroundColor: '#908A27',
      borderRadius: 30,
      cursor: 'pointer',
      margin: '10px',
      border: '4px solid black'
    },
  };

  return (
    <div style={styles.container}>
      <h1 className="welcome" style={styles.title}>Welcome to EcoFootprint</h1>
      <div>
        <button className="btn1" style={styles.button}>Get Started</button>
        <button className="btn1" style={styles.button}>Go to Dashboard</button>
      </div>
    </div>
  );
};