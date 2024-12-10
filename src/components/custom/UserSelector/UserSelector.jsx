import { useSelector } from 'react-redux';
import style from './UserSelector.module.css';
import { useMemo } from 'react';
import { selectUsers } from '../../../redux/users/selector';
import { Select } from 'antd';
import clsx from 'clsx';

const getOptions = users => {
  const arr = users.map(el => {
    const info = el?.contactInfo || {};
    return { value: el.userId, label: info?.first_name || info?.nickname };
  });

  arr.unshift({ value: 'none', label: 'Не обрано' });
  return arr;
};

const UserSelector = ({ className, ...props }) => {
  const classes = clsx(style.select, className);
  const users = useSelector(selectUsers);

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
      placeholder="Обрати користувача"
      filterOption={filterOptions}
      options={options}
      {...props}
    />
  );
};

export default UserSelector;
