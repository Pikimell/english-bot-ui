import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useLoadData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //load common data
  }, []);
};
