import { auth } from "../config/firebase"
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { Container } from "../components/container"
import '../App.css'
import '../Dashboard.css'
import { Button } from "../components/button"
import progress from '../assets/images/progress.gif'
import chart from '../assets/images/chart.png'
import { Title } from "../components/title"
import { Login } from "../components/login"
import axios from "axios"
import { useState, useEffect } from "react"
import { PieChart } from "../components/pieChart"
import { useNavigate } from "react-router-dom"
import {Chart, ArcElement} from 'chart.js'
import { Link } from "react-router-dom"
import { Modal } from "../components/modal.js"
import { GoalForm } from "../components/goalForm.js"
import { ActivityForm } from "../components/activityForm.js"
import { ProgressCircle } from "../components/progress.js"

Chart.register(ArcElement);

const getFormattedDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    return today.toLocaleDateString('en-US', options);
}

const getData = async (id) => {

    try {
        const response = await axios.get(`http://localhost:8000/api/footprint/data/${id}`)
        const footprint = response.data

        const transport = parseFloat(response.data.latest_transport)
        const energy = parseFloat(response.data.latest_energy)
        const food = parseFloat(response.data.latest_food)
        const waste = parseFloat(response.data.latest_waste)
        
        const res = {
            transport: transport,
            energy: energy,
            food: food,
            waste: waste
        }
        return res
    } catch (error) {
        console.error('Error fetching footprint:', error)
        return 0
    }
}

const getProgress = async (uid) => {
    let goal_ids = [];
    const goals = [];
  
    try {
      const response = await axios.get(`http://localhost:8000/api/goals/${uid}`);
  
      // Get goal IDs
      for (let res of response.data) {
        goal_ids.push(res['id']);
      }
  
      // Get the last 3 goals
      goal_ids = goal_ids.slice(-3);
  
      // Fetch progress for each goal
      for (let id of goal_ids) {
        try {
          const res = await axios.get(`http://localhost:8000/api/goals/progress/${id}`);
          const progressData = res.data;
  
          // Format data to match the goals state structure
          goals.push({
            percentage: parseInt(progressData.progress), // Assuming progress is a percentage
            label: progressData.goal_name,
            color: getRandomColor(), // You can define a function to assign colors dynamically
          });
        } catch (error) {
          console.log('Error: ', error);
        }
      }
  
      return goals;
    } catch (error) {
      console.error('Error fetching footprint:', error);
      return [];
    }
  };
  
  // Function to assign random colors to goals (you can customize it)
  const getRandomColor = () => {
    const colors = ['#fbc02d', '#66bb6a', '#42a5f5', '#FF6384', '#36A2EB'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  

export const Dashboard = () => {

    const [user] = useAuthState(auth);

    const [goals, setGoals] = useState([]);

    useEffect(() => {
      if (user) {
        const fetchGoals = async () => {
          const fetchedGoals = await getProgress(user.uid);
          setGoals(fetchedGoals);  // Update goals state with fetched data
        };
  
        fetchGoals();
      }
    }, [user]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    
      const closeModal = () => {
        setIsModalOpen(false);
    };

    const [isModalOpen1, setIsModalOpen1] = useState(false);

    const openModal1 = () => {
        setIsModalOpen1(true);
    };
    
      const closeModal1 = () => {
        setIsModalOpen1(false);
    };

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

    const changeNav = () => {
      navigate('/calc')
    }


    const [data, setData] = useState({});

    useEffect(() => {
        if (user) {
            const fetchData = async () => {
                const userData = await getData(user.uid);
                setData(userData);
            };

            fetchData();
        }
    }, [user]);

    const signUserOut = async () => {
        await signOut(auth);
    };


    const titleStyle = {
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


    return(
        <div>
        {
            !user ? (
                <>
                    <Container style={{height:'100vh', justifyContent: 'center'}}>
                        <Title className="welcome" style={{fontSize: 120, marginTop: 50}}>You are not signed in, you need to be signed in to view the dashboard</Title>
                    </Container>
                </>
            ) : 
                <>
                    <Container>
                        <div style={{display: 'grid', gridTemplateRows: '50% 50%', gap: 100, margin: 10}}>
                            
                            {/* Top Section */}
                            <div className="top-section" style={{gridRow: '1/2', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
                                
                                {/* Column 1: Welcome Message */}
                                <div style={{display: 'block', gridColumn: '1/2'}}>     
                                    <Title className="welcome" style={titleStyle}>Welcome Back User!</Title>
                                    <p style={{fontFamily: 'Karantina', fontSize: 70, marginRight: 50}}>{getFormattedDate()}</p>
                                </div>

                                {/* Column 2: Latest Footprint */}
                                <div style={{gridColumn: '2/3', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <p style={{fontFamily: 'Karantina', fontSize: 70, textAlign: 'left'}}>
                                        Your last footprint was X, Y% greater/lower than the one before.
                                    </p>
                                </div>

                                {/* Column 3: Chart Image */}
                                <div style={{gridColumn: '3/4', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <PieChart data={data} />
                                </div>
                            </div>
                            
                            {/* Bottom Section */}
                            <div style={{gridRow: '2/2', display: 'grid', gridTemplateColumns: '50%, 50%'}}>
                                <div className="quick-actions" style={{display: 'flex', flexDirection: 'column', gridColumn: '1/2'}}>
                                    <h2>Quick Actions</h2>
                                    <Button onClick={openModal}>Add new Goal</Button>
                                    <Modal isOpen={isModalOpen} onClose={closeModal}><GoalForm /></Modal>
                                    <Button onClick={openModal1}>Add new Activity</Button>
                                    <Modal isOpen={isModalOpen1} onClose={closeModal1}><ActivityForm /></Modal>
                                    <Button><Link style={buttonStyle} to='/calc'>Recalculate Footprint</Link></Button>
                                </div>

                                <div className="goals-section" style={{gridColumn: '2/2'}}>
                                    <h2>Goals Progress</h2>
                                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    {goals.map((goal, index) => (
                                        <ProgressCircle
                                        key={index}
                                        percentage={goal.percentage}
                                        label={goal.label}
                                        color={goal.color}
                                        />
                                    ))}
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


