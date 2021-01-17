import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  min-height: 90vh;
  position: relative;
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const LeftBanner = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  background-color: #1e56a0;
  width: 270px;
  position: absolute;
  height: 100%;
  color: white;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const BannerTextEnabledBox = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 30px auto;
  &:hover {
    cursor: pointer;
  }
`;
export const BannerTextDisabledBox = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 30px auto;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;
export const MobileUpperMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  position: sticky;
  top: 45px;
  z-index: 50;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.05);
  @media (min-width: 769px) {
    display: none;
  }
`;
export const MobileUpperMenuButton = styled.div`
  width: 50%;
  padding: 15px 0;
  text-align: center;
  background-color: ${(props) => (props.isIn ? '#1e56a0' : 'white')};
  color: ${(props) => (props.isIn ? 'white' : 'black')};
`;

export const UserInfoContainer = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  background-color: white;
  width: 90%;
  max-width: 710px;
  padding: 40px 20px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
export const HelloTitleText = styled.h1`
  color: #5ea0ff;
  text-align: center;
  font-weight: bold;
  font-size: 35px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const InfoTitleText = styled.h3`
  margin-top: 30px;
  font-size: 25px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 15px;
    font-weight: normal;
  }
`;
export const InfoBox = styled.input`
  width: 95%;
  max-width: 650px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 10px;
  padding-left: 10px;
  margin-left: 15px;
  &:focus {
    outline: none;
    border-bottom: 2px solid black;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  max-width: 600px;
  margin-top: 48.5px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    flex-wrap: wrap;
  }
`;

export const ChangePWButton = styled.div`
  border-radius: 10px 10px 10px 10px;
  border: 1px solid #1e56a0;
  width: 275px;
  color: #5ea0ff;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin: 20px 0;
    width: 100%;
  }
`;

export const ConfirmButton = styled.div`
  margin-left: 30px;
  border-radius: 10px;
  border: 1px solid #1e56a0;
  color: white;
  width: 275px;
  background-color: #1e56a0;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;
export const WithdrawalLabel = styled.div`
  color: #979696;
  text-align: center;
  margin: 25px 0 25px -8px;
  &:hover {
    cursor: pointer;
  }
`;
