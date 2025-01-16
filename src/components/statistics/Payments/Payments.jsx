import style from './Payments.module.css';
import { useEffect, useState } from 'react';
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
import { DatePicker, Empty, Select } from 'antd';
import { getAllPayments } from '../../../api/paymentService';
import UserSelector from '../../custom/UserSelector/UserSelector';
import UserPaymentsChart from '../charts/UserPaymentsChart';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../../redux/users/selector';
import PaymentsChart from '../charts/PaymentsChart';

const { RangePicker } = DatePicker;
const { Option } = Select;

// Реєструємо компоненти Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const Payments = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [scale, setScale] = useState('month'); // 'month', 'week', 'year'
  const [range, setRange] = useState(null); // Фільтр за датами
  const [userId, setUserId] = useState(null);
  const [total, setTotal] = useState(0);
  const users = useSelector(selectUsers);

  useEffect(() => {
    getAllPayments().then(setData);
  }, []);

  useEffect(() => {
    let result = [...data];

    if (range) {
      const [start, end] = range;
      result = data.filter(payment => {
        const date = new Date(payment.date);
        return date >= start.toDate() && date <= end.toDate();
      });
    }

    if (userId && userId !== 'none') {
      result = result.filter(payment => {
        return payment.userId == userId;
      });
    }

    const total = result.reduce((acc, payment) => acc + payment.amount, 0);
    setTotal(total);

    setFilteredData(result);
  }, [range, data, userId]);

  return (
    <div className={style.container}>
      <div className={style.filters}>
        <RangePicker
          onChange={dates => setRange(dates)}
          style={{ marginRight: '1rem' }}
        />
        <Select
          defaultValue="month"
          onChange={value => setScale(value)}
          style={{ width: 150 }}
        >
          <Option value="month">By Month</Option>
          <Option value="week">By Week</Option>
          <Option value="year">By Year</Option>
        </Select>

        <UserSelector onChange={id => setUserId(id)} value={userId} />
      </div>
      <div className={style.total}>
        <p>Загальний прибуток: {total}</p>
      </div>

      <div className={style.chartContainer}>
        {filteredData.length > 0 ? (
          <PaymentsChart scale={scale} filteredData={filteredData} />
        ) : (
          <Empty description="No data available" />
        )}
      </div>
      <div className={style.charts}>
        <UserPaymentsChart payments={filteredData} users={users} />
      </div>
    </div>
  );
};

export default Payments;
