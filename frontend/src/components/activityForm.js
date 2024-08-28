import React, { useState } from "react";
import axios from 'axios';

export function Activity() {
  const [formData, setFormData] = useState({
    transport: { name: '', amount: 0 },
    energy: { name: '', amount: 0 },
    food: { name: '', amount: 0 },
    waste: { name: '', amount: 0 }
  });

  const [footprint, setFootprint] = useState(0); // Add state for footprint

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
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:8000/api/footprint/calc', formData);
      const footprint = parseFloat(response.data.footprint)
      setFootprint(footprint)
      console.log('Calculated Footprint:', footprint);
    } catch (error) {
      console.log('There was an error submitting the data!', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Mode of Transportation</label>
          <select name="transport.name" onChange={handleChange}>
            <option value=''>Select a Mode</option>
            <option value='car'>Car</option>
            <option value='bus'>Bus</option>
            <option value='bike'>Bike</option>
          </select>
        </div>
        <div>
          <label>Distance (km):</label>
          <input
            type='number'
            name="transport.amount"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Energy Type</label>
          <select name="energy.name" onChange={handleChange}>
            <option value=''>Select a Type</option>
            <option value='electricity'>Electricity</option>
            <option value='natural gas'>Natural Gas</option>
          </select>
        </div>
        <div>
          <label>Amount (kWh):</label>
          <input
            type='number'
            name="energy.amount"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Food</label>
          <select name="food.name" onChange={handleChange}>
            <option value=''>Select a Type</option>
            <option value='meat'>Meat</option>
            <option value='vegetables'>Vegetables</option>
          </select>
        </div>
        <div>
          <label>Food Amount:</label>
          <input
            type='number'
            name="food.amount"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Waste Type</label>
          <select name="waste.name" onChange={handleChange}>
            <option value=''>Select a Type</option>
            <option value='plastic'>Plastic</option>
            <option value='paper'>Paper</option>
          </select>
        </div>
        <div>
          <label>Waste Amount:</label>
          <input
            type='number'
            name="waste.amount"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Your Carbon Footprint: {footprint}</p> {/* Display the footprint */}
    </div>
  );
}
