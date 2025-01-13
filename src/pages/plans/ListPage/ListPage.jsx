import { Button, Flex, Table } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllPlans, deletePlanById } from '../../../api/planService';
import toast from 'react-hot-toast';
import style from './ListPage.module.css';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import PlanFilter from '../../../components/plans/PlanFilter/PlanFilter';

const ListPage = () => {
  const [plans, setPlans] = useState([]);
  const [filters, setFilters] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Отримання всіх тарифів
    const fetchPlans = async () => {
      try {
        const response = await getAllPlans();
        setPlans(response);
      } catch (error) {
        toast.error('Не вдалося завантажити тарифи');
      }
    };

    fetchPlans();
  }, []);

  const handleEdit = id => {
    // Перехід на сторінку створення/редагування тарифу з передачею ID
    navigate(`/plan/create?id=${id}`);
  };
  const handleDelete = id => {
    // Видалення тарифу
    setPlans(plans.filter(plan => plan._id !== id));
    deletePlanById(id);
  };

  // Налаштування колонок для таблиці
  const columns = [
    {
      title: 'Назва',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Опис',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Вартість',
      dataIndex: 'price',
      key: 'price',
      render: price => `${price} грн`, // Додавання валюти до ціни
    },
    {
      title: 'Рівень',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: 'Дії',
      key: 'actions',
      render: (_, record) => (
        <Flex gap={10}>
          <Button type="primary" onClick={() => handleEdit(record._id)}>
            <FaEdit />
          </Button>
          <Button type="primary" onClick={() => handleDelete(record._id)}>
            <MdDelete />
          </Button>
        </Flex>
      ),
    },
  ];

  const filteredPlans = useMemo(() => {
    return plans.filter(plan => {
      if (filters.minPrice && plan.price < filters.minPrice) {
        return false;
      }
      if (filters.maxPrice && plan.price > filters.maxPrice) {
        return false;
      }
      if (filters.level && plan.level !== filters.level) {
        return false;
      }
      return true;
    });
  }, [plans, filters]);

  return (
    <div className={style.container}>
      <h1>Список тарифів</h1>

      <PlanFilter filters={filters} setFilters={setFilters} />
      <Table
        dataSource={filteredPlans}
        columns={columns}
        rowKey="_id"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default ListPage;
