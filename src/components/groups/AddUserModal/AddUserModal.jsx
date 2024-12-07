import { Button, Checkbox, Flex, List } from 'antd';
import { assignToGroup, getAllUsers } from '../../../api/userService';
import style from './AddUserModal.module.css';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AddUserModal = ({ groupId, onClose }) => {
  const [users, setUsers] = useState([]);
  const [selectList, setSelectList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllUsers({ groupId: 'null' })
      .then(setUsers)
      .then(() => setIsLoading(false));
  }, []);

  const handleClick = () => {
    const promises = [];
    for (const id of selectList) {
      promises.push(assignToGroup(id, { groupId }));
    }
    const result = Promise.all(promises);

    toast
      .promise(result, {
        loading: 'Зберігаємо...',
        success: 'Дані оновлено!',
        error: 'Щось пішло не так((',
      })
      .then(() => {
        onClose();
        setSelectList([]);
      });
  };

  const handleToggle = id => {
    const includes = selectList.includes(id);
    if (includes) {
      setSelectList(selectList.filter(i => i !== id));
    } else {
      setSelectList([...selectList, id]);
    }
  };
  return (
    <div className={style.modal}>
      <List
        className={style.students}
        dataSource={users}
        bordered={true}
        header="Список Учнів"
        loading={isLoading}
        renderItem={item => {
          const { contactInfo, userId } = item;
          const { first_name, username } = contactInfo;
          const isChecked = selectList.includes(userId);

          return (
            <List.Item>
              <Flex className={style.item}>
                <div>
                  @{username} - {first_name}
                </div>
                <Checkbox
                  checked={isChecked}
                  onChange={() => handleToggle(userId)}
                />
              </Flex>
            </List.Item>
          );
        }}
      />

      <Button onClick={handleClick}>Додати учнів</Button>
    </div>
  );
};

export default AddUserModal;
