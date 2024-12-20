import { Button, Table } from 'antd';
import style from './LessonList.module.css';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteLesson } from '../../../redux/lessons/operation';
function getColumns(onDelete) {
  return [
    {
      title: 'Студент',
      dataIndex: 'userName',
      key: 'userName',
      sorter: (a, b) => a.userName.localeCompare(b.userName),
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => {
        const d1 = new Date(a.dateTime);
        const d2 = new Date(b.dateTime);
        return d1 - d2;
      },
    },
    {
      title: 'Час',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '',
      dataIndex: '',
      key: 'delete',
      render: lesson => {
        return <Button>Переглянути</Button>;
      },
    },
    {
      title: '',
      dataIndex: '',
      key: 'delete',
      render: lesson => {
        return <Button onClick={() => onDelete(lesson._id)}>Видалити</Button>;
      },
    },
  ];
}

const LessonList = ({ lessons }) => {
  const dispatch = useDispatch();
  const handleDeleteLesson = id => {
    dispatch(deleteLesson(id));
    toast.success('Видалено');
  };
  return (
    <div>
      <Table dataSource={lessons} columns={getColumns(handleDeleteLesson)} />
    </div>
  );
};

export default LessonList;
