import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import BackgroundImg from '../../assets/images/MainPage/Background.png';
import CircleImg from '../../assets/images/MainPage/Circle.png';
import LastImg from '../../assets/images/MainPage/Last.png';

import {
  SliderImgArr,
  CardImgArr,
  CompareImgArr,
  BtnContainer,
} from './MainPage';

const Container = styled.div`
  font-family: 'paybooc-Medium', sans-serif;
  width: 100%;
  text-align: center;
  line-height: 1.5;
`;
const FirstContainer = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  line-height: 1.7;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(56, 128, 146);
  color: white;
`;
const FirstUpperTitle = styled.div`
  font-weight: ${(props) => props.fontWeight || 'normal'};
  font-size: ${(props) => props.fontSize || '30px'};
`;
const FirstTitle = styled.div`
  margin-top: 10px;
  width: 90%;
  font-size: 22px;
  font-family: 'notosans-Regular', sans-serif;
  line-height: 1.8;
  white-space: pre-line;
  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 20px;
    white-space: normal;
  }
`;
const FirstButton = styled.div`
  margin-top: 30px;
  background-color: white;
  font-weight: bold;
  border-radius: 15px;
  color: #1e56a0;
  padding: 10px 40px;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
  }
`;
const SecondContainer = styled.div`
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SecondTitle = styled.div`
  width: 90%;
  font-size: 20px;
  @media (max-width: 1023px) {
    white-space: pre-wrap;
  }
`;
const SecondWrapper = styled.div`
  width: 60%;
  max-width: 864px;
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 1023px) {
    width: 90%;
  }
`;
const SecondWrapperButton = styled.div`
  width: 11%;
  min-width: 105px;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1023px) {
    width: 31%;
  }
`;
const SecondButton = styled.div`
  margin-top: 10px;
  padding: 15px 20px;
  color: white;
  background-color: #1e56a0;
  &:hover {
    cursor: pointer;
  }
`;

const ThirdContainer = styled.div`
  width: 100%;
  padding: 50px 0;
`;
const SliderBox = styled.div`
  width: 90%;
  display: flex;
  margin: -40px auto 0 auto;
  justify-content: space-between;
  align-items: center;
`;
const SliderWrapper = styled.div`
  width: 90%;
  max-width: 768px;
`;
const SliderButton = styled.div`
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const SliderSetting = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const QuickSystemBanner = styled.div`
  width: 100%;
  padding: 20px 0 60px 0;
  background-color: #1e56a0;
  border: solid 1px #707070;
  line-height: 1.6;
  color: white;
`;
const BannerTitle = styled.div`
  color: #15c7ab;
  font-size: 20px;
`;
const BannerTextBig = styled.div`
  font-weight: bold;
  font-size: 35px;
`;
const BannerTextSmall = styled.div`
  font-size: 15px;
`;
const FourthContainer = styled.div`
  background-color: rgba(160, 160, 160, 0.07);
  width: 100%;
`;
const FourthWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const FourthCard = styled.div`
  width: 46%;
  margin: 15px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const FourthCardImg = styled.img`
  width: 100%;
`;
const FifthContainer = styled.div`
  width: 100%;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FifthTitleWrapper = styled.div`
  color: white;
  background-color: #1e56a0;
  padding: 30px 0;
  width: 100%;
`;

const FifthTitleFirst = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  font-size: 26px;
  font-weight: normal;
`;
const FifthTitleSecond = styled.div`
  font-size: 54px;
  font-weight: bold;
  @media (max-width: 1023px) {
    font-size: 28px;
  }
`;
const FifthTitleThird = styled.div`
  margin-top: 10px;
  font-family: 'notosans-Regular', sans-serif;
  font-size: 18px;
  font-weight: normal;
  color: #15c7ab;
`;

const FifthWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  max-width: 768px;
  align-items: center;
  justify-content: space-between;
  margin-top: -25px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;
const FifthTempImg = styled.img`
  width: 45%;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    width: 60%;
  }
`;
const FifthTitle = styled.div`
  font-weight: bold;
  margin: 30px auto;
  padding: 10px 0;
  border-top: 1px solid #15c7ab;
  border-bottom: 1px solid #15c7ab;
  font-size: 40px;
  color: #15c7ab;
  @media (max-width: 1023px) {
    width: 80%;
    font-size: 30px;
    white-space: pre-wrap;
  }
`;
const FifthImageBox = styled.img`
  width: 90%;
  max-width: 800px;
  margin: 10px 0;
`;
const FifthDesc = styled.div`
  margin-top: 10px;
  margin-bottom: 150px;
  font-size: 20px;
  color: #1e56a0;
  @media (max-width: 1023px) {
    white-space: pre-wrap;
  }
`;
const FifthDescRed = styled.div`
  margin-top: 30px;
  font-weight: bold;
  font-size: 40px;
  color: red;
  margin-bottom: 100px;
  @media (max-width: 1023px) {
    margin-top: 15px;
    margin-bottom: 50px;
    font-size: 22px;
  }
`;
const LastGreyContainer = styled.div`
  padding: 20px 0;
  width: 100%;
  background-color: rgba(160, 160, 160, 0.07);
`;

