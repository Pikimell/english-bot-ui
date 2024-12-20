import { Button, Table, Tooltip } from 'antd';
import style from './GroupList.module.css';
import { useNavigate } from 'react-router-dom';

const getColumns = onOpen => {
  return [
    {
      title: 'Рівень',
      dataIndex: '',
      key: 'level',
      sorter: (a, b) => a.level.localeCompare(b.level),
      render: el => {
        return (
          <Tooltip placement="topCenter" title={el.description}>
            {el.level}
          </Tooltip>
        );
      },
    },
    {
      title: 'Учнів',
      dataIndex: 'students',
      key: 'students',
      sorter: (a, b) => a.students - b.students,
    },
    {
      title: 'Перегляд',
      dataIndex: '_id',
      render: id => <Button onClick={() => onOpen(id)}>Відкрити</Button>,
    },
  ];
};

const GroupList = ({ groups }) => {
  const navigate = useNavigate();
  const onOpen = id => {
    navigate(`/groups/${id}`);
  };

  const columns = getColumns(onOpen);
  return <Table dataSource={groups} columns={columns} />;
};

export default GroupList;
