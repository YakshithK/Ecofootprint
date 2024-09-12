import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const ProgressCircle = ({ percentage, label, color }) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [color, '#e0e0e0'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    rotation: -90,
    circumference: 180,
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <div style={{ width: '150px', textAlign: 'center' }}>
      <Doughnut data={data} options={options} />
      <p style={{ fontSize: '18px', marginTop: '10px' }}>{label}</p>
    </div>
  );
};
