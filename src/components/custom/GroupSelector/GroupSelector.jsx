import { useSelector } from 'react-redux';
import style from './GroupSelector.module.css';
import { useMemo } from 'react';

import { Select } from 'antd';
import clsx from 'clsx';
import { selectGroups } from '../../../redux/groups/selector';

const getOptions = users => {
  const arr = users.map(el => {
    return {
      value: el._id,
      label: `${el.level}(${el.students}): ${el.description}`,
    };
  });

  arr.unshift({ value: 'none', label: 'Не обрано' });
  return arr;
};

const GroupSelector = ({ className, ...props }) => {
  const classes = clsx(style.select, className);
  const users = useSelector(selectGroups);

  const options = useMemo(() => {
    return getOptions(users);
  }, [users]);

  const filterOptions = (input, option) => {
    const value = option?.label || '';
    return value.toLowerCase().includes(input.toLowerCase());
  };

  return (
    <Select
      className={classes}
      showSearch
      placeholder="Обрати групу"
      filterOption={filterOptions}
      options={options}
      {...props}
    />
  );
};

export default GroupSelector;
