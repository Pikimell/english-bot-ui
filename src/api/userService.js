import axios from 'axios';
import { SERVER_URL } from '../helpers/constants';
const BASE_URL = SERVER_URL;

export const getUser = async id => {
  const res = await axios.get(`${BASE_URL}/users/${id}`);
  return res.data;
};

export const createUser = async userData => {
  const res = await axios.post(`${BASE_URL}/users`, userData);
  return res.data;
};

export const updateUser = async (id, userData) => {
  const res = await axios.put(`${BASE_URL}/users/${id}`, userData);
  return res.data;
};

export const updateUserLevel = async (id, level) => {
  const res = await axios.put(`${BASE_URL}/users/${id}/${level}`);
  return res.data;
};

export const deleteUser = async id => {
  const res = await axios.delete(`${BASE_URL}/users/${id}`);
  return res.data;
};

export const getAllUsers = async params => {
  const res = await axios.get(`${BASE_URL}/users`, { params });
  return res.data;
};

export const updateBalance = async (id, balanceData) => {
  const res = await axios.patch(`${BASE_URL}/users/${id}/balance`, balanceData);
  return res.data;
};

export const addTestResult = async (id, testResultData) => {
  const res = await axios.post(
    `${BASE_URL}/users/${id}/test-result`,
    testResultData,
  );
  return res.data;
};

export const getUsersWithLowBalance = async () => {
  const res = await axios.get(`${BASE_URL}/users/low-balance`);
  return res.data;
};

export const assignToGroup = async (id, groupData) => {
  const res = await axios.patch(`${BASE_URL}/users/${id}/group`, groupData);
  return res.data;
};

export const removeFromGroup = async id => {
  const res = await axios.delete(`${BASE_URL}/users/${id}/group`);
  return res.data;
};
