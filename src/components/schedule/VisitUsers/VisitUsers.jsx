import GroupUsers from './GroupUsers/GroupUsers';
import style from './VisitUsers.module.css';
import { useState } from 'react';

const VisitUsers = ({ groups }) => {
  return (
    <div className={style.groupContainer}>
      {groups.map(group => {
        return (
          <div key={group._id} className={style.block}>
            <p className={style.title}>{group.description}</p>
            <GroupUsers groupId={group._id} />
          </div>
        );
      })}
    </div>
  );
};

export default VisitUsers;
