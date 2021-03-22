import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  font-family: 'paybooc-Medium', sans-serif;
  text-align: center;
  line-height: 1.3;
`;

export const FirstContainer = styled.div`
  background-color: #1e56a0;
  padding: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const FirstLeftText = styled.div`
  width: 20%;
  min-width: 165.1px;
  font-weight: bold;
  font-size: 45px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 25px;
    min-width: 110px;
    white-space: pre-wrap;
  }
`;

export const FirstRightText = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  flex: 1;
  max-width: 615px;
  font-size: 14px;
  line-height: 1.5;
  white-space: normal;
  @media (max-width: 768px) {
    white-space: pre-wrap;
    font-size: 11px;
  }
`;

export const SecondWrapper = styled.div`
  width: 95%;
  max-width: 1024px;
  padding: 70px 0;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

export const SecondLeftBox = styled.div`
  width: 28%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.5;
  font-size: 28px;
  font-weight: bold;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    height: auto;
    padding: 20px 0;
  }
`;

export const SecondLeftFirst = styled.div`
  color: #1e56a0;
`;

export const SecondLeftSecond = styled.div`
  color: black;
`;

export const SecondLeftThird = styled.div`
  color: #1e56a0;
`;

export const SecondRightBox = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  width: 70%;
  height: 200px;
  padding: 50px 0px 20px 40px;
  font-size: 18px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileSecondRightBox = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 12px;
    text-align: center;
    height: auto;
    width: 100%;
    padding: 0 20px 20px 20px;
  }
`;

export const ThirdContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

export const ThirdBox = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ThirdBoxText = styled.div`
  color: #1e56a0;
  margin: 20px 0;
  font-weight: bold;
  font-size: 25px;
`;

export const ThirdBoxImg = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const FourthContainer = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FourthLeft = styled.div`
  width: 38%;
  height: 200px;
  color: #1e56a0;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 20px 0;
  }
`;

export const FourthLeftLine = styled.div`
  width: 25px;
  height: 1px;
  margin-bottom: 10px;
  border-bottom: 3px solid #1e56a0;
`;

export const FourthLeftTitle = styled.div`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
`;

export const FourthRight = styled.div`
  width: 62%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FourthRightFloor = styled.div`
  width: 100%;
  display: flex;
  color: #1e56a0;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const FourthRightCard = styled.div`
  width: 20%;
  margin: 20px;
`;

export const FourthRightImg = styled.img`
  width: 100%;
`;

export const FourthRightText = styled.div`
  font-size: 16px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileFourthRightText = styled.div`
  display: none;
  @media (max-width: 768px) {
    font-size: 14px;
    display: block;
    color: black;
  }
`;

export const MobileFourthRightSubText = styled.div`
  font-size: 12px;
  color: #1e56a0;
`;

export const BottomMapContainer = styled.div`
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const BottomMapDescWrapper = styled.div`
  width: 300px;
  align-self: flex-start;
  text-align: left;
  font-size: 20px;
`;

export const BottomMapDescTitle = styled.div`
  font-weight: bold;
`;

export const BottomMapDescText = styled.div``;

export const BottomMapDescPhoneNumber = styled.div`
  margin: 15px;
`;
