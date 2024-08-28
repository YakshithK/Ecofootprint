import { Login } from "../components/login"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase"
import { signOut } from "firebase/auth"
import axios from "axios"

export const Profile = () => {
    const [user] = useAuthState(auth)

    const signUserOut = async () => {
        await signOut(auth)
    }

    return(
        <div>
        {
            !user ? (
                <>
                    <div>
                        <h1>You are not signed in, click the button below to sign in with Google</h1>
                        <Login />
                    </div>
                </>
            ) : 
                <>
                    <div style={{ margin: 50 }}>
                        <div style={{display: 'grid', gridTemplateColumns: '25% 75%'}}>
                            <div>
                                <img src={user?.photoURL || ''} width='200' height='200' style={{borderRadius: 100 }}/>
                                <h1> {user?.displayName}</h1>
                                <button onClick={signUserOut} style={{ fontSize: 25 }}>Sign Out</button>
                            </div>
                            <div>
                                <p><strong>Name: </strong>{user?.displayName}</p>
                                <p><strong>Email: </strong>{user?.email}</p>
                                <p><strong>User ID: </strong>{axios.get(`http://localhost:8000/api/footprint/${user?.uid}`)}</p>
                            </div>
                        </div>
                    </div>
                </>
        }
        </div>
    )
}


