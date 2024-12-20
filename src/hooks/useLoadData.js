import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isAdmin } from '../utils/initTelegram';
import { getAllUsers } from '../api/userService';
import { setUsers } from '../redux/users/slice';
import { setGroups } from '../redux/groups/slice';
import { getAllGroups, getAllGroupsSchedule } from '../api/groupService';
import { setSchedule } from '../redux/lessons/slice';
import { fetchLessons } from '../redux/lessons/operation';

export const useLoadData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAdmin()) {
      loadAdminData();
    }
    loadUserData();
  }, []);

  const loadAdminData = async () => {
    const usersP = getAllUsers();
    const groupsP = getAllGroups();
    const promises = [usersP, groupsP];
    dispatch(fetchLessons());
    const [users, groups] = await Promise.all(promises);
    dispatch(setUsers(users));
    dispatch(setGroups(groups));
  };

  const loadUserData = async () => {
    const schedule = await getAllGroupsSchedule();
    for (const day of Object.values(schedule)) {
      day.sort((a, b) => {
        return parseInt(a) - parseInt(b);
      });
    }

    dispatch(setSchedule(schedule));
  };
};
