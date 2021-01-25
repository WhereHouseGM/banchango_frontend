import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { descImgs, profileImgs } from './Team';
const Container = styled.div`
  width: 100%;
  font-family: 'paybooc-Medium', sans-serif;
  text-align: center;
  line-height: 1.3;
`;
const FirstContainer = styled.div`
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
const FirstLeftText = styled.div`
  width: 20%;
  min-width: 165.1px;
  font-weight: bold;
  font-size: 45px;
  @media (max-width: 768px) {
    font-size: 25px;
    min-width: 110px;
    white-space: pre-wrap;
  }
`;
const FirstRightText = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  /* width: 50%; */
  flex: 1;
  max-width: 615px;
  font-size: 14px;
  line-height: 1.5;
  white-space: normal;
  @media (max-width: 768px) {
    white-space: pre-wrap;
  }
`;
const SecondWrapper = styled.div`
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
  font-family: 'notosans-Regular', sans-serif;
  width: 70%;
  height: 200px;
  padding: 50px 0px 20px 40px;
  font-size: 18px;
  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    padding: 20px;
  }
`;
const ThirdContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;
const ThirdBox = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ThirdBoxText = styled.div`
  color: #1e56a0;
  margin: 20px 0;
  font-weight: bold;
  font-size: 25px;
`;
const ThirdBoxImg = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
const FourthContainer = styled.div`
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
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 20px 0;
  }
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const FourthRightFloor = styled.div`
  width: 100%;
  display: flex;
  color: #1e56a0;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const FourthRightCard = styled.div`
  width: 20%;
  margin: 20px;
`;
const FourthRightImg = styled.img`
  width: 100%;
`;
const FourthRightText = styled.div``;
const BottomMapContainer = styled.div`
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const BottomMapDescWrapper = styled.div`
  width: 300px;
  align-self: flex-start;
  text-align: left;
  font-size: 20px;
`;
const BottomMapDescTitle = styled.div`
  font-weight: bold;
`;
const BottomMapDescText = styled.div``;
const BottomMapDescPhoneNumber = styled.div`
  margin: 15px;
`;

