import React from 'react';
import { Button } from '../components/button';
import { Container } from '../components/container';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Title } from '../components/title';
import { Link } from 'react-router-dom';


export const Home = () => {

  const navigate = useNavigate()

  const changeNav = () => {
    navigate('/dashboard')
  }

  const containerStyle = {
    justifyContent: 'center',
    height: '100vh', 
  }

  const titleStyle = {
    fontSize: 150,
    marginBottom: 50
  }

  const buttonStyle = {
      WebkitTextStrokeColor: '#312A21',
      fontFamily: 'Viga',
      marginBottom: 160,
      padding: '10px 35px',
      fontWeight: '10px',
      fontSize: 35,
      color: '#fff',
      backgroundColor: '#908A27',
      cursor: 'pointer',
      textDecoration: 'none'
  }

  return (
    <Container style={containerStyle}>
      <Title className="welcome" style={titleStyle}>Welcome to EcoFootprint</Title>
      <div>
        <Button><Link style={buttonStyle} to='/dashboard'> Go To Dashboard </Link></Button>
      </div>
    </Container>
  );
};
