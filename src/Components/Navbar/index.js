import React, { useState, useEffect } from 'react';
import {
  Nav,
  NavLink,
  NavLogoText,
  Bars,
  NavMenu,
  NavOpen,
  NavLinkOpen,
  NavMarginTop,
} from './Navbar';
import { useHistory } from 'react-router-dom';

import Logo from '../../assets/icons/LOGO2.png';

const Navbar = () => {
  const history = useHistory();
  const [loginInfo, setLoginInfo] = useState({});
  const [navClicked, setNavClicked] = useState(false);
  useEffect(() => {
    let info = {
      logined: JSON.parse(localStorage.getItem('Login')),
      name: localStorage.getItem('Name'),
    };
    setLoginInfo(info);
  }, []);
  const logout = () => {
    setLoginInfo({
      logined: false,
    });
    localStorage.clear();
    history.push('/');
  };
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} alt="반창고 로고" style={{ height: '30px' }} />
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
          {loginInfo.logined ? (
            <>
              <NavLinkOpen to="/" onClick={logout}>
                로그아웃
              </NavLinkOpen>
              <NavLinkOpen to="/mypage">{loginInfo.name} 님</NavLinkOpen>
            </>
          ) : (
            <>
              <NavLinkOpen to="/signup">회원가입</NavLinkOpen>
              <NavLinkOpen to="/login" style={{ color: 'white' }}>
                로그인
              </NavLinkOpen>
            </>
          )}
        </NavOpen>
        <NavMenu>
          <NavLink to="/team">팀소개</NavLink>
          {loginInfo.logined ? (
            <>
              <NavLink to="/" style={{ color: 'black' }} onClick={logout}>
                로그아웃
              </NavLink>
              <NavLink style={{ color: 'black' }} to="/mypage">
                {loginInfo.name} 님
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/signup">회원가입</NavLink>
              <NavLink to="/login" style={{ color: 'black' }}>
                로그인
              </NavLink>
            </>
          )}
        </NavMenu>
      </Nav>
      <NavMarginTop />
    </>
  );
};

export default Navbar;
