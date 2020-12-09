import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';
import styled from 'styled-components';
import { message } from 'antd';

const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 30px;
  position: fixed;
  top: 0;
  display: flex;
  background-color: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  transition: all 0.3s ease;
  z-index: 100;
  backdrop-filter: saturate(200%) blur(10px);
`;

const NavLeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

const LogoLink = styled(Link)`
  font-family: 'Jua', sans-serif;
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  &:hover {
    text-decoration: none;
  }
`;

const LoginButton = styled(Link)`
  white-space: nowrap;
  padding: 8px 20px;
  border-radius: 4px;
  margin: auto;
  outline: none;
  font-size: 18px;
  color: white;
  font-weight: bold;
  background-color: #3090f0;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    color: white;
    text-decoration: none;
    background-color: #202cab;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: center;
`;

const NavLink = styled(Link)`
  color: black;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  text-decoration: none;
  transition: 0.2s ease;
  margin-right: 4px;
  &:hover {
    color: #1c57b0;
    text-decoration: none;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    width: 100%;
    height: 100%;
    padding-top: 15px;
    margin-top: auto;
    margin-bottom: auto;
    color: white;
    display: table;
    &:hover {
      background-color: #1888ff;
      border-radius: 0;
    }
  }
`;

const NavLinkMobile = styled(Link)`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    text-align: center;
    padding: 1.5rem;
    margin: 2rem auto;
    border-radius: 4px;
    width: 80%;
    background: #1888ff;
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    &:hover {
      background: black;
      text-decoration: none;
      color: #1888ff;
      transition: 250ms;
    }
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);

  const [login, setLogin] = useState(JSON.parse(localStorage.getItem('Login')));

  const logout = () => {
    setLogin(false);
    localStorage.setItem('Login', false);
    localStorage.removeItem('AccessToken');
    localStorage.removeItem('RefreshToken');
    alert('로그아웃 되었습니다.');
    window.location.replace('/');
  };

  const toLoginOrRegisterForm = () => {
    if (localStorage.getItem('Login') === 'true') {
      openRegisterForm();
    } else {
      alert('로그인을 먼저 해주세요.');
      window.location.href = '/login';
    }
  };

  const BodyForCognitoForm = {
    UserInfo: {
      Email: localStorage.getItem('Email'),
      TelephoneNumber: localStorage.getItem('TelephoneNumber'),
      PhoneNumber: localStorage.getItem('PhoneNumber'),
      Name: localStorage.getItem('Name'),
    },
  };

  const openRegisterForm = () => {
    window.open(
      'https://www.cognitoforms.com/WhereHouseGM/%EB%B0%98%EC%B0%BD%EA%B3%A0%ED%94%8C%EB%9E%AB%ED%8F%BC%EC%B0%BD%EA%B3%A0%EB%93%B1%EB%A1%9D%ED%95%98%EA%B8%B0?entry=' +
        encodeURIComponent(JSON.stringify(BodyForCognitoForm)),
    );
  };

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const warningMessage = () => {
    setClick(false);
    message.warn('아직 준비중입니다.');
  };

  return (
    <>
      <NavContainer>
        <NavLeftContainer>
          <LogoLink to="/">BANCHANGO</LogoLink>
        </NavLeftContainer>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <NavItem>
            <NavLink to="/" onClick={toLoginOrRegisterForm}>
              창고 등록하기
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/" onClick={warningMessage}>
              ABOUT US
            </NavLink>
          </NavItem>
          {login ? (
            <>
              <NavLinkMobile to="/" onClick={logout}>
                로그아웃
              </NavLinkMobile>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink to="/signup" onClick={closeMobileMenu}>
                  회원 가입
                </NavLink>
              </NavItem>
              <li>
                <NavLinkMobile to="/login" onClick={closeMobileMenu}>
                  로그인
                </NavLinkMobile>
              </li>
            </>
          )}
        </ul>
        {login ? (
          <LoginButton to="/" onClick={logout}>
            로그아웃
          </LoginButton>
        ) : (
          <LoginButton to="/login">로그인</LoginButton>
        )}
      </NavContainer>
    </>
  );
};

export default withRouter(Navbar);
