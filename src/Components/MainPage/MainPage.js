import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  width: 100%;
  font-family: 'paybooc-Medium', sans-serif;
  text-align: center;
  line-height: 1.5;
`;
const FirstContainer = styled.div`
  width: 100%;
  height: 500px;
  background-image: url('https://user-images.githubusercontent.com/62606632/103502213-da9fd900-4e93-11eb-8ba9-b0c249b3700c.png');
  background-position: bottom;
  display: flex;
  line-height: 1.7;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(56, 128, 146);
  color: white;
`;
const FirstTitle = styled.div`
  width: 90%;
  font-size: 25px;
  white-space: pre-line;
  @media (max-width: 1023px) {
    margin-top: 10px;
    font-size: 20px;
    white-space: normal;
  }
`;
const FirstButton = styled.div`
  margin-top: 30px;
  background-color: white;
  border-radius: 15px;
  color: #1e56a0;
  padding: 10px 40px;
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
  font-size: 35px;
`;
const BannerTextSmall = styled.div`
  font-size: 15px;
`;
const FourthContainer = styled.div`
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
  background-color: #1e56a0;
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
  background-color: #1e56a0;
  padding: 30px 0;
  width: 100%;
`;
const FifthTitleTemp = styled.div`
  font-size: 35px;
  line-height: 1.7;
  color: white;
  font-weight: bold;
  @media (max-width: 1023px) {
    font-size: 28px;
  }
`;
const FifthWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
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
  width: 40%;
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
    font-size: 20px;
  }
`;

const MainPage = () => {
  const ButtonsName = [
    '의류',
    '화장품',
    '악세서리',
    '잡화',
    '식품',
    '서적',
    '인테리어',
    '전자기기',
    '스포츠',
    '냉동',
    '냉장',
    '대형물품',
  ];
  const [clicked, setClicked] = useState([]);
  const SliderRef = React.createRef();

  return (
    <Container>
      <FirstContainer>
        <div style={{ fontSize: '30px' }}>온라인 셀러를 위한</div>
        <div style={{ fontSize: '40px' }}>인천 물류 솔루션</div>
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
          {ButtonsName.map((name, idx) => {
            return (
              <SecondWrapperButton
                key={idx}
                onClick={() => {
                  let temp = clicked;
                  temp[idx] = !temp[idx];
                  setClicked([...temp]);
                }}
                style={
                  clicked[idx]
                    ? { backgroundColor: '#1e56a0', color: 'white' }
                    : { backgroundColor: 'white', color: 'black' }
                }
              >
                {name}
              </SecondWrapperButton>
            );
          })}
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
              <img
                src={
                  'https://user-images.githubusercontent.com/62606632/103521869-d936d680-4ebc-11eb-9da8-b9b0c770375b.png'
                }
                alt={'첫번째 슬라이드 이미지'}
              />
              <img
                src={
                  'https://user-images.githubusercontent.com/62606632/103522022-19965480-4ebd-11eb-9675-e6e72b5e3fcf.png'
                }
                alt={'두번째 슬라이드 이미지'}
              />
              <img
                src={
                  'https://user-images.githubusercontent.com/62606632/103522042-2155f900-4ebd-11eb-9a4b-0cde1d3aef37.png'
                }
                alt={'세번째 슬라이드 이미지'}
              />
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
        <FourthCard>
          <FourthCardImg
            src={
              'https://user-images.githubusercontent.com/62606632/103523823-d4275680-4ebf-11eb-880b-a2ae741e1562.png'
            }
            alt={'첫번째 카드 이미지'}
          />
        </FourthCard>
        <FourthCard>
          <FourthCardImg
            src={
              'https://user-images.githubusercontent.com/62606632/103523966-1ea8d300-4ec0-11eb-94e6-19dc856130cd.png'
            }
            alt={'두번째 카드 이미지'}
          />
        </FourthCard>
        <FourthCard>
          <FourthCardImg
            src={
              'https://user-images.githubusercontent.com/62606632/103524113-57e14300-4ec0-11eb-833c-fe9f1c7dcc07.png'
            }
            alt={'세번째 카드 이미지'}
          />
        </FourthCard>
        <FourthCard>
          <FourthCardImg
            src={
              'https://user-images.githubusercontent.com/62606632/103524149-63cd0500-4ec0-11eb-9e85-e5411fac1e8c.png'
            }
            alt={'네번째 카드 이미지'}
          />
        </FourthCard>
      </FourthContainer>
      <FifthContainer>
        <FifthTitle>물류 대행,{'\n'} 어렵지 않아요!</FifthTitle>
        <FifthImageBox
          src={
            'https://user-images.githubusercontent.com/62606632/103524023-384a1a80-4ec0-11eb-87e3-d896f9ac2022.png'
          }
        />
        <FifthDesc>"창고 계약이 어렵다면,{'\n'} 반창고를 불러주세요"</FifthDesc>
        <FifthTitleWrapper>
          <FifthTitleTemp>
            안쓸 이유가 없습니다.
            <br />
            반창고 파트너 도입 효과
          </FifthTitleTemp>
        </FifthTitleWrapper>
        <FifthWrapper>
          <FifthTempImg
            src={
              'https://user-images.githubusercontent.com/62606632/103506242-94507700-4e9f-11eb-8290-b1cd0f351abe.png'
            }
          />
          <FifthTempImg
            src={
              'https://user-images.githubusercontent.com/62606632/103506234-90bcf000-4e9f-11eb-8a4d-1b459fe7ae1c.png'
            }
          />
        </FifthWrapper>

        <FifthDescRed>물류비 25% 이상 절감 효과</FifthDescRed>
        <FifthTitle>셀러님은,{'\n'} 판매에만 집중하세요!</FifthTitle>
        <FifthImageBox
          src={
            'https://user-images.githubusercontent.com/62606632/103523735-ad692000-4ebf-11eb-8846-0c6996361012.png'
          }
        />
      </FifthContainer>
    </Container>
  );
};
export default MainPage;
