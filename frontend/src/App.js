import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard.js';
import { Home } from './pages/Home.js';
import { Profile } from './pages/Profile.js';
import { Calculator } from './pages/Calc.js';
import { Goals } from './pages/Goals.js';
import { Activities } from './pages/Activities.js';
import { Header } from './components/header.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/activities" element={<Activities />}/>
          <Route path="/calc" element={<Calculator />}/>
          <Route path="/goals" element={<Goals />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
