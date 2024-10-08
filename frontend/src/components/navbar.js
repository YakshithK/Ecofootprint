import { Link } from "react-router-dom"
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../config/firebase"
import { signOut } from "firebase/auth"

const linkStyle = {
    fontFamily: 'Poppins',
    fontWeight: 1000,
    fontSize: 25,
    paddingRight: 40,
    textDecoration: 'none',
    color: 'white',

}

export const Navbar = () => {

    const [user] = useAuthState(auth)

    const signUserOut = async () => {
        await signOut(auth)
    }

    return (
        <nav style={{ height:65, backgroundColor: 'green', alignContent: 'center'}}>
            <Link to='/' style={linkStyle}>Home </ Link>
            <Link to='/dashboard' style={linkStyle}>Dashboard </ Link>
            <Link to='/calc' style={linkStyle}>Calculator </ Link>
            <Link to='/profile' style={linkStyle}> Profile </ Link>
        </nav>
    )
}
