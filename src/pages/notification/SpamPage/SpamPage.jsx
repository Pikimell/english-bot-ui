import { useSelector } from 'react-redux';
import { useState } from 'react';
import style from './SpamPage.module.css';
import { selectUsers } from '../../../redux/users/selector';
import { sendMessage } from '../../../api/telegramService';
import { ADMINS } from '../../../helpers/constants';
import { Button, Flex } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Title from 'antd/es/typography/Title';
import toast from 'react-hot-toast';

const SpamPage = () => {
  const users = useSelector(selectUsers);
  const [messageText, setMessageText] = useState('');

  const handlerSubmit = () => {
    if (!messageText.trim()) {
      alert('Введіть текст повідомлення!');
      return;
    }
    //!======================================================
    // TODO Треба розкоментувати якщо хочеш відправити усім
    // TODO Розкоментувати тільки після того як буде протестовано
    for (const user of users) {
      const message = {
        chatId: user.userId,
        message: messageText,
        parse_mode: 'HTML',
      };
      sendMessage(message);
    }
    toast.success('Повідомлення надіслане');
    //!======================================================

    // const message = {
    //   chatId: ADMINS[0],
    //   message: messageText,
    //   parse_mode: 'HTML',
    // };
    // sendMessage(message);
    //!======================================================

    setMessageText('');
  };

  return (
    <Flex
      vertical
      gap="50px"
      align="stretch"
      style={{ padding: '20px', margin: '0 auto' }}
    >
      <Flex gap="5px" vertical align="stretch">
        <Title level={2} style={{ textAlign: 'center' }}>
          Відправити повідомлення
        </Title>
        <TextArea
          value={messageText}
          onChange={e => setMessageText(e.target.value)}
          placeholder="Введіть текст повідомлення"
          rows={4}
          style={{ marginBottom: '20px' }}
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

      {/* <Flex>
        <p>Останні надісланні</p>
      </Flex> */}
    </Flex>
  );
};

export default SpamPage;
