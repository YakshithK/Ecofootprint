import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import axios from 'axios';

export const ActivityForm = () => {

  const [user] = useAuthState(auth);

  const [formData, setFormData] = useState({
    user_id: user?.uid,
    activity_type: '',
    description: '',
    amount: '',
    date: ''
  })

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await axios.post('http://localhost:8000/api/activities/', formData);
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
            Activity Type:
            <input type="text" name="activity_type" style={{padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ddd'}} value={formData.activity_type} onChange={handleChange}/>
          </label>
          <label style={{marginBottom: 10, color: '#312A21'}}>
            Activity Description:
            <input type="text" name="description" style={{padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ddd'}} value={formData.description} onChange={handleChange}/>
          </label>
          <label style={{marginBottom: 10, color: '#312A21'}}>
            Amount:
            <input type="number" name="amount" style={{padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ddd'}} value={formData.amount} onChange={handleChange}/>
          </label>
          <label style={{marginBottom: 10, color: '#312A21'}}>
            Date:
            <input type="text" name="date" style={{padding: 8, marginTop: 4, borderRadius: 4, border: '1px solid #ddd'}} value={formData.date} onChange={handleChange}/>
          </label>
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
  );
};
