import React from 'react';
import { Button } from '../components/button';
import { Container } from '../components/container';
import '../App.css';
import { Title } from '../components/title';

export const Home = () => {

  const containerStyle = {
    justifyContent: 'center',
    height: '100vh', 
  }

  const titleStyle = {
    fontSize: 150,
    marginBottom: 50
  }

  return (
    <Container style={containerStyle}>
      <Title className="welcome" style={titleStyle}>Welcome to EcoFootprint</Title>
      <div>
        <Button>Get Started</Button>
        <Button>Go to Dashboard</Button>
      </div>
    </Container>
  );
};
