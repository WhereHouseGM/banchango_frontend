import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  NavLogoText,
  Bars,
  NavMenu,
  NavOpen,
  NavLinkOpen,
} from './Navbar';

import Logo from '../../assets/icons/LOGO2.png';

const Navbar = () => {
  const [navClicked, setNavClicked] = useState(false);
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} alt="성현물류 로고" style={{ height: '33px' }} />
          <NavLogoText>반창고</NavLogoText>
        </NavLink>
        <Bars onClick={() => setNavClicked(!navClicked)} />
        <NavOpen
          style={
            navClicked
              ? { left: '0', opacity: '1' }
              : { left: '-100%', opacity: '0' }
          }
        >
          <NavLinkOpen to="/Team">팀소개</NavLinkOpen>
          <NavLinkOpen to="/ServiceOverview">로그아웃</NavLinkOpen>
          <NavLinkOpen to="/mypage">전정표 님</NavLinkOpen>
        </NavOpen>
        <NavMenu>
          <NavLink to="/Team">팀소개</NavLink>
          <NavLink to="/ServiceOverview">로그아웃</NavLink>
          <NavLink style={{ color: 'black' }} to="/mypage">
            전정표 님
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
