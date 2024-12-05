import axios from 'axios';
import { SERVER_URL } from '../helpers/constants';
const BASE_URL = SERVER_URL;
export const createPayment = async paymentData => {
  const res = await axios.post(`${BASE_URL}/payments`, paymentData);
  return res.data;
};

export const getPaymentById = async id => {
  const res = await axios.get(`${BASE_URL}/payments/${id}`);
  return res.data;
};

export const getAllPayments = async () => {
  const res = await axios.get(`${BASE_URL}/payments`);
  return res.data;
};

export const updatePaymentStatus = async (id, statusData) => {
  const res = await axios.patch(
    `${BASE_URL}/payments/${id}/status`,
    statusData,
  );
  return res.data;
};

export const deletePaymentById = async id => {
  const res = await axios.delete(`${BASE_URL}/payments/${id}`);
  return res.data;
};
