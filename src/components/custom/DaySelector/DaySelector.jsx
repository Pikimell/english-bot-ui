import { Select } from 'antd';
import style from './DaySelector.module.css';
import clsx from 'clsx';

const DaySelector = ({ className, ...props }) => {
  const classes = clsx(style.selector, className);
  return (
    <Select className={classes} {...props} placeholder="Оберіть день тижня">
      <Select.Option key="Пн">Понеділок</Select.Option>;
      <Select.Option key="Вт">Вівторок</Select.Option>;
      <Select.Option key="Ср">Середа</Select.Option>;
      <Select.Option key="Чт">Четвер</Select.Option>;
      <Select.Option key="Пт">Пятниця</Select.Option>;
      <Select.Option key="Сб">Субота</Select.Option>;
      <Select.Option key="Нд">Неділя</Select.Option>;
    </Select>
  );
};

export default DaySelector;
