import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';

export const GoalForm = () => {

  const [user] = useAuthState(auth);


  const [formData, setFormData] = useState({
    user_id: user?.uid,
    goal_name: '',
    goal_description: '',
    amount: '',
    start_date: '',
    end_date: ''
  })

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData);
    
    try {
      const response = await axios.post('http://localhost:8000/api/goals/', formData);
      console.log(response)
    } catch (error) {
      console.log('There was an error submitting the data!', error);
    }
  }

  const buttonStyle = {
    marginTop: 10,
    padding: 10,
    border: 'none',
    fontFamily: 'Viga',
    backgroundColor: '#312A21',
    color: '#fff',
    borderRadius: 4,
    cursor: 'pointer',
  }

  return (
        <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
          <label style={{marginBottom: 10, color: '#312A21'}}>
            Goal Name:
            <input type="text" name="goal_name" style={{padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ddd'}} value={formData.goal_name} onChange={handleChange}/>
          </label>
          <label style={{marginBottom: 10, color: '#312A21'}}>
            Goal Description:
            <input type="text" name="goal_description" style={{padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ddd'}} value={formData.goal_description} onChange={handleChange}/>
          </label>
          <label style={{marginBottom: 10, color: '#312A21'}}>
            Amount:
            <input type="number" name="amount" style={{padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ddd'}} value={formData.amount} onChange={handleChange}/>
          </label>
          <label style={{marginBottom: 10, color: '#312A21'}}>
            Start Date:
            <input type="text" name="start_date" style={{padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ddd'}} value={formData.start_date} onChange={handleChange}/>
          </label>
          <label style={{marginBottom: 10, color: '#312A21'}}>
            End Date:
            <input type="text" name="end_date" style={{padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ddd'}} value={formData.end_date} onChange={handleChange}/>
          </label>
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
  );
};
