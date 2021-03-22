import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { descImgs, profileImgs } from './Team';
import {
  Container,
  FirstContainer,
  FirstLeftText,
  FirstRightText,
  SecondWrapper,
  SecondLeftBox,
  SecondLeftFirst,
  SecondLeftSecond,
  SecondLeftThird,
  SecondRightBox,
  MobileSecondRightBox,
  ThirdBox,
  ThirdBoxImg,
  ThirdBoxText,
  ThirdContainer,
  FourthContainer,
  FourthLeft,
  FourthLeftLine,
  FourthLeftTitle,
  FourthRight,
  FourthRightCard,
  FourthRightImg,
  FourthRightText,
  FourthRightFloor,
  MobileFourthRightSubText,
  MobileFourthRightText,
  BottomMapContainer,
  BottomMapDescPhoneNumber,
  BottomMapDescText,
  BottomMapDescTitle,
  BottomMapDescWrapper,
} from './styles';

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
        <MobileSecondRightBox>
          누구에게나 처음은 낯설고, 어렵습니다.
          <br />
          그러나 처음이기에 성장할 수 있는
          <br />
          무한한 가능성은 설렘으로 다가옵니다.
          <br />
          반창고 허브의 서비스를 준비하는 과정은 설렘의 연속이었습니다.
          <br /> 그간 '당연시하게' 여겨져왔던 물류 시장의 불편함은 <br />
          도리어 성장 가능성의 반증이었습니다. <br />
          이제는 그 가능성을 화주분들과 함께 실현시키고자 합니다.
        </MobileSecondRightBox>
        <SecondLeftBox>
          <SecondLeftFirst>VALUE 02</SecondLeftFirst>
          <SecondLeftSecond>반창고 허브가 추구하는</SecondLeftSecond>
          <SecondLeftThird>'상생'</SecondLeftThird>
        </SecondLeftBox>
        <SecondRightBox>
          모든 기업의 최우선 가치는 '이윤추구', '생존'입니다.
          <br />
          반창고 허브는 그러한 생존이 상생이길 바랍니다.
          <br />
          규모나 영역에 대한 걱정없이 화주분들의 열정적인 도전에 보탬이 되고자
          합니다.
          <br />
          시작의 막연함부터 성장단계에서 마주하는 어려움까지 모든 단계에서
          저희와 함께 상생할 수 있도록 노력하겠습니다.
        </SecondRightBox>
        <MobileSecondRightBox>
          모든 기업의 최우선 가치는 '이윤추구', '생존'입니다.
          <br />
          반창고 허브는 그러한 생존이 상생이길 바랍니다.
          <br />
          규모나 영역에 대한 걱정없이 화주분들의 열정적인 도전에 보탬이 되고자
          합니다.
          <br />
          시작의 막연함부터 성장단계에서 마주하는 어려움까지
          <br />
          모든 단계에서 저희와 함께 상생할 수 있도록 노력하겠습니다.
        </MobileSecondRightBox>
      </SecondWrapper>
      <BottomMapContainer>
        <BottomMapDescWrapper>
          <BottomMapDescTitle>찾아오시는 길</BottomMapDescTitle>
          <BottomMapDescText>
            서울특별시 동작구 상도로 369
            <br />
            창신관 3F
          </BottomMapDescText>
          <BottomMapDescPhoneNumber>T. 0507-1370-4711</BottomMapDescPhoneNumber>
        </BottomMapDescWrapper>
        <MapContainer ref={mapRef} id="kakaoMap" />
      </BottomMapContainer>
    </Container>
  );
};
export default Team;
