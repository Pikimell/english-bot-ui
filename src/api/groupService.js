import axios from 'axios';
import { SERVER_URL } from '../helpers/constants';
const BASE_URL = SERVER_URL;

export const createGroup = async groupData => {
  const res = await axios.post(`${BASE_URL}/groups`, groupData);
  return res.data;
};

export const getGroupById = async id => {
  const res = await axios.get(`${BASE_URL}/groups/${id}`);
  return res.data;
};

export const getAllGroups = async () => {
  const res = await axios.get(`${BASE_URL}/groups`);
  return res.data;
};

export const updateGroupById = async (id, groupData) => {
  const res = await axios.put(`${BASE_URL}/groups/${id}`, groupData);
  return res.data;
};

export const deleteGroupById = async id => {
  const res = await axios.delete(`${BASE_URL}/groups/${id}`);
  return res.data;
};

export const addStudentToGroup = async (id, studentData) => {
  const res = await axios.post(
    `${BASE_URL}/groups/${id}/students`,
    studentData,
  );
  return res.data;
};

export const removeStudentFromGroup = async id => {
  const res = await axios.delete(`${BASE_URL}/groups/${id}/students`);
  return res.data;
};
