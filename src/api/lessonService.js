import axios from 'axios';
import { SERVER_URL } from '../helpers/constants';
const BASE_URL = SERVER_URL;

export const createLesson = async lessonData => {
  const res = await axios.post(`${BASE_URL}/lessons`, lessonData);
  return res.data;
};

export const getLessonById = async id => {
  const res = await axios.get(`${BASE_URL}/lessons/${id}`);
  return res.data;
};

export const getAllLessons = async params => {
  const res = await axios.get(`${BASE_URL}/lessons`, { params });
  return res.data;
};

export const getLessonsByGroup = async groupId => {
  const res = await axios.get(`${BASE_URL}/lessons/groups/${groupId}`);
  return res.data;
};

export const getLessonsByUser = async userId => {
  const res = await axios.get(`${BASE_URL}/lessons/users/${userId}`);
  return res.data;
};

export const updateLessonById = async (id, lessonData) => {
  const res = await axios.put(`${BASE_URL}/lessons/${id}`, lessonData);
  return res.data;
};

export const deleteLessonById = async id => {
  const res = await axios.delete(`${BASE_URL}/lessons/${id}`);
  return res.data;
};

export const markAttendance = async (id, attendanceData) => {
  const res = await axios.patch(
    `${BASE_URL}/lessons/${id}/attendance`,
    attendanceData,
  );
  return res.data;
};
