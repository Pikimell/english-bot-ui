import { Pie } from 'react-chartjs-2';
import style from './ChatStyle.module.css';
import { getThemeOptions } from './darkTheme';

const PopularDaysChart = ({ lessons }) => {
  const data = lessons.reduce((acc, lesson) => {
    const day = new Date(lesson.dateTime).getDay(); // 0 = Sunday, 1 = Monday, ...
    acc[day] = (acc[day] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: [
      'Неділя',
      'Понеділок',
      'Вівторок',
      'Середа',
      'Четвер',
      'Пятниця',
      'Субота',
    ],
    datasets: [
      {
        data: Object.keys(data).map(day => data[day] || 0),
        backgroundColor: [
          '#4caf50',
          '#2196f3',
          '#ff9800',
          '#f44336',
          '#9c27b0',
          '#3f51b5',
          '#8bc34a',
        ],
      },
    ],
  };

  return (
    <div className={style.container}>
      <h3>Завантаженість днів</h3>
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

export default PopularDaysChart;
