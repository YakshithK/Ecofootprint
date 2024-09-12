import { auth } from "../config/firebase"
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { Activity } from "../components/calculatorForm"
import { Container } from "../components/container"
import { Title } from "../components/title"

export const Calculator = () => {
    const [user] = useAuthState(auth)

    const containerStyle = {
        height: 'auto'
    }
    
    const titleStyle = {
        fontSize: 150,
        marginTop: 70
    }

    return(
        <div>
        {
            !user ? (
                <>
                    <Container style={{height:'100vh', justifyContent: 'center'}}>
                        <Title className="welcome" style={{fontSize: 120, marginTop: 50}}>You are not signed in, you need to be signed in to use the calculator</Title>
                    </Container>
                </>
            ) : 
                <>
                    <Container style={containerStyle}>
                        <div style={{marginBottom: 50}}>
                            <Title className="welcome" style={titleStyle}>Calculator</Title>
                            <Activity />
                        </div>
                    </Container>
                </>
        }
        </div>
    )
}
