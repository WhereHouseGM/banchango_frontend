import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { message } from 'antd';

const Container = styled.nav`
  background-color: rgba(255, 255, 255, 0.8);
  height: 60px;
  width: 100%;
  top: 0;
  display: flex;
  position: fixed;
  align-items: center;
  font-size: 1.2em;
  transition: all 0.3s ease;
  z-index: 100;
  backdrop-filter: saturate(200%) blur(10px);
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

const LogoLink = styled(Link)`
  font-family: 'Jua', sans-serif;
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  &:hover {
    text-decoration: none;
  }
  @media screen and (max-width: 960px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
  }
`;

const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8em;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

const NavMenuActive = styled.ul`
  background: #242222;
  left: 0;
  opacity: 1;
  transition: all 0.5s ease;
  z-index: 1;
`;

const FaFirstDraft = styled.i`
  margin-left: 0.5rem;
  font-size: 1.6rem;
`;

const FaTimes = styled.i`
  color: #fff;
  font-size: 2rem;
`;

const FaBars = styled.i`
  color: #fff;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 60px;
`;

const NavLinks = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: #1888ff;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      background-color: #1888ff;
      border-radius: 0;
    }
  }
`;

const NavLinksMobile = styled(Link)`
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
    color: #fff;
    font-size: 1.5rem;
    &:hover {
      background: #fff;
      color: #1888ff;
      transition: 250ms;
    }
  }
`;

const NavbarComponent = () => {
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem('Login')));
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

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

  const closeMobileMenu = () => setClick(false);

  return (
    <Container>
      <LogoLink to="/" onClick={closeMobileMenu}>
        BANCHANGO
        <i class="fab fa-firstdraft" />
      </LogoLink>
      <MenuIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      {click ? (
        <NavMenuActive>
          <NavItem>
            <NavLinks to="/" onClick={closeMobileMenu}>
              HOME
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/" onClick={closeMobileMenu}>
              PRODUCTS
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/" onClick={closeMobileMenu}>
              CONTACT US
            </NavLinks>
          </NavItem>
          <li>
            <NavLinksMobile to="/" onClick={closeMobileMenu}>
              SIGN UP
            </NavLinksMobile>
          </li>
        </NavMenuActive>
      ) : (
        <NavMenu>
          <NavItem>
            <NavLinks to="/" onClick={closeMobileMenu}>
              HOME
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/" onClick={closeMobileMenu}>
              PRODUCTS
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/" onClick={closeMobileMenu}>
              CONTACT US
            </NavLinks>
          </NavItem>
          <li>
            <NavLinksMobile to="/" onClick={closeMobileMenu}>
              SIGN UP
            </NavLinksMobile>
          </li>
        </NavMenu>
      )}
    </Container>
  );
};

export default withRouter(NavbarComponent);
