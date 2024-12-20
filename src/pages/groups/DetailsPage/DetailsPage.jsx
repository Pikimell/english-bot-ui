import { useNavigate, useParams } from 'react-router-dom';
import style from './DetailsPage.module.css';
import { useEffect, useState } from 'react';
import Loading from '../../../components/custom/Loading/Loading';
import {
  deleteGroupById,
  getGroupById,
  updateGroupById,
} from '../../../api/groupService';
import { assignToGroup, getAllUsers } from '../../../api/userService';
import { Button, Flex, List, Modal } from 'antd';
import AddUserModal from '../../../components/groups/AddUserModal/AddUserModal';
import { useModal } from '../../../hooks/useModal';

const DetailsPage = ({}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [group, setGroup] = useState({});
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [opened, openModal, closeModal] = useModal();

  useEffect(() => {
    getGroupById(id)
      .then(setGroup)
      .then(() => setIsLoading(false));
  }, [id]);

  useEffect(() => {
    if (opened) {
      return;
    }

    getAllUsers({ groupId: id })
      .then(setUsers)
      .then(() => setIsLoading(false));
  }, [id, opened]);

  const handleChangeGroup = () => {
    navigate(`/groups/create?id=${id}`);
  };
  const handleClickSchedule = () => {
    navigate(`/groups/${id}/schedule`);
  };
  const handleDelete = userId => {
    assignToGroup(userId, { groupId: 'null' }).then(() => {
      setUsers(users.filter(u => u.userId !== userId));
    });
    setGroup({ ...group, students: group.students - 1 });
    updateGroupById(id, { students: group.students - 1 });
  };

  const handleRemove = () => {
    deleteGroupById(group._id);
    navigate(`/groups/list`);
  };
  const handleHomeWork = () => {
    navigate(`/notification/homework?groupId=${group._id}`);
  };
  if (isLoading || !group) return <Loading />;

  return (
    <Flex className={style.container}>
      <Flex vertical gap="10px" className={style.info}>
        <Flex gap="20px">
          <p>
            Level: <span>{group.level}</span>
          </p>
          <p>
            Учнів: <span>{users.length}</span>
          </p>
        </Flex>

        <p>
          Вартість: <span>{group.price}грн</span>
        </p>
        <p>
          Прибуток: <span>{users.length * group.price}грн</span>
        </p>
        <p>
          Опис: <span>{group.description || 'Відсутній'}</span>
        </p>
      </Flex>
      <List
        className={style.students}
        dataSource={users}
        bordered={true}
        header="Список Учнів"
        renderItem={item => {
          const { contactInfo, userId } = item;
          const { first_name, username } = contactInfo;

          return (
            <List.Item>
              <Flex className={style.item}>
                <div>
                  @{username} - {first_name}
                </div>

                <Button onClick={() => handleDelete(userId)}>X</Button>
              </Flex>
            </List.Item>
          );
        }}
      />

      <Flex gap="10px" wrap className={style.controls}>
        <Button onClick={handleChangeGroup}>Змінити групу</Button>
        <Button onClick={handleClickSchedule}>Змінити Розклад</Button>
        <Button onClick={openModal}>Додати учнів</Button>
        <Button onClick={handleRemove}>Видалити групу</Button>
        <Button onClick={handleHomeWork}>Надіслати ДЗ</Button>
      </Flex>

      {opened && (
        <Modal
          open={opened}
          onCancel={closeModal}
          onClose={closeModal}
          footer={null}
        >
          <AddUserModal
            onClose={closeModal}
            groupId={id}
            students={group.students}
          />
        </Modal>
      )}
    </Flex>
  );
};

export default DetailsPage;
