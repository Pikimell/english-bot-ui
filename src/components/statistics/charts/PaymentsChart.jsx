import style from './ChatStyle.module.css';
import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import dayjs from 'dayjs';
import { getThemeOptions } from './darkTheme';

function groupPayments(data, scale) {
  const grouped = data.reduce((acc, payment) => {
    const date = new Date(payment.date);

    // Залежно від масштабу (scale), визначаємо групування
    let key;
    if (scale === 'month') {
      key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
        2,
        '0',
      )}`; // Формат YYYY-MM
    } else if (scale === 'week') {
      key = `${date.getFullYear()}-W${dayjs(date).week()}`; // Рік + номер тижня
    } else if (scale === 'year') {
      key = `${date.getFullYear()}`; // Тільки рік
    }

    acc[key] = (acc[key] || 0) + payment.amount;
    return acc;
  }, {});

  // Сортуємо групи в хронологічному порядку
  return Object.entries(grouped).sort(([a], [b]) => new Date(a) - new Date(b));
}

function createOptions(data, scale) {
  if (!data) return {};

  const groupedData = groupPayments(data, scale);

  // Генеруємо мітки та значення для графіка
  const labels = groupedData.map(([key]) => key);
  const dataset = groupedData.map(([, amount]) => amount);

  return {
    labels,
    datasets: [
      {
        label: 'Income',
        data: dataset,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };
}

const PaymentsChart = ({ filteredData, scale }) => {
  const chartData = useMemo(
    () => createOptions(filteredData, scale),
    [filteredData, scale],
  );
  return (
    <div className={style.container}>
      <Line
        data={chartData}
        options={getThemeOptions({
          responsive: true,
          maintainAspectRatio: false,
        })}
      />
    </div>
  );
};

export default PaymentsChart;
