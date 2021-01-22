import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(30, 86, 160);
  color: white;
  align-items: center;
  height: 100vh;
  padding: 30px;
  min-width: 250px;

  & > * {
    margin: 20px;
  }
`;

export const MenuItem = styled(Link)``;

export default function () {
  return (
    <SidebarWrapper>
      <MenuItem to="/warehouses">창고</MenuItem>
      <MenuItem to="/estimates">견적 문의</MenuItem>
    </SidebarWrapper>
  );
}
