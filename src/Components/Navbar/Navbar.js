import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { message } from 'antd';
import {
  NavContainer,
  MobileNavContainer,
  NavItemWrapper,
  MobileNavItemWrapper,
  ItemWrapper,
  MobileTopWrapper,
  MobileBottomWrapper,
  MobileTopContainer,
  LogoContainer,
  MobileLogoContainer,
  LogoLink,
  CenterItemContainer,
  Item,
  ButtonContainer,
  MobileButtonContainer,
  Button,
} from './Navbar_Styles';

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
