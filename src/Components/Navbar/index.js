import React, { useState, useEffect } from 'react';
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
  useEffect(() => {
    let info = {
      logined: JSON.parse(localStorage.getItem('Login')),
      name: localStorage.getItem('Name'),
    };
    setLoginInfo(info);
  }, []);
  const [loginInfo, setLoginInfo] = useState({});
  const [navClicked, setNavClicked] = useState(false);
  return (
    // TODO:로그아웃 버튼 상황따라 다르게 ㅇㅇ
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} alt="반창고 로고" style={{ height: '33px' }} />
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
          <NavLinkOpen to="/team">팀소개</NavLinkOpen>
          <NavLinkOpen to="/ServiceOverview">
            {loginInfo.logined ? '로그아웃' : '로그인'}
          </NavLinkOpen>
          <NavLinkOpen to="/mypage">{loginInfo.name} 님</NavLinkOpen>
        </NavOpen>
        <NavMenu>
          <NavLink to="/team">팀소개</NavLink>
          <NavLink to="/ServiceOverview">로그아웃</NavLink>
          <NavLink style={{ color: 'black' }} to="/mypage">
            {loginInfo.name} 님
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
