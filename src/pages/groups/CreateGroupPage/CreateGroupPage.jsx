import { Button, Input, Select } from 'antd';
import style from './CreateGroupPage.module.css';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  createGroup,
  getGroupById,
  updateGroupById,
} from '../../../api/groupService';
import toast from 'react-hot-toast';

const CreateGroupPage = () => {
  const formRef = useRef();
  const [params] = useSearchParams();
  const [formData, setFormData] = useState({});
  const { id } = params;

  const handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [key]: value });
  };

  useEffect(() => {
    if (id) {
      getGroupById(id).then(setFormData);
    }
  }, [id]);

  const handleUpdate = () => {
    updateGroupById(id, formData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { price, level } = formData;

    const isValid = price && level;

    if (!isValid) {
      return;
    }

    if (id) {
      return handleUpdate();
    }

    toast
      .promise(createGroup(formData), {
        loading: 'Зберігаємо...',
        success: 'Групу створенно!',
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
        <Select
          placeholder="Рівень"
          value={formData.level}
          required
          onChange={e => setFormData({ ...formData, level: e })}
        >
          <Select.Option value="A0">Бездарі</Select.Option>
          <Select.Option value="A1">A1</Select.Option>
          <Select.Option value="A2">A2</Select.Option>
          <Select.Option value="B1">B1</Select.Option>
          <Select.Option value="B2">B2</Select.Option>
          <Select.Option value="C1">C1</Select.Option>
          <Select.Option value="C2">C2</Select.Option>
        </Select>
        <Input
          type="number"
          name="price"
          placeholder="Вартість"
          required
          min={0}
          step={50}
          value={formData.price}
        />
        <Input
          type="text"
          name="descriptions"
          placeholder="Нотатки"
          value={formData.descriptions}
        />
        <Button onClick={handleSubmit}>Додати групу</Button>
      </form>
    </div>
  );
};

export default CreateGroupPage;
