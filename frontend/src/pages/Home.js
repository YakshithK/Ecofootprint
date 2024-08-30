import React from 'react';
import { Button } from '../components/button';
import { Container } from '../components/container';
import '../App.css'
import backgroundImage from '../assets/images/bg.jpg'; // Update the path accordingly

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
  }

  return (
    <Container>
      <h1 className="welcome" style={title}>Welcome to EcoFootprint</h1>
      <div>
        <Button>Get Started</Button>
        <Button>Go to Dashboard</Button>
      </div>
    </Container>
  );
};