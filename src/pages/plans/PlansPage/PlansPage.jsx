import { Outlet } from 'react-router-dom';
import style from './PlansPage.module.css';
import BackButton from '../../../components/custom/BackButton/BackButton';
import { Flex } from 'antd';
import PlansNavigation from '../../../components/plans/PlansNavigation/PlansNavigation';

const PlansPage = () => {
  return (
    <div className={style.page + ' page'}>
      <Flex gap="5px" align="center">
        <BackButton />
        <PlansNavigation />
      </Flex>
      <Outlet />
    </div>
  );
};

export default PlansPage;
