import { useParams } from 'react-router-dom';
import style from './DetailsPage.module.css';
import { useEffect, useState } from 'react';
import Loading from '../../../components/custom/Loading/Loading';
import { getGroupById } from '../../../api/groupService';
import { assignToGroup, getAllUsers } from '../../../api/userService';
import { Button, Flex, List, Modal } from 'antd';
import AddUserModal from '../../../components/groups/AddUserModal/AddUserModal';
import { useModal } from '../../../hooks/useModal';

const DetailsPage = ({}) => {
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

  const handleDelete = id => {
    assignToGroup(id, { groupId: 'null' }).then(() => {
      setUsers(users.filter(u => u.userId !== id));
    });
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
            Учнів: <span>{group.students}</span>
          </p>
        </Flex>

        <p>
          Вартість: <span>{group.price}грн</span>
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
        <Button>Змінити групу</Button>
        <Button onClick={openModal}>Додати учнів</Button>
      </Flex>

      {opened && (
        <Modal
          open={opened}
          onCancel={closeModal}
          onClose={closeModal}
          footer={null}
        >
          <AddUserModal onClose={closeModal} groupId={id} />
        </Modal>
      )}
    </Flex>
  );
};

export default DetailsPage;
