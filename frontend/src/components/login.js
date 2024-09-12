import {auth, provider} from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button } from './button'
 
export const Login = () => {

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
            <Button style={buttonStyle}onClick={signInWithGoogle}>Sign In With Google</Button>
        </div>
    )
}