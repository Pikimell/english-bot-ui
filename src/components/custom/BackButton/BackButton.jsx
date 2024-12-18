import { useNavigate } from 'react-router-dom';
import style from './BackButton.module.css';
import { Button } from 'antd';

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button onClick={handleGoBack} className={style.goBackButton}>
      {'<-'}
    </Button>
  );
};

export default BackButton;
