import { useDispatch } from 'react-redux';
import { setUsers } from '../redux/users/slice';
import { setGroups } from '../redux/groups/slice';
import { getAllGroups, getAllGroupsSchedule } from '../api/groupService';
import { setSchedule } from '../redux/lessons/slice';
import { getAllUsers } from '../api/userService';

export const useUpdateData = () => {
  const dispatch = useDispatch();

  const getUsers = async () => {
    const users = await getAllUsers();
    dispatch(setUsers(users));
  };
  const getGroups = async () => {
    const groups = await getAllGroups();
    dispatch(setGroups(groups));
  };
  const getSchedule = async () => {
    const schedule = await getAllGroupsSchedule();
    dispatch(setSchedule(schedule));
  };

  return { getUsers, getGroups, getSchedule };
};
