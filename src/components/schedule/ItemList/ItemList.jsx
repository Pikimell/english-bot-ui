import style from './ItemList.module.css';
import { useMemo } from 'react';
import { Flex, List } from 'antd';
import { days, daysLabel } from '../../../helpers/constants';
import clsx from 'clsx';
import { getTimeZone } from '../../../helpers/convertData';

const ItemList = ({ data = {} }) => {
  const items = useMemo(() => {
    const result = [];
    for (const [day, arr] of Object.entries(data)) {
      arr.forEach(el => {
        result.push({ day: daysLabel[day], time: el });
      });
    }
    return result;
  }, [data]);

  return (
    <List
      dataSource={items}
      bordered
      renderItem={el => {
        const index = new Date().getDay();
        const currentDay = Object.keys(days)[index];

        const isActive = daysLabel[currentDay] === el.day;
        const classes = clsx(isActive && style.active);

        return (
          <List.Item className={classes}>
            <Flex style={{ width: '100%' }} gap="10px" justify="space-between">
              <p>{el.day}</p>-<p>{parseInt(el.time) + getTimeZone()}:00</p>
            </Flex>
          </List.Item>
        );
      }}
    />
  );
};

export default ItemList;
