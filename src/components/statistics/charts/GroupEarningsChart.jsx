import { Pie } from 'react-chartjs-2';
import style from './ChatStyle.module.css';
import { getThemeOptions } from './darkTheme';

const GroupEarningsChart = ({ payments = [] }) => {
  const data = payments.reduce((acc, payment) => {
    acc[payment.groupId] = (acc[payment.groupId] || 0) + payment.amount;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(data).map(groupId => `Group ${groupId}`),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#f44336'],
      },
    ],
  };

  return (
    <div className={style.container}>
      <Pie
        data={chartData}
        options={getThemeOptions({
          responsive: true,
          maintainAspectRatio: false,
        })}
      />
    </div>
  );
};

export default GroupEarningsChart;
