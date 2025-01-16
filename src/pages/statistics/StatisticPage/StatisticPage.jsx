import { Flex } from 'antd';
import style from './StatisticPage.module.css';
import BackButton from '../../../components/custom/BackButton/BackButton';
import StatisticChart from '../../../components/statistics/StatisticChart/StatisticChart';

const StatisticPage = () => {
  return (
    <div className={style.page + ' page'}>
      <Flex gap="10px" align="center">
        <BackButton />
        <h1>Статистика</h1>
      </Flex>

      <StatisticChart />
    </div>
  );
};

export default StatisticPage;
