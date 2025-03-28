import style from './BlockList.module.css';
import { useMemo } from 'react';
import Item from './Item/Item';

const BlockList = ({ lessons, groupList, removeCallback }) => {
  const blockList = useMemo(() => {
    return lessons.map(lesson => {
      const group = groupList.find(el => el._id === lesson.groupId);
      return { group, lesson };
    });
  }, [lessons, groupList]);

  return (
    <div className={style.list}>
      {blockList.map(el => {
        return (
          <Item
            key={el.lesson._id}
            group={el.group}
            lesson={el.lesson}
            removeCallback={removeCallback}
          />
        );
      })}
    </div>
  );
};

export default BlockList;
