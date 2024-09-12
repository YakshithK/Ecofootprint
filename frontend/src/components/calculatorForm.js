import React, { useState } from "react";
import axios from 'axios';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { Button } from "./button";

export function Activity() {

  const styles = {
    div: {paddingBottom: 10, fontSize: 40},
    input: {fontSize: 50, borderRadius: 20, textAlign: 'center', border: '4px solid #312A21', backgroundColor: 'rgba(144, 138, 39, 0.5)'}
  }
  
  const [user] = useAuthState(auth)

  const [formData, setFormData] = useState({
    transport: { name: '', amount: 0 },
    energy: { name: '', amount: 0 },
    food: { name: '', amount: 0 },
    waste: { name: '', amount: 0 }
  });

  const [footprint, setFootprint] = useState(0); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [category, key] = name.split('.');

    setFormData((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [key]: key === "amount" ? parseFloat(value) : value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/footprint/calc', formData);

      const transport = response.data.footprint.data.transport
      const energy = response.data.footprint.data.energy
      const food = response.data.footprint.data.food
      const waste = response.data.footprint.data.waste
      
      const footprint = parseFloat(response.data.footprint.footprint.footprint)

      const req = {uid: user?.uid, footprint: footprint, transport: transport, energy: energy, food: food, waste: waste}
      const res2 = await axios.put('http://localhost:8000/api/footprint', req)

      setFootprint(footprint)
    } catch (error) {
      console.log('There was an error submitting the data!', error);
    }
  };

  return (
    <div style={{fontFamily: 'Viga'}}>
      <form onSubmit={handleSubmit} style={{marginTop: 30}}>
        <div style={styles.div}>
          <label>Mode of Transportation: </label>
          <select name="transport.name" onChange={handleChange} style={styles.input}>
            <option value=''>Select a Mode</option>
            <option value='car'>Car</option>
            <option value='bus'>Bus</option>
            <option value='bike'>Bike</option>
          </select>
        </div>
        <div style={styles.div}>
          <label>Distance (km): </label>
          <input
            type='number'
            name="transport.amount"
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.div}>
          <label>Energy Type: </label>
          <select name="energy.name" onChange={handleChange} style={styles.input}>
            <option value=''>Select a Type</option>
            <option value='electricity'>Electricity</option>
            <option value='natural gas'>Natural Gas</option>
          </select>
        </div>
        <div style={styles.div}>
          <label>Amount (kWh): </label>
          <input
            type='number'
            name="energy.amount"
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.div}>
          <label>Food: </label>
          <select name="food.name" onChange={handleChange} style={styles.input}>
            <option value=''>Select a Type</option>
            <option value='meat'>Meat</option>
            <option value='vegetables'>Vegetables</option>
          </select>
        </div>
        <div style={styles.div}>
          <label>Food Amount: </label>
          <input
            type='number'
            name="food.amount"
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.div}>
          <label>Waste Type: </label>
          <select name="waste.name" onChange={handleChange} style={styles.input}>
            <option value=''>Select a Type</option>
            <option value='plastic'>Plastic</option>
            <option value='paper'>Paper</option>
          </select>
        </div>
        <div style={styles.div}>
          <label>Waste Amount: </label>
          <input
            type='number'
            name="waste.amount"
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <Button type="submit" style={{width: 500}}>Submit</Button>
      </form>
      {footprint !== 0 && (
      <p style={{fontSize: 75}}>Your Carbon Footprint is {footprint}</p>
      )}    
    </div>
  );
}
