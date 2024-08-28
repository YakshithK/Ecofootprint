import {auth, provider} from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
 
export const Login = () => {

    const navigate = useNavigate()

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)

        const uid = result.user.uid
        const email = result.user.email

        try{
            const response = await axios.get(`http://localhost:8000/api/users/${uid}`);
            const exists = response.data.exists

            if (!exists) {
                try {
                    
                    const req = {
                        uid: uid,
                        email: email
                    }

                    const response = await axios.post('http://localhost:8000/api/users/', req)
                } catch (error) {
                    console.log('There was an error', error)
                }
            } else {
                console.log('already registered')
            }
            
        } catch (error){
            console.log('There was an error', error)
        }
        navigate('/profile')
    }

    return (
        <div>
            <button style={{ fontSize: 25 }}onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}