import { auth } from "../config/firebase"
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"

export const Dashboard = () => {
    const [user] = useAuthState(auth)


    return(
        <div>
        {
            !user ? (
                <>
                    <div>
                        <h1>You are not signed in, you need to be signed in to view the dashboard</h1>
                    </div>
                </>
            ) : 
                <>
                    <div>
                        <h1>Welcome to your dashboard</h1>
                    </div>
                </>
        }
        </div>
    )
}
