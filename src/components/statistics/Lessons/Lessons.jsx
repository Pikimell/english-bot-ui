import { useEffect, useMemo, useState } from 'react';
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
import { DatePicker, Select, Empty } from 'antd';
import { getAllLessons } from '../../../api/lessonService';
import dayjs from 'dayjs';
import style from './Lessons.module.css';
import GroupSelector from '../../custom/GroupSelector/GroupSelector';
import UserSelector from '../../custom/UserSelector/UserSelector';

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

const darkThemeOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#ffffff',
      },
    },
    tooltip: {
      backgroundColor: '#333',
      titleColor: '#fff',
      bodyColor: '#fff',
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#ffffff',
      },
      grid: {
        color: '#444',
      },
    },
    y: {
      ticks: {
        color: '#ffffff',
      },
      grid: {
        color: '#444',
      },
    },
  },
};

function groupLessons(data, scale) {
  const grouped = data.reduce((acc, lesson) => {
    const date = new Date(lesson.dateTime);

    let key;
    if (scale === 'month') {
      key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
        2,
        '0',
      )}`;
    } else if (scale === 'week') {
      key = `${date.getFullYear()}-W${dayjs(date).week()}`;
    } else if (scale === 'year') {
      key = `${date.getFullYear()}`;
    } else if (scale === 'day') {
      key = dayjs(date).format('YYYY-MM-DD'); // Формат дати по дням
    }

    acc[key] = (acc[key] || 0) + 1; // Рахуємо кількість уроків
    return acc;
  }, {});

  return Object.entries(grouped).sort(([a], [b]) => new Date(a) - new Date(b));
}

function createOptions(data, scale) {
  if (!data) return {};

  const groupedData = groupLessons(data, scale);

  const labels = groupedData.map(([key]) => key);
  const dataset = groupedData.map(([, count]) => count);

  return {
    labels,
    datasets: [
      {
        label: 'Lessons Count',
        data: dataset,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };
}

const Lessons = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [scale, setScale] = useState('month');
  const [range, setRange] = useState(null);
  const [userId, setUserId] = useState(null);
  const [groupId, setGroupId] = useState(null);

  const chartData = useMemo(
    () => createOptions(filteredData, scale),
    [filteredData, scale],
  );

  useEffect(() => {
    getAllLessons({ page: 1 }).then(res => setData(res.data));
  }, []);

  useEffect(() => {
    let result = [...data];

    if (range) {
      const [start, end] = range;
      result = result.filter(lesson => {
        const date = new Date(lesson.dateTime);
        return date >= start.toDate() && date <= end.toDate();
      });
    }

    if (userId && userId !== 'none') {
      result = result.filter(lesson => lesson.userId === userId);
    }

    if (groupId && groupId !== 'none') {
      result = result.filter(lesson => lesson.groupId === groupId);
    }

    setFilteredData(result);
  }, [range, data, userId, groupId]);

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
          style={{ width: 150, marginRight: '1rem' }}
        >
          <Option value="day">By Day</Option>
          <Option value="month">By Month</Option>
          <Option value="week">By Week</Option>
          <Option value="year">By Year</Option>
        </Select>

        <UserSelector onChange={id => setUserId(id)} value={userId} />
        <GroupSelector onChange={id => setGroupId(id)} value={groupId} />
      </div>

      <div className={style.chartContainer}>
        {filteredData.length > 0 ? (
          <Line
            data={chartData}
            options={{
              ...darkThemeOptions,
              maintainAspectRatio: false,
            }}
          />
        ) : (
          <Empty description="No data available" />
        )}
      </div>
    </div>
  );
};

export default Lessons;
