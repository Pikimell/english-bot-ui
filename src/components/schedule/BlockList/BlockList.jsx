import { Flex, List } from 'antd';
import style from './BlockList.module.css';
import { useMemo, useState } from 'react';
import Item from './Item/Item';
import { days } from '../../../helpers/constants';

const BlockList = ({ groupList }) => {
  const blockList = useMemo(() => {
    return groupList
      .map(group => {
        const items = [...group.schedule] || [];
        return items.map(lesson => ({ group, lesson }));
      })
      .flat(1)
      .sort((a, b) => {
        const day1 = days[a.lesson.day];
        const day2 = days[b.lesson.day];
        if (day1 !== day2) {
          return day1 - day2;
        } else {
          return parseInt(a.lesson.time) - parseInt(b.lesson.time);
        }
      });
  }, [groupList]);

  return (
    <div className={style.list}>
      {blockList.map((el, i) => {
        return (
          <Item key={el.group._id + i} group={el.group} lesson={el.lesson} />
        );
      })}
    </div>
  );
};

export default BlockList;
