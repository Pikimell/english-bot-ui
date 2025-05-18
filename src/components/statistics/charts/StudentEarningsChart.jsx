import { Pie } from 'react-chartjs-2';
import style from './ChatStyle.module.css';
import { getThemeOptions } from './darkTheme';

const StudentEarningsChart = ({ payments }) => {
  const data = payments.reduce((acc, payment) => {
    acc[payment.userId] = (acc[payment.userId] || 0) + payment.amount;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(data).map(userId => `Стдудент ${userId}`),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: [
          '#4caf50',
          '#2196f3',
          '#ff9800',
          '#f44336',
          '#9c27b0',
        ],
      },
    ],
  };

  return (
    <div className={style.container}>
      <h3>Надходження</h3>
      <Pie
        data={chartData}
        options={getThemeOptions({
          responsive: true,
          maintainAspectRatio: true,
        })}
      />
    </div>
  );
};

export default StudentEarningsChart;
