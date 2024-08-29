<<<<<<< HEAD
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
=======
import { Button, Text, Img } from "../components";
import React from "react";
import { Helmet } from "react-helmet";

export const Home = () => {
    return (
        <>
            <Helmet>
                <title>EcoFootprint Home</title>
                <meta
                  name="description"
                  content="skibidi toilet"
                />
            </Helmet>
            <div className="w-full bg-white-a700 py-2.5">
                <>
                    <div className="relative h-[1002px] px-3.5">
                        <Img
                        src="images/img_urban_vintage_7.png"
                        alt="Urban Image"
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[1002px] w-full max-w-[1480px] flex-1 rounded-[20px] object-cover"
                        />
                        <div className="absolute left-0 right-0 top-[28%] m-auto flex w-full max-w-[1410px] flex-1 flex-col items-center gap-24 px-14 md:gap-[72px] md:px-5 sm:gap-12">
                            <Text as="p" className="text-shadow-ts">
                                Welcome to EcoFootprint
                            </Text>
                        </div>
                        <div className="ml-[18px] mr-8 flex w-[70%] justify-between gap-5 md:mx-0 md:w-full">
                            <Button shape='round'>GET STARTED</Button>
                            <Button shape='round'>Go to Dashb</Button>
                        </div>
                    </div>
                </>
            </div>
        </>
    )
}
>>>>>>> 84f51e65ef686b794e9d96a7027f03b59899029a
