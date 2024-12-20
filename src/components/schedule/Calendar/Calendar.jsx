import clsx from 'clsx';
import { days } from '../../../helpers/constants';
import style from './Calendar.module.css';
import { getTimeZone } from '../../../helpers/convertData';

function getPos(x = 1, y = 1) {
  return {
    gridRow: y,
    gridColumn: x,
  };
}

function getEmptyArray() {
  return Array.from({ length: 16 }, (_, i) => {
    const hour = i + 7;
    return Array.from({ length: 8 }, (_, j) => ({
      value: j === 0 ? hour : '',
      type: j === 0 ? 'menu' : '',
    }));
  });
}

function getHeaders() {
  const headers = Object.keys(days);
  const reorderedHeaders = [...headers.slice(1), headers[0]];

  return reorderedHeaders.map((day, x) => (
    <div style={getPos(x + 2)} key={day} className={style.block}>
      {day}
    </div>
  ));
}

function parseTime(time) {
  const parsed = parseInt(time, 10);
  if (isNaN(parsed)) return 0;
  return parsed - 7 + +getTimeZone();
}

function getBody(data) {
  const grid = getEmptyArray();

  for (const [day, times] of Object.entries(data)) {
    const dayIndex = days[day];
    const x = dayIndex === 0 ? 7 : dayIndex;

    times.forEach(time => {
      const y = parseTime(time);
      if (grid[y] && grid[y][x]) {
        grid[y][x] = { value: '', type: 'active' };
      }
    });
  }

  return grid.flatMap((row, y) => row.map((cell, x) => getBlock(x, y, cell)));
}

function getBlock(x, y, cell) {
  const isMenu = cell.type === 'menu';
  const isActive = cell.type === 'active';
  const classes = clsx(
    style.block,
    isMenu && style.menu,
    isActive && style.active,
  );

  return (
    <div key={`${x}-${y}`} className={classes} style={getPos(x + 1, y + 1)}>
      {cell.value}
    </div>
  );
}

const Calendar = ({ data }) => {
  return (
    <div>
      <div className={style.table}>
        <div className={style.header}>
          <div className={style.block} style={getPos(1, 1)}>
            Дні
          </div>
          {getHeaders()}
        </div>
        <div className={style.body}>{getBody(data)}</div>
      </div>
    </div>
  );
};

export default Calendar;
