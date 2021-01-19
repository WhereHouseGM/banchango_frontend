import React, { useState } from 'react';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';
import CircleImg from '../../assets/images/MainPage/Circle.png';
import LastImg from '../../assets/images/MainPage/Last.png';
import { message } from 'antd';

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
  FirstImageContainer,
  FirstTitleText,
} from './MainPage';
import { useHistory } from 'react-router-dom';

const MainPage = () => {
  const [buttonClicked, setButtonClicked] = useState([]);
  const SliderRef = React.createRef();
  const history = useHistory();

  const getClickedMainItemTypes = () => {
    let clickedMainItemTypes = [];
    for (let i = 0; i < buttonClicked.length; i++) {
      if (buttonClicked[i] === true) {
        clickedMainItemTypes.push(BtnArr[i].id);
      }
    }
    return clickedMainItemTypes;
  };

  return (
    <Container>
      <FirstContainer>
        <FirstImageContainer />
        <FirstUpperTitle fontSize={'30px'}>온라인 셀러 전용</FirstUpperTitle>
        <FirstUpperTitle fontWeight={'bold'}>3PL 창고 집합소</FirstUpperTitle>
        <FirstTitle>
          <Fade bottom>
            <FirstTitleText>
              온라인 셀러 전용, 보관부터 출고까지 전문가에게 맡겨보세요.{'\n'}
              인천, 경기 물류대행(3PL) 센터를 반창고에서 찾을 수 있습니다.
            </FirstTitleText>
          </Fade>
        </FirstTitle>
        <FirstButton
          onClick={() => {
            sessionStorage.clear();
            history.push('/category');
          }}
        >
          바로 시작하기
        </FirstButton>
      </FirstContainer>
      <SecondContainer>
        <SecondSideWrapper />
        <SecondMiddleWrapper>
          <SecondTitle>내 상품에 맞는{'\n'}창고 검색</SecondTitle>
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
            onClick={() => {
              let clickedMainItemTypes = getClickedMainItemTypes();
              if (clickedMainItemTypes.length === 0) {
                message.warning('상품 종류를 1개 이상 선택해 주세요!');
                return;
              } else {
                sessionStorage.setItem(
                  'MainItemTypes',
                  clickedMainItemTypes.join(',').toString(),
                );
                sessionStorage.setItem(
                  'ClickedButton',
                  JSON.stringify(buttonClicked),
                );
                history.push('/category');
              }
            }}
          >
            창고 검색
          </SecondButton>
        </SecondMiddleWrapper>
        <SecondSideWrapper />
      </SecondContainer>
      <ThirdContainer>
        <QuickSystemBanner>
          <BannerTitle>전화하기 부담스러우셨죠?</BannerTitle>
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
        <Fade bottom>
          <FifthTitle>물류 대행,{'\n'} 어렵지 않아요!</FifthTitle>
        </Fade>
        <FifthImageBox src={CircleImg} />
        <FifthDesc>"창고 계약이 어렵다면,{'\n'} 반창고를 불러주세요"</FifthDesc>
        <FifthTitleWrapper>
          <FifthTitleFirst>안쓸 이유가 없습니다.</FifthTitleFirst>
          <FifthTitleSecond>반창고 파트너 도입 효과</FifthTitleSecond>
          <FifthTitleThird>
            *경기지역 200평 규모 기준{'\n'}반창고 파트너 자료 일부 발췌
          </FifthTitleThird>
        </FifthTitleWrapper>
        <FifthWrapper>
          {CompareImgArr.map((item, idx) => (
            <FifthTempImg key={idx} src={item.path} alt={item.alt} />
          ))}
        </FifthWrapper>
        <FifthDescRed>물류비 25% 이상 절감 효과</FifthDescRed>
        <Fade bottom>
          <FifthTitle>셀러님은,{'\n'} 판매에만 집중하세요!</FifthTitle>
        </Fade>
        <LastGreyContainer>
          <FifthImageBox src={LastImg} />
        </LastGreyContainer>
      </FifthContainer>
    </Container>
  );
};
export default MainPage;
