import AdminMenu from '../../../components/admin/AdminMenu/AdminMenu';
import { useAdminAccess } from '../../../hooks/useAdminAccess';
import style from './AdminPage.module.css';
import { useState } from 'react';

const AdminPage = ({}) => {
  useAdminAccess();
  return (
    <div className={style.page + ' page'}>
      <AdminMenu />
    </div>
  );
};

export default AdminPage;
