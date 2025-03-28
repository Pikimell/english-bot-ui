import axios from 'axios';
import { SERVER_URL } from '../helpers/constants';
const BASE_URL = SERVER_URL;

// Create a new reminder
export const addReminder = async ({ groupId, date, day, time }) => {
  const res = await axios.post(`${BASE_URL}/reminders`, {
    groupId,
    date,
    day,
    time,
  });
  return res.data;
};

// Remove a specific reminder by ID
export const removeReminder = async id => {
  const res = await axios.delete(`${BASE_URL}/reminders/${id}`);
  return res.data;
};

// Remove all reminders for a specific group
export const removeGroupReminder = async groupId => {
  const res = await axios.delete(`${BASE_URL}/reminders/group/${groupId}`);
  return res.data;
};

// Get all reminders with optional filters
export const getAllReminders = async (params = {}) => {
  const res = await axios.get(`${BASE_URL}/reminders`, { params });
  console.log(res.data);

  return res.data;
};
