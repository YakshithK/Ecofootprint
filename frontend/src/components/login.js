import {auth, provider} from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
 
export const Login = () => {

    const navigate = useNavigate()

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result)
        navigate('/profile')
    }

    return (
        <div>
            <button style={{ fontSize: 25 }}onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}