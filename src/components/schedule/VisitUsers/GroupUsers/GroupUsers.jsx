import { useSelector } from 'react-redux';
import style from './GroupUsers.module.css';
import { useMemo, useState } from 'react';
import { selectUsers } from '../../../../redux/users/selector';
import { Button, Checkbox } from 'antd';
import { deleteLesson } from '../../../../api/lessonService';
import toast from 'react-hot-toast';

const GroupUsers = ({ groupId }) => {
  const users = useSelector(selectUsers);

  const filterUsers = useMemo(() => {
    return users.filter(el => el.groupId === groupId);
  }, [users, groupId]);

  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleCheckboxChange = userId => {
    setSelectedUsers(prevSelected =>
      prevSelected.includes(userId)
        ? prevSelected.filter(id => id !== userId)
        : [...prevSelected, userId],
    );
  };

  const handleRemoveLessons = async () => {
    try {
      await Promise.all(selectedUsers.map(userId => deleteLesson(userId)));

      setSelectedUsers([]);
      toast.success('Уроки успішно видалено для вибраних користувачів');
    } catch (error) {
      setSelectedUsers([]);
      toast.error('Помилка при видаленні уроків');
    }
  };

  return (
    <div className={style.userList}>
      {filterUsers.map(user => (
        <div key={user._id} className={style.userBlock}>
          <p>• {user.contactInfo.first_name}</p>
          <Checkbox
            checked={selectedUsers.includes(user._id)}
            onChange={() => handleCheckboxChange(user._id)}
          />
        </div>
      ))}

      <Button
        style={{ marginTop: '10px' }}
        onClick={handleRemoveLessons}
        disabled={selectedUsers.length === 0}
      >
        Відмітити відсутність
      </Button>
    </div>
  );
};

export default GroupUsers;
