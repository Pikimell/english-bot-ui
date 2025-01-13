import axios from 'axios';
import { SERVER_URL } from '../helpers/constants';
const BASE_URL = SERVER_URL;

export const createPlan = async planData => {
  const res = await axios.post(`${BASE_URL}/plan`, planData);
  return res.data;
};

export const getPlanById = async id => {
  const res = await axios.get(`${BASE_URL}/plan/${id}`);
  return res.data;
};
export const getAllPlans = async () => {
  const res = await axios.get(`${BASE_URL}/plan`);
  return res.data;
};

export const updatePlanById = async (id, planData) => {
  const res = await axios.put(`${BASE_URL}/plan/${id}`, planData);
  return res.data;
};

export const deletePlanById = async id => {
  const res = await axios.delete(`${BASE_URL}/plan/${id}`);
  return res.data;
};
