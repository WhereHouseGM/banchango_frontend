import React from 'react';
import styled from 'styled-components';

const Con = styled.div`
  width: 100%;
  font-family: 'paybooc-Medium', sans-serif;
  text-align: center;
  line-height: 1.3;
`;
const FirstCon = styled.div`
  background-color: #1e56a0;
  padding: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FirstLeftText = styled.div`
  width: 10%;
  min-width: 165.1px;
  font-weight: bold;
  font-size: 45px;
`;
const FirstRightText = styled.div`
  width: 50%;
  max-width: 615px;
  font-size: 14px;
  line-height: 1.5;
`;
const SecondWrap = styled.div`
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
const SecondLeftBox = styled.div`
  width: 28%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
`;
const SecondLeftFirst = styled.div`
  color: #1e56a0;
`;
const SecondLeftSecond = styled.div`
  color: black;
`;
const SecondLeftThird = styled.div`
  color: #1e56a0;
`;
const SecondRightBox = styled.div`
  width: 70%;
  height: 200px;
  padding: 20px 0px 20px 40px;
  font-size: 20px;
  margin-bottom: 20px;
`;
const ThirdCon = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;
const ThirdBox = styled.div`
  width: 50%;
`;
const ThirdBoxText = styled.div`
  color: #1e56a0;
  margin: 20px 0;
  font-weight: bold;
  font-size: 25px;
`;
const ThirdBoxImg = styled.img`
  width: 100%;
`;
const FourthCon = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const FourthLeft = styled.div`
  width: 38%;
  height: 200px;
  color: #1e56a0;
`;
const FourthLeftLine = styled.div`
  width: 25px;
  height: 1px;
  margin-bottom: 10px;
  border-bottom: 3px solid #1e56a0;
`;
const FourthLeftTitle = styled.div`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
`;
const FourthRight = styled.div`
  width: 62%;
`;
const FourthRightFloor = styled.div`
  display: flex;
  color: #1e56a0;
`;
const FourthRightCard = styled.div`
  width: 20%;
  margin: 20px;
`;
const FourthRightImg = styled.img`
  width: 100%;
`;
const FourthRightText = styled.div``;

