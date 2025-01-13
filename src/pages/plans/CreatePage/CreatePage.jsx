import { Button, Input, InputNumber, Select } from 'antd';
import style from './CreatePage.module.css';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  createPlan,
  getPlanById,
  updatePlanById,
} from '../../../api/planService';
import toast from 'react-hot-toast';

const CreatePage = () => {
  const formRef = useRef();
  const [params, setParams] = useSearchParams();
  const [formData, setFormData] = useState({});
  const id = params.get('id');

  const handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [key]: value });
  };

  useEffect(() => {
    console.log(id);

    if (id) {
      getPlanById(id).then(setFormData);
    }
  }, [id]);

  const handleUpdate = () => {
    updatePlanById(id, formData).then(() => {
      toast.success('Тариф оновлено!');
      setParams({});
      setFormData({});
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { title, description, price, level } = formData;

    const isValid = title && description && price && level;

    if (!isValid) {
      toast.error('Будь ласка, заповніть усі поля');
      return;
    }

    if (id) {
      return handleUpdate();
    }

    toast
      .promise(createPlan(formData), {
        loading: 'Зберігаємо...',
        success: 'Тариф створено!',
        error: 'Щось пішло не так((',
      })
      .then(() => {
        setFormData({});
        formRef.current.reset();
      });
  };

  return (
    <div>
      <form ref={formRef} className={style.form} onChange={handleChange}>
        <Input
          type="text"
          name="title"
          placeholder="Назва тарифу"
          required
          value={formData.title}
        />
        <Input
          type="text"
          name="description"
          placeholder="Опис тарифу"
          required
          value={formData.description}
        />
        <InputNumber
          name="price"
          placeholder="Вартість"
          required
          min={0}
          step={50}
          value={formData.price}
        />
        <Select
          placeholder="Рівень"
          value={formData.level}
          required
          onChange={value => setFormData({ ...formData, level: value })}
        >
          <Select.Option value="A1">A1</Select.Option>
          <Select.Option value="A2">A2</Select.Option>
          <Select.Option value="B1">B1</Select.Option>
          <Select.Option value="B2">B2</Select.Option>
          <Select.Option value="C1">C1</Select.Option>
          <Select.Option value="C2">C2</Select.Option>
        </Select>
        <Button onClick={handleSubmit}>
          {id ? 'Зберегти зміни' : 'Додати тариф'}
        </Button>
      </form>
    </div>
  );
};

export default CreatePage;
