import { useSelector } from 'react-redux';
import Calendar from '../../../components/schedule/Calendar/Calendar';

import { selectSchedule } from '../../../redux/lessons/selector';
import { isAdmin } from '../../../utils/initTelegram';
import { Button, Flex } from 'antd';
import { useModal } from '../../../hooks/useModal';
import BookModal from '../../../components/schedule/BookModal/BookModal';

const CalendarPage = () => {
  const schedule = useSelector(selectSchedule);
  const [state, open, close] = useModal();

  return (
    <Flex align="center" vertical>
      <Calendar data={schedule} />
      {isAdmin() && <Button onClick={open}>Зробити запис</Button>}
      {state && <BookModal close={close} />}
    </Flex>
  );
};

export default CalendarPage;