const MapContainer = styled.div`
  width: 700px;
  height: 370px;
  margin: 10px auto 100px auto;
  background-color: black;
`;
const Team = () => {
  const mapRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=27af2ff52796d884554beee394faa49e&autoload=false';
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        let targetPos = new window.kakao.maps.LatLng(
          37.4964976608857,
          126.95746664800929,
        );
        let container = document.getElementById('kakaoMap');
        let options = {
          center: targetPos,
          level: 4,
        };
        const map = new window.kakao.maps.Map(container, options);
        let markerPosition = targetPos;
        let marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
        var mapTypeControl = new window.kakao.maps.MapTypeControl();
        map.addControl(
          mapTypeControl,
          window.kakao.maps.ControlPosition.TOPRIGHT,
        );
        var zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
      });
    };
  }, []);
  return (
    <Container>
      <FirstContainer>
        <FirstLeftText>
          <span>㮽창고{`\n`}</span>
          <span style={{ fontSize: '25px' }}>허브 :</span>
        </FirstLeftText>
        <FirstRightText>
          국내 최초 창고중개 플랫폼 반창고 허브는 대표가 직접 '화주로서 느끼는
          어려움'에서 시작한 솔루션입니다.
          <br />
          {'\n'} IT 성장이 주는 편리함은 잃지 않되, 그 모든 기반에 있는 사람의
          가치 또한 잊지 않고자 합니다.
          <br />
          {'\n'} 반창고가 화주와 창고주에게 각자의 영역에서 발돋움하기 위한
          도움닫기가 되길 바랍니다.
        </FirstRightText>
      </FirstContainer>
      <SecondWrapper>
        <SecondLeftBox>
          <SecondLeftFirst>VALUE 01</SecondLeftFirst>
          <SecondLeftSecond>반창고 허브가 추구하는</SecondLeftSecond>
          <SecondLeftThird>'성장'</SecondLeftThird>
        </SecondLeftBox>
        <SecondRightBox>
          누구에게나 처음은 낯설고, 어렵습니다.
          <br /> 그러나 처음이기에 성장할 수 있는 무한한 가능성은 설렘으로
          다가옵니다. <br />
          반창고 허브의 서비스를 준비하는 과정은 설렘의 연속이었습니다.
          <br /> 그간 '당연시하게' 여겨져왔던 물류 시장의 불편함은 <br />
          도리어 성장 가능성의 반증이었습니다. <br />
          이제는 그 가능성을 화주분들과 함께 실현시키고자 합니다.
        </SecondRightBox>
        <SecondLeftBox>
          <SecondLeftFirst>VALUE 02</SecondLeftFirst>
          <SecondLeftSecond>반창고 허브가 추구하는</SecondLeftSecond>
          <SecondLeftThird>'상생'</SecondLeftThird>
        </SecondLeftBox>
        <SecondRightBox>
          모든 기업의 최우선 가치는 '이윤추구', '생존'입니다.
          <br /> 반창고 허브는 그러한 생존이 상생이길 바랍니다.
          <br /> 규모나 영역에 대한 걱정없이 화주분들의 열정적인 도전에 보탬이
          되고자 합니다.
          <br /> 시작의 막연함부터 성장단계에서 마주하는 어려움까지 모든
          단계에서 저희와 함께 상생할 수 있도록 노력하겠습니다.
        </SecondRightBox>
      </SecondWrapper>
      <ThirdContainer>
        <ThirdBox>
          <ThirdBoxText>물류와 사람을 잇다</ThirdBoxText>
          <Fade bottom>
            <ThirdBoxImg src={descImgs.left.img} alt={descImgs.left.alt} />
          </Fade>
        </ThirdBox>
        <ThirdBox>
          <Fade bottom>
            <ThirdBoxImg src={descImgs.right.img} alt={descImgs.right.alt} />
          </Fade>
          <ThirdBoxText>반창고 허브</ThirdBoxText>
        </ThirdBox>
      </ThirdContainer>
      <FourthContainer>
        <FourthLeft>
          <FourthLeftLine />
          <FourthLeftTitle>반창고 허브팀</FourthLeftTitle>
        </FourthLeft>
        <FourthRight>
          <FourthRightFloor>
            <FourthRightCard>
              <FourthRightImg
                src={profileImgs.CEO.img}
                alt={profileImgs.CEO.alt}
              />
              <FourthRightText>최윤석 / CEO</FourthRightText>
            </FourthRightCard>
          </FourthRightFloor>
          <FourthRightFloor>
            <FourthRightCard>
              <FourthRightImg
                src={profileImgs.DEV[0].img}
                alt={profileImgs.DEV[0].alt}
              />
              <FourthRightText>나상우 / 개발</FourthRightText>
            </FourthRightCard>
            <FourthRightCard>
              <FourthRightImg
                src={profileImgs.DEV[1].img}
                alt={profileImgs.DEV[1].alt}
              />
              <FourthRightText>오범수 / 개발</FourthRightText>
            </FourthRightCard>
            <FourthRightCard>
              <FourthRightImg
                src={profileImgs.DEV[2].img}
                alt={profileImgs.DEV[2].alt}
              />
              <FourthRightText>조영현 / 개발</FourthRightText>
            </FourthRightCard>
          </FourthRightFloor>
          <FourthRightFloor>
            <FourthRightCard>
              <FourthRightImg
                src={profileImgs.ARCH[0].img}
                alt={profileImgs.ARCH[0].alt}
              />
              <FourthRightText>전정표 / 서비스 기획</FourthRightText>
            </FourthRightCard>
            <FourthRightCard>
              <FourthRightImg
                src={profileImgs.ARCH[1].img}
                alt={profileImgs.ARCH[1].alt}
              />
              <FourthRightText>문효원 / 서비스 기획</FourthRightText>
            </FourthRightCard>
          </FourthRightFloor>
          <FourthRightFloor>
            <FourthRightCard>
              <FourthRightImg
                src={profileImgs.SALER[0].img}
                alt={profileImgs.SALER[0].alt}
              />
              <FourthRightText>황성지 / 영업</FourthRightText>
            </FourthRightCard>
            <FourthRightCard>
              <FourthRightImg
                src={profileImgs.SALER[1].img}
                alt={profileImgs.SALER[1].alt}
              />
              <FourthRightText>이소정 / 영업</FourthRightText>
            </FourthRightCard>
            <FourthRightCard>
              <FourthRightImg
                src={profileImgs.DESIGN.img}
                alt={profileImgs.DESIGN.alt}
              />
              <FourthRightText>조성현 / 디자인</FourthRightText>
            </FourthRightCard>
          </FourthRightFloor>
        </FourthRight>
      </FourthContainer>
      <BottomMapContainer>
        <BottomMapDescWrapper>
          <BottomMapDescTitle>찾아오시는 길</BottomMapDescTitle>
          <BottomMapDescText>
            서울특별시 동작구 상도로 369
            <br />
            창신관 3F
          </BottomMapDescText>
          <BottomMapDescPhoneNumber>
            T. 010 - 4161 - 4711
          </BottomMapDescPhoneNumber>
        </BottomMapDescWrapper>
        <MapContainer ref={mapRef} id="kakaoMap" />
      </BottomMapContainer>
    </Container>
  );
};
export default Team;
