import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
export const NavMarginTop = styled.div`
  height: 45px;
  width: 100%;
`;
export const Nav = styled.nav`
  background: white;
  font-family: 'notosans-Regular', sans-serif;
  height: 45px;
  display: flex;
  justify-content: space-between;
  padding: 0 calc((100vw - 1000px) / 2);
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.05);
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 999;
`;
export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  padding: 0 1rem;
  cursor: pointer;
`;
export const NavLogoText = styled.div`
  color: #0079c0;
  margin-left: 8px;
  font-size: 18px;
`;
export const NavOpen = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 45px;
  background: rgba(0, 0, 0, 80%);
  z-index: 999;
  opacity: 1;
  transition: all 0.2s ease;
`;
export const NavLinkOpen = styled(Link)`
  color: white;
  font-size: 25px;
  text-align: center;
  padding: 2.2rem;
  cursor: pointer;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 1023px) {
    color: black;
    display: block;
    margin: auto 13.1px auto 0;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
