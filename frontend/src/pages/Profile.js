import { Login } from "../components/login"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase"
import { signOut } from "firebase/auth"
import axios from "axios"
import { useState, useEffect } from "react"

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
    const [user] = useAuthState(auth)
    const [footprint, setFootprint] = useState(0)

    useEffect(() => {
        if (user) {
            const fetchFootprint = async () => {
                const userFootprint = await getFootprint(user.uid)
                setFootprint(userFootprint)
            }

            fetchFootprint()
        }
    }, [user])

    const signUserOut = async () => {
        await signOut(auth)
    }

    return (
        <div>
            {!user ? (
                <>
                    <div>
                        <h1>You are not signed in, click the button below to sign in with Google</h1>
                        <Login />
                    </div>
                </>
            ) : (
                <>
                    <div style={{ margin: 50 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '25% 75%' }}>
                            <div>
                                <img src={user?.photoURL || ''} width='200' height='200' style={{ borderRadius: 100 }} />
                                <h1>{user?.displayName}</h1>
                                <button onClick={signUserOut} style={{ fontSize: 25 }}>Sign Out</button>
                            </div>
                            <div>
                                <p><strong>Name: </strong>{user?.displayName}</p>
                                <p><strong>Email: </strong>{user?.email}</p>
                                <p><strong>User ID: </strong>{user?.uid}</p>
                                <p><strong>Latest Footprint: </strong>{footprint}</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