const FifthImg = styled.img`
  width: 95%;
  max-width: 1024px;
  padding-bottom: 50px;
`;
const Team = () => {
  return (
    <Con>
      <FirstCon>
        <FirstLeftText>㮽창고 :</FirstLeftText>
        <FirstRightText>
          국내 최초 창고중개 플랫폼 반창고는 대표가 직접 '화주로서 느끼는
          어려움'에서 시작한 솔루션입니다.
          <br /> IT 성장이 주는 편리함은 잃지 않되, 그 모든 기반에 있는 사람의
          가치 또한 잊지 않고자 합니다
          <br /> 반창고가 화주와 창고주에게 각자의 영역에서 발돋움하기 위한
          도움닫기가 되길 바랍니다.{' '}
        </FirstRightText>
      </FirstCon>
      <SecondWrap>
        <SecondLeftBox>
          <SecondLeftFirst>VALUE 01</SecondLeftFirst>
          <SecondLeftSecond>반창고가 추구하는</SecondLeftSecond>
          <SecondLeftThird>'성장'</SecondLeftThird>
        </SecondLeftBox>
        <SecondRightBox>
          <br />
          <br />
          누구에게나 처음은 낯설고, 어렵습니다.
          <br /> 그러나 처음이기에 성장할 수 있는 무한한 가능성은 설렘으로
          다가옵니다. <br />
          반창고의 서비스를 준비하는 과정은 설렘의 연속이었습니다.
          <br /> 그간 '당연시하게'여겨져왔던 물류 시장의 불편함은 <br />
          도리어 성장 가능성의 반증이었습니다. <br />
          이제는 그 가능성을 화주분들과 함께 실현시키고자 합니다.
        </SecondRightBox>
        <SecondLeftBox>
          <SecondLeftFirst>VALUE 02</SecondLeftFirst>
          <SecondLeftSecond>반창고가 추구하는</SecondLeftSecond>
          <SecondLeftThird>'상생'</SecondLeftThird>
        </SecondLeftBox>
        <SecondRightBox>
          <br />
          <br />
          모든 기업의 최우선 가치는 '이윤추구', '생존'입니다.
          <br /> 반창고는 그러한 생존이 상생이길 바랍니다.
          <br /> 규모나 영역에 대한 걱정없이 화주분들의 열정적인 도전에 보탬이
          되고자 합니다.
          <br /> 시작의 막연함부터 성장단계에서 마주하는 어려움까지 모든
          단계에서 저희와 함께 상생할 수 있도록 노력하겠습니다.
        </SecondRightBox>
      </SecondWrap>
      <ThirdCon>
        <ThirdBox>
          <ThirdBoxText>물류와 사람을 잇다</ThirdBoxText>
          <ThirdBoxImg
            src={
              'https://user-images.githubusercontent.com/62606632/103516609-2ebab580-4eb4-11eb-90be-3c0b989c1d46.png'
            }
          />
        </ThirdBox>
        <ThirdBox>
          <ThirdBoxImg
            src={
              'https://user-images.githubusercontent.com/62606632/103516665-3f6b2b80-4eb4-11eb-9afd-e221d2e90ddd.png'
            }
          />
          <ThirdBoxText>반 : 창고</ThirdBoxText>
        </ThirdBox>
      </ThirdCon>
      <FourthCon>
        <FourthLeft>
          <FourthLeftLine />
          <FourthLeftTitle>반창고 Team</FourthLeftTitle>
        </FourthLeft>
        <FourthRight>
          <FourthRightFloor>
            <FourthRightCard>
              <FourthRightImg
                src={
                  'https://user-images.githubusercontent.com/62606632/103520178-18175d00-4eba-11eb-969c-b7864ac2a686.png'
                }
              />
              <FourthRightText>최윤석 / CEO</FourthRightText>
            </FourthRightCard>
          </FourthRightFloor>
          <FourthRightFloor>
            <FourthRightCard>
              <FourthRightImg
                src={
                  'https://user-images.githubusercontent.com/62606632/103520179-18aff380-4eba-11eb-8ba7-7d746a5b4fa4.png'
                }
              />
              <FourthRightText>나상우 / 개발</FourthRightText>
            </FourthRightCard>
            <FourthRightCard>
              <FourthRightImg
                src={
                  'https://user-images.githubusercontent.com/62606632/103520181-18aff380-4eba-11eb-82a1-ddf84d05b079.png'
                }
              />
              <FourthRightText>오범수 / 개발</FourthRightText>
            </FourthRightCard>
            <FourthRightCard>
              <FourthRightImg
                src={
                  'https://user-images.githubusercontent.com/62606632/103520184-19488a00-4eba-11eb-8bba-0256ac7dde5e.png'
                }
              />
              <FourthRightText>조영현 / 개발</FourthRightText>
            </FourthRightCard>
          </FourthRightFloor>
          <FourthRightFloor>
            <FourthRightCard>
              <FourthRightImg
                src={
                  'https://user-images.githubusercontent.com/62606632/103520186-19488a00-4eba-11eb-9aef-c08e6391a84b.png'
                }
              />
              <FourthRightText>전정표 / 서비스 기획</FourthRightText>
            </FourthRightCard>
            <FourthRightCard>
              <FourthRightImg
                src={
                  'https://user-images.githubusercontent.com/62606632/103520188-19e12080-4eba-11eb-8331-402f16f9d457.png'
                }
              />
              <FourthRightText>문효원 / 서비스 기획</FourthRightText>
            </FourthRightCard>
          </FourthRightFloor>
          <FourthRightFloor>
            <FourthRightCard>
              <FourthRightImg
                src={
                  'https://user-images.githubusercontent.com/62606632/103520190-1a79b700-4eba-11eb-8d01-77ff8d307baf.png'
                }
              />
              <FourthRightText>황성지 / 영업</FourthRightText>
            </FourthRightCard>
            <FourthRightCard>
              <FourthRightImg
                src={
                  'https://user-images.githubusercontent.com/62606632/103520169-16e63000-4eba-11eb-8d74-3e760cb0a494.png'
                }
              />
              <FourthRightText>이소정 / 영업</FourthRightText>
            </FourthRightCard>
          </FourthRightFloor>
        </FourthRight>
      </FourthCon>
      <FifthImg
        src={
          'https://user-images.githubusercontent.com/62606632/103519228-865b2000-4eb8-11eb-95bc-ffe59d44feed.png'
        }
      />
    </Con>
  );
};
export default Team;
