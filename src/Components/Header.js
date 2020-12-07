import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  font-size: 14px;
`;

const UserButton = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  font-weight: bold;
  color: #333;
  transition: 0.2s ease;
  &:hover {
    color: #1c57b0;
  }
`;

const RegisterLink = styled.button`
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  height: 30px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  border-radius: 5px;
  transition: all 0.2s ease;
  background-color: white;
  color: #333;
  &:hover {
    background-color: #1c57b0;
    border-color: #1c57b0;
    color: #fff;
    cursor: pointer;
  }
`;

const warningMessage = () => {
  message.warn('아직 준비중입니다.');
};

const HeaderComponent = () => {
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

  return (
    <NavContainer>
      <NavLeftContainer>
        <LogoLink to="/">BANCHANGO</LogoLink>
      </NavLeftContainer>
      <HeaderRight>
        <RegisterLink onClick={toLoginOrRegisterForm}>
          창고 등록하기
        </RegisterLink>
        <UserButton to="/" onClick={warningMessage}>
          ABOUT US
        </UserButton>
        {login ? null : <UserButton to="/signup">회원가입</UserButton>}
        {login ? (
          <UserButton to="/" onClick={logout}>
            로그아웃
          </UserButton>
        ) : (
          <UserButton to="/login">로그인</UserButton>
        )}
      </HeaderRight>
    </NavContainer>
  );
};

export default withRouter(HeaderComponent);
