import React from 'react';
import { Button } from '../components/button';
import { Container } from '../components/container';
import '../App.css';

export const Home = () => {
  const title = {
      fontSize: 150,
      fontWeight: 1,
      color: '#514E20',
      marginBottom: 50,
      fontFamily: 'Karantina',
      textShadow: '-5px -5px 0 #000',
      WebKitTextStrokeWidth: 2,
      WebkitTextStrokeColor: 'white',
      textShadow: '-1px -1px 0 #000'
  };

  const containerStyle = {
    height: '100vh', // Example: set the height to 100vh
  };

  return (
    <Container style={containerStyle}>
      <h1 className="welcome" style={title}>Welcome to EcoFootprint</h1>
      <div>
        <Button>Get Started</Button>
        <Button>Go to Dashboard</Button>
      </div>
    </Container>
  );
};
