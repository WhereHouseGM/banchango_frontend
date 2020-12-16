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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileNavContainer = styled.div`
  display: none;
  min-width: 360px;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    min-width: 360px;
    flex-direction: none;
    padding-left: 20px;
    top: 0;
    padding-right: 20px;
    position: fixed;
    align-items: flex-start;
    padding-top: 9px;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: saturate(200%) blur(10px);
    transition: all 0.3s ease;
    z-index: 100;
  }
`;

const NavItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0px 35px;
  width: 100%;
  height: 60px;
  box-align: center;
  align-items: center;
  box-flex: 0;
  flex-grow: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileNavItemWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
  box-pack: justify;
  justify-content: space-between;
  box-flex: 1;
  flex-grow: 0;
  flex-basis: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileTopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  box-flex: 0;
  flex-grow: 0;
  flex-basis: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileBottomWrapper = styled.div`
  flex-direction: row;
  margin: 0px;
  padding: 0px;
  box-pack: start;
  justify-content: flex-start;
  box-flex: 0;
  flex-grow: 0;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 0px 22px;
  padding: 0px;
  box-pack: justify;
  justify-content: space-between;
  box-align: center;
  align-items: center;
  box-flex: 0;
  flex-grow: 0;
  flex-basis: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
  box-flex: 0;
  flex-grow: 0;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0px 0px;
  padding: 0px;
  box-flex: 0;
  flex-grow: 0;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const LogoLink = styled(Link)`
  font-family: 'Jua', sans-serif;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.48;
  color: #333;
  &:hover {
    text-decoration: none;
  }
`;

const CenterItemContainer = styled.div`
  display: flex;
  flex-direction: none;
  margin: 0px;
  padding: 0px;
  box-pack: justify;
  justify-content: space-between;
  box-flex: 0;
  flex-grow: 0;
  flex-basis: 409px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Item = styled(Link)`
  height: 30px;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  line-height: 1.8;
  white-space: nowrap;
  letter-spacing: -0.84px;
  text-decoration: none;
  &:hover {
    color: #1c57b0;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    margin-right: 29px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  box-flex: 0;
  flex-grow: 0;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-flex: 0;
  flex-grow: 0;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Button = styled(Link)`
  white-space: nowrap;
  border-radius: 4px;
  margin: auto;
  outline: none;
  font-size: 18px;
  color: white;
  padding: 8px 20px;
  background-color: #3090f0;
  transition: 0.2s ease;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: white;
    text-decoration: none;
    background-color: #202cab;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem('Login')));

  const logout = () => {
    setLogin(false);
    localStorage.clear();
    alert('정상적으로 로그아웃 되었습니다.');
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

  const warningMessage = () => {
    message.warn('아직 준비중입니다.');
  };

  return (
    <>
      <NavContainer>
        <NavItemWrapper>
          <ItemWrapper>
            <LogoContainer>
              <LogoLink to="/">BANCHANGO</LogoLink>
            </LogoContainer>
            <CenterItemContainer>
              <Item to="/" onClick={toLoginOrRegisterForm}>
                창고 등록하기
              </Item>
              <Item to="/" onClick={warningMessage}>
                ABOUT US
              </Item>
              {login ? null : <Item to="/signup">회원 가입하기</Item>}
              <ButtonContainer>
                {login ? (
                  <Button to="/" onClick={logout}>
                    로그아웃
                  </Button>
                ) : (
                  <Button to="/login">로그인</Button>
                )}
              </ButtonContainer>
            </CenterItemContainer>
          </ItemWrapper>
        </NavItemWrapper>
      </NavContainer>
      <MobileNavContainer>
        <MobileNavItemWrapper>
          <MobileTopWrapper>
            <MobileTopContainer>
              <MobileLogoContainer>
                <LogoLink to="/">BANCHANGO</LogoLink>
              </MobileLogoContainer>
              <MobileButtonContainer>
                {login ? (
                  <Button to="/" onClick={logout}>
                    로그아웃
                  </Button>
                ) : (
                  <Button to="/login">로그인</Button>
                )}
              </MobileButtonContainer>
            </MobileTopContainer>
          </MobileTopWrapper>
          <MobileBottomWrapper>
            <Item to="/" onClick={toLoginOrRegisterForm}>
              창고 등록하기
            </Item>
            <Item to="/" onClick={warningMessage}>
              ABOUT US
            </Item>
            {login ? null : <Item to="/signup">회원 가입하기</Item>}
          </MobileBottomWrapper>
        </MobileNavItemWrapper>
      </MobileNavContainer>
    </>
  );
};

export default withRouter(Navbar);
