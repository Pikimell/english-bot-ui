import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useMemo } from 'react';
import { getShortName } from '../../../utils/initTelegram';
import style from './ChatStyle.module.css';
import { getThemeOptions } from './darkTheme';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
function getUserName(users = [], userId) {
  const user = users.find(el => el.userId === userId);
  return getShortName(user);
}

const UserPaymentsChart = ({ payments, users }) => {
  // Групуємо платежі за userId і датою
  const groupedData = useMemo(() => {
    const grouped = payments.reduce((acc, payment) => {
      const date = new Date(payment.date).toISOString().split('T')[0]; // Формат дати: YYYY-MM-DD
      if (!acc[payment.userId]) acc[payment.userId] = {};
      acc[payment.userId][date] =
        (acc[payment.userId][date] || 0) + payment.amount;
      return acc;
    }, {});

    // Перетворюємо дані у формат для Chart.js
    const labels = Array.from(
      new Set(
        payments.map(
          payment => new Date(payment.date).toISOString().split('T')[0],
        ),
      ),
    ).sort();

    const datasets = Object.entries(grouped).map(([userId, data]) => {
      const dataPoints = labels.map(label => data[label] || 0);
      return {
        label: `${getUserName(users, userId)}`,
        data: dataPoints,
        borderColor: `hsl(${Math.random() * 360}, 70%, 50%)`, // Генеруємо унікальний колір
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 2,
        tension: 0.4,
      };
    });

    return { labels, datasets };
  }, [payments, users]);

  return (
    <div className={style.container}>
      <Line
        data={groupedData}
        options={getThemeOptions({
          responsive: true,
          maintainAspectRatio: false,
        })}
      />
    </div>
  );
};

export default UserPaymentsChart;