const MainPage = () => {
  const [buttonClicked, setButtonClicked] = useState([]);
  const SliderRef = React.createRef();

  return (
    <Container>
      <FirstContainer>
        <FirstUpperTitle>온라인 셀러를 위한</FirstUpperTitle>
        <FirstUpperTitle fontWeight={'bold'}>
          인천 · 김포 물류 솔루션
        </FirstUpperTitle>
        <FirstTitle>
          온라인 셀러 특화, 보관부터 출고까지 전문가에게 맡겨보세요.{'\n'}인천
          물류대행 센터를 반창고에서 찾을 수 있습니다.
        </FirstTitle>
        <FirstButton
          onClick={() => {
            window.location.href = '/category';
          }}
        >
          바로 시작하기
        </FirstButton>
      </FirstContainer>
      <SecondContainer>
        <SecondTitle>
          내 상품에 최적화된 창고 추천을 위해{'\n'}상품유형들을 선택해주세요.
        </SecondTitle>
        <SecondWrapper>
          {ButtonsName.map((name, idx) => (
            <SecondWrapperButton
              key={idx}
              onClick={() => {
                let temp = buttonClicked;
                temp[idx] = !temp[idx];
                setButtonClicked([...temp]);
              }}
              style={
                buttonClicked[idx]
                  ? { backgroundColor: '#1e56a0', color: 'white' }
                  : { backgroundColor: 'white', color: 'black' }
              }
            >
              {name}
            </SecondWrapperButton>
          ))}
        </SecondWrapper>
        <SecondButton
          onClick={() => {
            window.location.href = '/category';
          }}
        >
          창고 찾기
        </SecondButton>
      </SecondContainer>
      <ThirdContainer>
        <QuickSystemBanner>
          <BannerTitle>오직 반창고에서만</BannerTitle>
          <BannerTextBig>빠른 견적 요청 시스템</BannerTextBig>
          <BannerTextSmall>
            간단한 품목입력으로, 빠르게 견적 요청이 가능합니다.
          </BannerTextSmall>
        </QuickSystemBanner>
        <SliderBox>
          <SliderButton
            onClick={() => {
              SliderRef.current.slickPrev();
            }}
          >
            {'<'}
          </SliderButton>
          <SliderWrapper>
            <Slider {...SliderSetting} ref={SliderRef}>
              {SliderImgArr.map((item, idx) => (
                <img key={idx} src={item.path} alt={item.alt} />
              ))}
            </Slider>
          </SliderWrapper>
          <SliderButton
            onClick={() => {
              SliderRef.current.slickNext();
            }}
          >
            {'>'}
          </SliderButton>
        </SliderBox>
      </ThirdContainer>
      <FourthContainer>
        <FourthWrapper>
          {CardImgArr.map((item, idx) => (
            <FourthCard>
              <FourthCardImg key={idx} src={item.path} alt={item.alt} />
            </FourthCard>
          ))}
        </FourthWrapper>
      </FourthContainer>
      <FifthContainer>
        <FifthTitle>물류 대행,{'\n'} 어렵지 않아요!</FifthTitle>
        <FifthImageBox src={CircleImg} />
        <FifthDesc>"창고 계약이 어렵다면,{'\n'} 반창고를 불러주세요"</FifthDesc>
        <FifthTitleWrapper>
          <FifthTitleFirst>안쓸 이유가 없습니다.</FifthTitleFirst>
          <FifthTitleSecond>반창고 파트너 도입 효과</FifthTitleSecond>
          <FifthTitleThird>
            *경기지역 200평 규모 기준 반창고 파트너 자료 일부 발췌
          </FifthTitleThird>
        </FifthTitleWrapper>
        <FifthWrapper>
          {CompareImgArr.map((item, idx) => (
            <FifthTempImg key={idx} src={item.path} alt={item.alt} />
          ))}
        </FifthWrapper>
        <FifthDescRed>물류비 25% 이상 절감 효과</FifthDescRed>
        <FifthTitle>셀러님은,{'\n'} 판매에만 집중하세요!</FifthTitle>
        <LastGreyContainer>
          <FifthImageBox src={LastImg} />
        </LastGreyContainer>
      </FifthContainer>
    </Container>
  );
};
export default MainPage;
