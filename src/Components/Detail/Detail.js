import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { dayOfWeek, conditionDict, categoryDict } from '../../static/detail';
import {
  Container,
  HouseContainer,
  Image,
  Desc,
  HouseNameText,
  HouseLocationText,
  TagContainer,
  TagBox,
  AdditionInformationWrapper,
  MonthlyMinimumExports,
  MainDescMinReleaseText,
  InfoTitle,
  InfoValue,
  MinReleaseValue,
  AdditionalInfo,
  DeliveryTypesWrapper,
  DeliveryTypesTitle,
  DeliveryTypesListText,
  ButtonWrapper,
  RequestInquireButton,
  RequestTourButton,
  MainDescWrapper,
  MainDescTitle,
  MainDescText,
  MainDescTimeContainer,
  MainDescWorkHourTitle,
  MainDescWorkHourText,
  MainDescWorkDayWrapper,
  MainDescRestDayCard,
  MainDescWorkDayCard,
  MainDescMinimumExports,
  MainDescInfoBox,
  MainDescInfoFloor,
  MainDescInfoCard,
  ExtraDescWrapper,
  ExtraDescMap,
  ExtraDescMapTitle,
} from './Detail_Styles';

const convertNewLine = (originalText) => {
  return originalText.split('\r').map((line, index) => {
    return (
      <span key={index}>
        • {line}
        <br />
      </span>
    );
  });
};

const returnDayBox = (originalDay) => {
  let dayCharArray = [];
  let arrOriginalDay = originalDay.toString().split('');
  for (let i = 0; i < 7 - arrOriginalDay.length; i++) {
    dayCharArray.push('0');
  }
  dayCharArray = [...dayCharArray, ...arrOriginalDay];
  return dayCharArray.map((char, index) => {
    if (char === '0') {
      return (
        <MainDescRestDayCard key={index}>
          {dayOfWeek[index].value}
        </MainDescRestDayCard>
      );
    } else if (char === '1') {
      return (
        <MainDescWorkDayCard key={index}>
          {dayOfWeek[index].value}
        </MainDescWorkDayCard>
      );
    }
    return null;
  });
};

const returnDeliveryTypes = (deliveryTypes) => {
  return deliveryTypes.map((typeName, index) => {
    if (deliveryTypes.length - 1 !== index) {
      return typeName + ', ';
    } else {
      return typeName;
    }
  });
};

