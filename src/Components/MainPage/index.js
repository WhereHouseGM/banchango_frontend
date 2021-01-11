import React, { useState } from 'react';
import Slider from 'react-slick';

import CircleImg from '../../assets/images/MainPage/Circle.png';
import LastImg from '../../assets/images/MainPage/Last.png';

import {
  SliderImgArr,
  CardImgArr,
  CompareImgArr,
  BtnArr,
  Container,
  FirstContainer,
  FirstUpperTitle,
  FirstTitle,
  FirstButton,
  SecondContainer,
  SecondSideWrapper,
  SecondSideTextWrapper,
  SecondSideText,
  SecondSideArrow,
  SecondMiddleWrapper,
  SecondTitle,
  SecondSubTitle,
  SecondWrapper,
  SecondCategoryBox,
  SecondCategoryIcon,
  SecondCategoryText,
  SecondButton,
  ThirdContainer,
  SliderBox,
  SliderWrapper,
  SliderButton,
  SliderSetting,
  QuickSystemBanner,
  BannerTitle,
  BannerTextBig,
  BannerTextSmall,
  FourthContainer,
  FourthWrapper,
  FourthCard,
  FourthCardImg,
  FifthContainer,
  FifthTitleWrapper,
  FifthTitleFirst,
  FifthTitleSecond,
  FifthTitleThird,
  FifthWrapper,
  FifthTempImg,
  FifthTitle,
  FifthImageBox,
  FifthDesc,
  FifthDescRed,
  LastGreyContainer,
} from './MainPage';

const MainPage = () => {
  const [buttonClicked, setButtonClicked] = useState([]);
  const SliderRef = React.createRef();

  const logClickedButtons = () => {};
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
        <SecondSideWrapper>
          <SecondSideTextWrapper>
            <SecondSideText>
              내 상품 종류를 선택하고
              <br />
              검색해보세요!
            </SecondSideText>
            <SecondSideArrow>&gt;&gt;</SecondSideArrow>
          </SecondSideTextWrapper>
        </SecondSideWrapper>
        <SecondMiddleWrapper>
          <SecondTitle>내 품목에 맞는 창고 검색</SecondTitle>
          <SecondSubTitle>
            내 상품에 최적화된 창고 추천을 위해{'\n'}상품유형들을 선택해주세요.
          </SecondSubTitle>
          <SecondWrapper>
            {BtnArr.map((item, idx) => (
              <SecondCategoryBox
                key={idx}
                id={item.id}
                onClick={() => {
                  let temp = buttonClicked;
                  temp[idx] = !temp[idx];
                  setButtonClicked([...temp]);
                }}
                style={
                  buttonClicked[idx]
                    ? { border: '3px solid #1e56a0' }
                    : { border: '1.5px solid #1e56a0', boxShadow: 'none' }
                }
              >
                <SecondCategoryIcon
                  src={
                    buttonClicked[idx] ? item.icon.clicked : item.icon.normal
                  }
                />
                <SecondCategoryText>{item.name}</SecondCategoryText>
              </SecondCategoryBox>
            ))}
          </SecondWrapper>
          <SecondButton
            // onClick={() => {
            //   window.location.href = '/category';
            // }}
            onClick={() => logClickedButtons()}
          >
            창고 찾기
          </SecondButton>
        </SecondMiddleWrapper>
        <SecondSideWrapper></SecondSideWrapper>
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
            &lt;
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
            &gt;
          </SliderButton>
        </SliderBox>
      </ThirdContainer>
      <FourthContainer>
        <FourthWrapper>
          {CardImgArr.map((item, idx) => (
            <FourthCard key={idx}>
              <FourthCardImg src={item.path} alt={item.alt} />
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
