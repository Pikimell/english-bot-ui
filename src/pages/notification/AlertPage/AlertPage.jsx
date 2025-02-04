import { useRef, useState } from 'react';
import style from './AlertPage.module.css';

import { sendMessage } from '../../../api/telegramService';

import { Button, Flex } from 'antd';
import TextArea from 'antd/es/input/TextArea';

import UserSelector from '../../../components/custom/UserSelector/UserSelector';
import toast from 'react-hot-toast';
import FormatMessage from '../../../components/notification/FormatMessage/FormatMessage';

const AlertPage = () => {
  const inputRef = useRef();
  const [user, setUser] = useState();
  const [messageText, setMessageText] = useState('');

  const handlerSubmit = () => {
    if (!messageText.trim()) {
      alert('Введіть текст повідомлення!');
      return;
    }
    if (!user || user === 'none') {
      alert('Оберіть користувача');
      return;
    }
    const message = {
      chatId: user,
      message: messageText,
      parse_mode: 'HTML',
    };
    sendMessage(message).then(() => {
      toast.success('Повідомлення надіслане');
    });

    setMessageText('');
    setUser('none');
  };

  const handleUserSelect = userId => {
    setUser(userId);
  };

  return (
    <Flex gap="10px" vertical align="center" style={{ width: '100%' }}>
      <UserSelector onChange={handleUserSelect} value={user} />
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

export default AlertPage;
