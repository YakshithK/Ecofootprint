import React from 'react';
import { Pie } from 'react-chartjs-2';

export const PieChart = ({ data }) => {
  // Prepare data for the Pie chart
  const chartData = {
    labels: ['Transport', 'Energy', 'Food', 'Waste'],
    datasets: [
      {
        label: 'Carbon Footprint Contributions',
        data: [data.transport, data.energy, data.food, data.waste],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: 'white', // Set label color to white
          font: {
            size: 16, // Optionally adjust the font size
          },
        },
      },
    },
  };

  return (
    <div>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};
