import style from './OtherInfo.module.css';
import { useState, useEffect } from 'react';
import PaymentMethodsChart from '../charts/PaymentMethodsChart';
import StudentEarningsChart from '../charts/StudentEarningsChart';
import PopularDaysChart from '../charts/PopularDaysChart';
import { getAllLessons } from '../../../api/lessonService';
import { getAllPayments } from '../../../api/paymentService';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Додаємо ArcElement для кругових діаграм
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Реєструємо ArcElement
);

const OtherInfo = () => {
  const [lessons, setLessons] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    getAllLessons({ page: 1 }).then(res => setLessons(res.data));
    getAllPayments().then(setPayments);
  }, []);

  return (
    <div className={style.container}>
      <h2>Statistics</h2>
      <div className={style.chartGrid}>
        <PaymentMethodsChart payments={payments} />
        <StudentEarningsChart payments={payments} />
        <PopularDaysChart lessons={lessons} />
      </div>
    </div>
  );
};

export default OtherInfo;