const Detail = ({ warehouse, warehouseInfo }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=27af2ff52796d884554beee394faa49e&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      window.daum.maps.load(() => {
        let mapElement = document.getElementById('mapDiv');
        let position = new window.daum.maps.LatLng(37.496314, 126.9553); // DUMMY Pos
        let map = new window.daum.maps.Map(mapElement, {
          center: position,
          level: 5,
        });
        let marker = new window.daum.maps.Marker({
          position: position,
        });
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <Container>
      <HouseContainer>
        <Image src={warehouse.mainImageUrl} alt="HouseImage image" />
        <Desc>
          <HouseNameText>{warehouse.name}</HouseNameText>
          <HouseLocationText>{warehouse.address}</HouseLocationText>
          <TagContainer>
            {warehouse.warehouseCondition.map((condition) => (
              <TagBox key={condition}>{conditionDict(condition)}</TagBox>
            ))}
          </TagContainer>
          <AdditionInformationWrapper>
            <MonthlyMinimumExports>
              <InfoTitle>월 최소 출고량</InfoTitle>
              <MinReleaseValue>{warehouse.minReleasePerMonth}</MinReleaseValue>
            </MonthlyMinimumExports>
            <AdditionalInfo>
              <InfoTitle>평수</InfoTitle>
              <InfoValue>{warehouse.space}</InfoValue>
            </AdditionalInfo>
            <AdditionalInfo>
              <InfoTitle>주력 제품</InfoTitle>
              <InfoValue>{categoryDict(warehouse.mainItemType)}</InfoValue>
            </AdditionalInfo>
          </AdditionInformationWrapper>
          <DeliveryTypesWrapper>
            <DeliveryTypesTitle>사용 택배사</DeliveryTypesTitle>
            <DeliveryTypesListText>
              {returnDeliveryTypes(warehouse.deliveryTypes)}
            </DeliveryTypesListText>
          </DeliveryTypesWrapper>
          <ButtonWrapper>
            <RequestInquireButton>견적 문의</RequestInquireButton>
            <RequestTourButton>투어 신청</RequestTourButton>
          </ButtonWrapper>
        </Desc>
      </HouseContainer>
      <MainDescWrapper>
        <MainDescTitle>📢창고 소개</MainDescTitle>
        <MainDescText>{convertNewLine(warehouse.description)}</MainDescText>
        <MainDescTitle>📢영업 시간</MainDescTitle>
        <MainDescTimeContainer>
          <MainDescWorkHourTitle>영업 시간</MainDescWorkHourTitle>
          <MainDescWorkHourText>
            {warehouse.openAt} ~ {warehouse.closeAt}
          </MainDescWorkHourText>
        </MainDescTimeContainer>
        <MainDescTimeContainer>
          <MainDescWorkHourTitle>영업 요일</MainDescWorkHourTitle>
          <MainDescWorkDayWrapper>
            {returnDayBox(warehouse.availableWeekdays)}
          </MainDescWorkDayWrapper>
        </MainDescTimeContainer>
        <MainDescMinimumExports>
          *창고 상황에 따라 달라집니다.
        </MainDescMinimumExports>
        <MainDescTitle>📢월 최소 출고량</MainDescTitle>
        <MainDescMinReleaseText>
          - {warehouse.minReleasePerMonth}건
        </MainDescMinReleaseText>
        <MainDescMinimumExports>
          * 월 최소 출고량은 창고측에서 희망하는 고객들의 월 출고량을
          나타냅니다.
        </MainDescMinimumExports>
        <MainDescTitle>📢시설 정보</MainDescTitle>
        <MainDescInfoBox>
          <MainDescInfoFloor>
            <MainDescInfoCard>{warehouseInfo[0]}</MainDescInfoCard>
            <MainDescInfoCard>{warehouseInfo[1]}</MainDescInfoCard>
            <MainDescInfoCard>{warehouseInfo[2]}</MainDescInfoCard>
            <MainDescInfoCard>{warehouseInfo[3]}</MainDescInfoCard>
            <MainDescInfoCard>{warehouseInfo[4]}</MainDescInfoCard>
          </MainDescInfoFloor>
          <MainDescInfoFloor>
            <MainDescInfoCard>{warehouseInfo[5]}</MainDescInfoCard>
            <MainDescInfoCard>{warehouseInfo[6]}</MainDescInfoCard>
            <MainDescInfoCard>{warehouseInfo[7]}</MainDescInfoCard>
            <MainDescInfoCard>{warehouseInfo[8]}</MainDescInfoCard>
            <MainDescInfoCard>{warehouseInfo[9]}</MainDescInfoCard>
          </MainDescInfoFloor>
        </MainDescInfoBox>
        {warehouse.warehouseFacilityUsages.length !== 0 && (
          <>
            <MainDescTitle>📢시설 안내</MainDescTitle>
            <MainDescText>
              {warehouse.warehouseFacilityUsages.map((content, index) => {
                return (
                  <span key={index}>
                    • {content}
                    <br />
                  </span>
                );
              })}
            </MainDescText>
          </>
        )}
        {warehouse.warehouseUsageCautions.length !== 0 && (
          <>
            <MainDescTitle>📢시설 이용 시 주의사항</MainDescTitle>
            <MainDescText>
              {warehouse.warehouseUsageCautions.map((content, index) => {
                return (
                  <span key={index}>
                    • {content}
                    <br />
                  </span>
                );
              })}
            </MainDescText>
          </>
        )}
      </MainDescWrapper>
      <ExtraDescWrapper>
        <ExtraDescMapTitle>위치 정보</ExtraDescMapTitle>
        <ExtraDescMap id="mapDiv"></ExtraDescMap>
      </ExtraDescWrapper>
    </Container>
  );
};

Detail.propTypes = {
  warehouse: PropTypes.object,
  warehouseInfo: PropTypes.array,
};

export default Detail;
