import { Pie } from 'react-chartjs-2';
import style from './ChatStyle.module.css';
import { getThemeOptions } from './darkTheme';

const PaymentMethodsChart = ({ payments }) => {
  const data = payments.reduce((acc, payment) => {
    acc[payment.method] = (acc[payment.method] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#f44336'],
      },
    ],
  };

  return (
    <div className={style.container}>
      <h3>Спосіб оплати</h3>
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

export default PaymentMethodsChart;
