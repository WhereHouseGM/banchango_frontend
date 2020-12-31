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
    if (
      localStorage.getItem('Login') === 'true' &&
      localStorage.getItem('type') === 'OWNER'
    ) {
      window.location.href = '/register';
    } else {
      alert('로그인을 먼저 해주세요.');
      window.location.href = '/login';
    }
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
              {JSON.parse(localStorage.getItem('Login')) === true &&
              localStorage.getItem('type') === 'OWNER' ? (
                <Item to="/" onClick={toLoginOrRegisterForm}>
                  창고 등록하기
                </Item>
              ) : null}
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
            {JSON.parse(localStorage.getItem('Login')) === true &&
            localStorage.getItem('type') === 'OWNER' ? (
              <Item to="/" onClick={toLoginOrRegisterForm}>
                창고 등록하기
              </Item>
            ) : null}
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
