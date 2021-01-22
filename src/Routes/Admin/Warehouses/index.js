import React from 'react';
import { SidebarWrapper, MenuItem } from '../Admin';

const AdminWarehouses = () => {
  return (
    <SidebarWrapper>
      <MenuItem to="/admin">창고</MenuItem>
      <MenuItem to="/admin/estimated">견적 문의</MenuItem>
    </SidebarWrapper>
  );
};

export default AdminWarehouses;
