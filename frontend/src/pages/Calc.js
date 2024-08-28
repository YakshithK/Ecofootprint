import { auth } from "../config/firebase"
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { Activity } from "../components/activityForm"

export const Calculator = () => {
    const [user] = useAuthState(auth)


    return(
        <div>
        {
            !user ? (
                <>
                    <div>
                        <h1>You are not signed in, you need to be signed in to view the calculator</h1>
                    </div>
                </>
            ) : 
                <>
                    <div>
                        <h1>Welcome to your calculator</h1>
                    </div>
                    <div>
                        <Activity />
                    </div>
                </>
        }
        </div>
    )
}
