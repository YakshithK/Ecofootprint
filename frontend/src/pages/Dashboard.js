import { auth } from "../config/firebase"
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { Container } from "../components/container"
import '../App.css'
import '../Dashboard.css'
import { Button } from "../components/button"
import progress from '../assets/images/progress.gif'
import chart from '../assets/images/chart.png'

export const Dashboard = () => {
    const title = {
        fontSize: 150,
        fontWeight: 1,
        marginLeft: 30,
        color: '#514E20',
        fontFamily: 'Karantina',
        WebKitTextStrokeWidth: 2,
        WebkitTextStrokeColor: 'white',
        textShadow: '-1px -1px 0 #000',
        textAlign: 'left'
    }
  
    const [user] = useAuthState(auth);

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
                    <Container>
                        <div style={{display: 'grid', gridTemplateRows: '50% 50%', gap: 150}}>
                            
                            {/* Top Section */}
                            <div className="top-section" style={{gridRow: '1/2', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
                                
                                {/* Column 1: Welcome Message */}
                                <div style={{display: 'block', gridColumn: '1/2'}}>     
                                    <h1 className="welcome" style={title}>Welcome Back User!</h1>
                                    <p style={{fontFamily: 'Karantina', fontSize: 70, marginRight: 50}}>Monday, September 7th, 2024</p>
                                </div>

                                {/* Column 2: Latest Footprint */}
                                <div style={{gridColumn: '2/3', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <p style={{fontFamily: 'Karantina', fontSize: 70, textAlign: 'left'}}>
                                        Your last footprint was X, Y% greater/lower than the one before.
                                    </p>
                                </div>

                                {/* Column 3: Chart Image */}
                                <div style={{gridColumn: '3/4', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img src={chart} alt="Footprint Chart" style={{maxWidth: '100%', height: 'auto'}}/>
                                </div>
                            </div>
                            
                            {/* Bottom Section */}
                            <div style={{gridRow: '2/2', display: 'grid', gridTemplateColumns: '50%, 50%'}}>
                                <div className="quick-actions" style={{display: 'flex', flexDirection: 'column', gridColumn: '1/2'}}>
                                    <h2>Quick Actions</h2>
                                    <Button>Add new Goal</Button>
                                    <Button>Add new Activity</Button>
                                    <Button>Recalculate Footprint</Button>
                                </div>

                                <div className="goals-section" style={{gridColumn: '2/2'}}>
                                    <h2>Goals Progress</h2>
                                    <div className="goals-charts">
                                        <img src={progress} alt="Progress Chart"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </>
        }
        </div>
    );
};
