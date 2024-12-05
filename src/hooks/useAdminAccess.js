import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAdmin } from '../utils/initTelegram';

export const useAdminAccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hasAccess = isAdmin();
    console.log(hasAccess);

    if (!hasAccess) {
      navigate('/');
    }
  }, [navigate]);
};
