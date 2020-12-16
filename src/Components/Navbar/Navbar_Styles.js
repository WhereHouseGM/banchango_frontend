import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
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

export const MobileNavContainer = styled.div`
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

export const NavItemWrapper = styled.div`
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

export const MobileNavItemWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const ItemWrapper = styled.div`
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

export const MobileTopWrapper = styled.div`
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

export const MobileBottomWrapper = styled.div`
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

export const MobileTopContainer = styled.div`
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

export const LogoContainer = styled.div`
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

export const MobileLogoContainer = styled.div`
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

export const LogoLink = styled(Link)`
  font-family: 'Jua', sans-serif;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.48;
  color: #333;
  &:hover {
    text-decoration: none;
  }
`;

export const CenterItemContainer = styled.div`
  display: flex;
  flex-direction: none;
  margin: 0px;
  padding: 0px;
  box-pack: justify;
  justify-content: space-between;
  box-flex: 0;
  flex-grow: 0;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const Item = styled(Link)`
  height: 30px;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  line-height: 1.8;
  white-space: nowrap;
  letter-spacing: -0.84px;
  text-decoration: none;
  margin-right: 30px;
  &:hover {
    color: #1c57b0;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    margin-right: 29px;
  }
`;

export const ButtonContainer = styled.div`
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

export const MobileButtonContainer = styled.div`
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

export const Button = styled(Link)`
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
