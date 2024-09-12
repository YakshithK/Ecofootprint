import { Login } from "../components/login"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase"
import { signOut } from "firebase/auth"
import axios from "axios"
import { useState, useEffect } from "react"
import { Container } from "../components/container"
import { Title } from "../components/title"
import { Button } from "../components/button"
import React from 'react';


// Async function to fetch footprint from the API
const getFootprint = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/footprint/${id}`)
        const footprint = parseFloat(response.data.latest_footprint)
        return footprint
    } catch (error) {
        console.error('Error fetching footprint:', error)
        return 0
    }
}

export const Profile = () => {
    const [user] = useAuthState(auth);
    const [footprint, setFootprint] = useState(0);

    useEffect(() => {
        if (user) {
            const fetchFootprint = async () => {
                const userFootprint = await getFootprint(user.uid);
                setFootprint(userFootprint);
            };

            fetchFootprint();
        }
    }, [user]);

    const signUserOut = async () => {
        await signOut(auth);
    };

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
        <div>
            {!user ? (
                <>
                    <Container style={containerStyle}>
                    <Title className="welcome" style={titleStyle}>You are not signed in, click the button below to sign in with Google</Title>
                    <div>
                        <Login />
                    </div>
                    </Container>
                </>
            ) : (
                <>
                    <Container style={{ height: '100vh' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '34% 66%', margin: 30}}>
                            {/* Left Section (Profile Picture, Sign Out) */}
                            <div style={{ gridColumn: '1/2' }}>
                                <Title className='welcome' style={{ fontSize: 100 }}>Profile</Title>
                                <img 
                                    src={user?.photoURL || ''} 
                                    width='200' 
                                    height='200' 
                                    style={{ borderRadius: '50%', marginBottom: 20 }} 
                                />
                                <br></br>
                                <Button 
                                    onClick={signUserOut} 
                                >
                                    Sign Out
                                </Button>
                            </div>

                            {/* Right Section (Profile Info) */}
                            <div style={{ gridColumn: '2/2', display: 'grid', gridTemplateRows: 'repeat(4, auto)', gap: '10px' }}>
                                <Button 
                                    style={{ 
                                        fontSize: 50,
                                        width: '90%', 
                                        height: 'auto',    // Height will grow as text wraps
                                        textAlign: 'left',
                                        paddingLeft: '15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        whiteSpace: 'normal',  // Allows text to wrap
                                        overflow: 'hidden',    // In case you want to limit overflow
                                        textOverflow: 'ellipsis'
                                    }}
                                >
                                    Name: {user?.displayName}
                                </Button>

                                <Button 
                                    style={{ 
                                        fontSize: 50,
                                        width: '90%', 
                                        height: 'auto',    // Height will grow as text wraps
                                        textAlign: 'left',
                                        paddingLeft: '15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        whiteSpace: 'normal',  // Allows text to wrap
                                        overflow: 'hidden',    // In case you want to limit overflow
                                        textOverflow: 'ellipsis'
                                    }}
                                >
                                    Email: {user?.email}
                                </Button>

                                <Button 
                                    style={{ 
                                        fontSize: 50,
                                        width: '90%', 
                                        height: 'auto',    // Height will grow as text wraps
                                        textAlign: 'left',
                                        paddingLeft: '15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        whiteSpace: 'normal',  // Allows text to wrap
                                        overflow: 'hidden',    // In case you want to limit overflow
                                        textOverflow: 'ellipsis'
                                    }}
                                >
                                                                    User ID: {user?.uid}
                                                                </Button>

                                <Button 
                                    style={{ 
                                        fontSize: 50,
                                        width: '90%', 
                                        height: 'auto',    // Height will grow as text wraps
                                        textAlign: 'left',
                                        paddingLeft: '15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        whiteSpace: 'normal',  // Allows text to wrap
                                        overflow: 'hidden',    // In case you want to limit overflow
                                        textOverflow: 'ellipsis'
                                    }}
                                >
                                    Latest Footprint: {footprint}
                                </Button>
                            </div>
                        </div>
                    </Container>
                </>
            )}
        </div>
    );
};
