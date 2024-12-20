import axios from 'axios';
import { SERVER_URL } from '../helpers/constants';
const BASE_URL = SERVER_URL;

export const sendMessage = async message => {
  const res = await axios.post(`${BASE_URL}/telegram/message`, message);
  return res.data;
};
