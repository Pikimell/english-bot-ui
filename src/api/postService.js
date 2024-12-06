import axios from 'axios';
import { SERVER_URL } from '../helpers/constants';
const BASE_URL = SERVER_URL;

export const createPost = async ({
  title,
  body,
  topic,
  hashtags = '',
  isPosted = false,
}) => {
  const postData = {
    title,
    body,
    topic,
    hashtags: hashtags.split(' '),
    isPosted,
  };
  const res = await axios.post(`${BASE_URL}/posts`, postData);
  return res.data;
};

export const getPostById = async id => {
  const res = await axios.get(`${BASE_URL}/posts/${id}`);
  return res.data;
};

export const getAllPosts = async () => {
  const res = await axios.get(`${BASE_URL}/posts`);
  return res.data;
};

export const getPostsByTopic = async topicData => {
  const res = await axios.get(`${BASE_URL}/posts/topic`, { params: topicData });
  return res.data;
};

export const updatePostById = async (id, postData) => {
  const res = await axios.put(`${BASE_URL}/posts/${id}`, postData);
  return res.data;
};

export const deletePostById = async id => {
  const res = await axios.delete(`${BASE_URL}/posts/${id}`);
  return res.data;
};
