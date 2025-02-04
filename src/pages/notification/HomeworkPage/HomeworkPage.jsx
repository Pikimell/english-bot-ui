import { Button, Flex } from 'antd';
import style from './HomeworkPage.module.css';
import { useEffect, useRef, useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import GroupSelector from '../../../components/custom/GroupSelector/GroupSelector';
import { sendMessage } from '../../../api/telegramService';
import { getAllUsers } from '../../../api/userService';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import FormatMessage from '../../../components/notification/FormatMessage/FormatMessage';

const HomeworkPage = () => {
  const inputRef = useRef();
  const [params] = useSearchParams();
  const [group, setGroup] = useState();
  const [users, setUsers] = useState([]);
  const [messageText, setMessageText] = useState('');
  const groupId = params.get('groupId');
  useEffect(() => {
    if (groupId && groupId !== 'none') {
      setGroup(groupId);
    }
  }, [groupId]);

  useEffect(() => {
    if (group && group !== 'none') {
      getAllUsers({ groupId: group }).then(setUsers);
    }
  }, [group]);

  const handlerSubmit = () => {
    if (!messageText.trim()) {
      alert('Введіть текст повідомлення!');
      return;
    }
    if (!group || group === 'none') {
      alert('Оберіть користувача');
      return;
    }

    for (const user of users) {
      const message = {
        chatId: user.userId,
        message: messageText,
        parse_mode: 'HTML',
      };
      sendMessage(message).then(() => {
        toast.success('Повідомлення надіслане');
      });
    }

    setMessageText('');
    setUsers([]);
    setGroup('none');
  };

  const handleGroupSelect = groupId => {
    setGroup(groupId);
  };

  return (
    <Flex gap="20px" vertical align="center" style={{ width: '100%' }}>
      <GroupSelector onChange={handleGroupSelect} value={group} />
      <FormatMessage
        input={inputRef}
        value={messageText}
        onChange={setMessageText}
      />
      <TextArea
        value={messageText}
        onChange={e => setMessageText(e.target.value)}
        placeholder="Введіть текст повідомлення"
        rows={4}
        style={{ marginBottom: '20px' }}
        ref={inputRef}
      />
      {!!users.length && (
        <ul className={style.list}>
          <li>Учні:</li>
          {users.map(el => {
            return <li key={el._id}>- {el.contactInfo.first_name}</li>;
          })}
        </ul>
      )}
      <Button
        type="primary"
        block
        onClick={handlerSubmit}
        disabled={!messageText.trim()}
      >
        Відправити
      </Button>
    </Flex>
  );
};

export default HomeworkPage;
