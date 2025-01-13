import { InputNumber, Select, Button } from 'antd';
import style from './PlanFilter.module.css';
import { useState } from 'react';

const PlanFilter = ({ filters, setFilters }) => {
  const [minPrice, setMinPrice] = useState(filters.minPrice || 0);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice || 10000);
  const [level, setLevel] = useState(filters.level || '');

  const handleFilterChange = () => {
    setFilters({
      minPrice,
      maxPrice,
      level,
    });
  };

  const resetFilters = () => {
    setMinPrice(0);
    setMaxPrice(10000);
    setLevel('');
    setFilters({
      minPrice: 0,
      maxPrice: 1000,
      level: '',
    });
  };

  return (
    <div className={style.filterContainer}>
      <div className={style.filterItem}>
        <label>Мінімальна вартість:</label>
        <InputNumber
          min={0}
          value={minPrice}
          onChange={value => setMinPrice(value || 0)}
          placeholder="Мінімум"
        />
      </div>
      <div className={style.filterItem}>
        <label>Максимальна вартість:</label>
        <InputNumber
          min={0}
          value={maxPrice}
          onChange={value => setMaxPrice(value || 0)}
          placeholder="Максимум"
        />
      </div>
      <div className={style.filterItem}>
        <label>Рівень:</label>
        <Select
          value={level}
          onChange={value => setLevel(value)}
          placeholder="Обрати рівень"
          allowClear
        >
          <Select.Option value="A1">A1</Select.Option>
          <Select.Option value="A2">A2</Select.Option>
          <Select.Option value="B1">B1</Select.Option>
          <Select.Option value="B2">B2</Select.Option>
          <Select.Option value="C1">C1</Select.Option>
          <Select.Option value="C2">C2</Select.Option>
        </Select>
      </div>
      <div className={style.filterActions}>
        <Button type="primary" onClick={handleFilterChange}>
          Застосувати
        </Button>
        <Button onClick={resetFilters}>Скинути</Button>
      </div>
    </div>
  );
};

export default PlanFilter;
