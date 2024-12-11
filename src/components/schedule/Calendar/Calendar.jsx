import { days } from '../../../helpers/constants';
import style from './Calendar.module.css';
import { useState } from 'react';

function getPos(x = 1, y = 1) {
  return {
    gridRow: y,
    gridColumn: x,
  };
}

function getHeaders() {
  const copy = [...Object.keys(days)];
  copy.push(copy.shift());
  return copy.map((el, x) => {
    return (
      <div style={getPos(x + 2)} key={el} className={style.block}>
        {el}
      </div>
    );
  });
}

function getBody(date, lessons) {
  // const bookedList = lessons2data(lessons);
  // return hours.map(hour => (
  //   <tr key={hour}>
  //     <td className="baseCol">{parseTime(hour)}</td>
  //     {days.map((day, i) => {
  //       const itemClass = getClass(date, i, hour, bookedList);
  //       return <td key={day + hour} className={`time-slot ${itemClass}`}></td>;
  //     })}
  //   </tr>
  // ));
}

const Calendar = ({ data }) => {
  return (
    <div>
      <div className={style.table}>
        <div className={style.header}>
          <div className={style.block} style={getPos(1, 0)}>
            +
          </div>
          {getHeaders()}
        </div>
        <div className={style.body}></div>
      </div>
    </div>
  );
};

export default Calendar;
