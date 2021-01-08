import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  height: auto;
  display: flex;
  @media screen and (max-width: 768px) {
    margin-top: 105px;
  }
`;
export const LeftBanner = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  background-color: #1e56a0;
  width: 270px;
  color: white;
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

export const UserInfoContainer = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  background-color: white;
  width: 710px;
  padding: 40px 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;
export const HelloTitleText = styled.h1`
  color: #5ea0ff;
  text-align: center;
  font-weight: bold;
  font-size: 35px;
`;
export const InfoTitleText = styled.h3`
  margin-top: 30px;
  font-size: 25px;
  font-weight: bold;
`;
export const InfoBox = styled.input`
  width: 650px;
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
  width: 600px;
  margin-top: 48.5px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

export const ChangePWButton = styled.div`
  border-radius: 10px 10px 10px 10px;
  border: 2px solid #5ea0ff;
  width: 275px;
  color: #5ea0ff;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const ConfirmButton = styled.div`
  margin-left: 30px;
  border-radius: 10px 10px 10px 10px;
  border: 2px solid #5ea0ff;
  color: white;
  width: 275px;
  background-color: #5ea0ff;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
