import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { dayOfWeek } from '../../static/admin';

const WarehouseConditions = {
  ROOM_TEMPERATURE: 'ROOM_TEMPERATURE',
  LOW_TEMPERATURE: 'LOW_TEMPERATURE',
  BONDED: 'BONDED',
  SAVAGE: 'SAVAGE',
  HAZARDOUS: 'HAZARDOUS',
  SELF_STORAGE: 'SELF_STORAGE',
  CONTAINER: 'CONTAINER',
};

const conditionDic = (warehouseCondition) => {
  switch (warehouseCondition) {
    case WarehouseConditions.ROOM_TEMPERATURE:
      return '상온창고';
    case WarehouseConditions.LOW_TEMPERATURE:
      return '저온창고';
    case WarehouseConditions.BONDED:
      return '보세창고';
    case WarehouseConditions.SAVAGE:
      return '야외창고';
    case WarehouseConditions.HAZARDOUS:
      return '위험창고';
    case WarehouseConditions.SELF_STORAGE:
      return '셀프창고';
    case WarehouseConditions.CONTAINER:
      return '컨테이너';
    default:
      return '';
  }
};

const Categories = {
  CLOTH: 'CLOTH',
  COSMETIC: 'COSMETIC',
  FURNITURE: 'FURNITURE',
  GENERAL: 'GENERAL_MERCHANDISE',
  FOOD: 'TEMPERATURE_SENSITIVE',
  JEWELRY: 'ACCESSORY',
};

const categoryDic = (category) => {
  switch (category.toString().toUpperCase()) {
    case Categories.CLOTH:
      return '의류 창고 ';
    case Categories.COSMETIC:
      return '화장품 창고 ';
    case Categories.FURNITURE:
      return '가구 창고 ';
    case Categories.GENERAL:
      return '잡화 창고 ';
    case Categories.FOOD:
      return '식품 창고 ';
    case Categories.JEWELRY:
      return '악세사리 창고 ';
    default:
      return '';
  }
};

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

const Container = styled.div`
  padding-top: 60px;
  background-color: rgb(230, 235, 244);
`;

const HouseContainer = styled.div`
  width: 60%;
  min-width: 330px;
  height: 400px;
  margin: 60px auto;
  display: flex;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
  transition: 0.2s ease;
  @media screen and (max-width: 1000px) {
    height: auto;
    width: 330px;
    flex-direction: column;
    padding-bottom: 10px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-right: -330px;
  padding-right: 330px;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px 0 0 10px;
  @media screen and (max-width: 1000px) {
    object-fit: contain;
    width: 330px;
    height: auto;
    margin-right: 0px;
    padding-right: 0px;
    border-radius: 10px 10px 0 0;
  }
`;

const Desc = styled.div`
  width: 330px;
  padding: 10px;
`;

const HouseNameText = styled.h1`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 1.8em;
  margin-top: 20px;
  margin-left: 20px;
  &:hover {
    color: #30475e;
  }
`;

const HouseLocationText = styled.h2`
  font-family: 'Nanum Gothic', sans-serif;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 1em;
  color: #aaa;
`;

const TagContainer = styled.div`
  align-items: flex-start;
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
`;

const TagBox = styled.div`
  padding: 8px 8px 8px 8px;
  margin-right: 10px;
  background-color: black;
  border-radius: 10px 10px 10px 10px;
  font-family: 'Nanum Gothic', sans-serif;
  color: white;
  font-weight: bold;
  font-size: 0.7em;
  text-align: center;
`;

const AdditionInformationWrapper = styled.div`
  display: flex;
  justify-self: center;
  margin-top: 50px;
  margin-left: 10px;
  min-height: 40px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 1px solid rgb(229, 232, 240);
  padding-bottom: 9px;
`;

const MonthlyMinimumExports = styled.div`
  border-left: none;
  flex: 1 1 0%;
  text-align: center;
`;

const MainDescMinReleaseText = styled.h4`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 25px;
`;

const InfoTitle = styled.h1`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 8px;
`;

const InfoValue = styled.span`
  font-size: 12px;
`;

const MinReleaseValue = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #1d489b;
`;

const AdditionalInfo = styled.div`
  flex: 1 1 0%;
  text-align: center;
  border-left: 1px solid rgb(229, 232, 240);
`;

const DeliveryTypesWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  margin-left: 17px;
`;

const DeliveryTypesTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 5px;
`;

const DeliveryTypesListText = styled.h3`
  font-size: 14px;
`;

const ButtonWrapper = styled.div`
  width: 75%;
  margin-top: 5px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const RequestInquireButton = styled.div`
  margin-left: auto;
  width: 42%;
  padding: 10px 10px 10px 10px;
  margin-right: 10px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  color: white;
  background-color: rgb(8, 59, 148);
  border-radius: 10px 10px 10px 10px;
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

const RequestTourButton = styled.div`
  margin-right: auto;
  width: 42%;
  padding: 10px 10px 10px 10px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  color: white;
  background-color: rgb(8, 59, 148);
  border-radius: 10px 10px 10px 10px;
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

const MainDescWrapper = styled.div`
  width: 60%;
  min-width: 350px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 50px;
`;

const MainDescTitle = styled.h1`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-top: 100px;
  margin-bottom: 12px;
`;

const MainDescText = styled.span`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 16px;
  line-height: 35px;
`;

const MainDescTimeContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

const MainDescWorkHourTitle = styled.h4`
  font-weight: bold;
  margin-right: 25px;
  margin-bottom: 6px;
`;

const MainDescWorkHourText = styled.h4`
  color: grey;
`;

const MainDescRestDayCard = styled.div`
  background-color: rgb(157, 158, 163);
  color: white;
  border-radius: 10px 10px 10px 10px;
  padding: 10px;
  margin-right: 10px;
  font-weight: bold;
`;

const MainDescWorkDayCard = styled.div`
  background-color: black;
  color: white;
  border-radius: 10px 10px 10px 10px;
  padding: 10px;
  margin-right: 10px;
  font-weight: bold;
`;

const MainDescMinimumExports = styled.h4`
  margin-top: 7px;
  font-size: 14px;
`;

const MainDescInfoBox = styled.div`
  width: 90%;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border: 1px solid rgb(229, 232, 240);
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
`;

const MainDescInfoFloor = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
`;

const MainDescInfoCard = styled.div`
  width: 20%;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`;

const ExtraDescWrapper = styled.div`
  width: 60%;
  min-width: 350px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 50px;
`;
const ExtraDescMap = styled.div`
  margin-top: 50px;
  width: 500px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
`;

const ExtraDescMapTitle = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const Detail = ({ houseDetail, houseInfosArr }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=d698315979c98f65a32752dc88bd959d&autoload=false';
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
        <Image src={houseDetail.mainImageUrl} alt="HouseImage image" />
        <Desc>
          <HouseNameText>{houseDetail.name}</HouseNameText>
          <HouseLocationText>{houseDetail.address}</HouseLocationText>
          <TagContainer>
            {houseDetail.warehouseCondition.map((condition) => (
              <TagBox key={condition}>
                {conditionDic(WarehouseConditions[condition])}
              </TagBox>
            ))}
          </TagContainer>
          <AdditionInformationWrapper>
            <MonthlyMinimumExports>
              <InfoTitle>월 최소 출고량</InfoTitle>
              <MinReleaseValue>
                {houseDetail.agencyDetails.minReleasePerMonth}
              </MinReleaseValue>
            </MonthlyMinimumExports>
            <AdditionalInfo>
              <InfoTitle>평수</InfoTitle>
              <InfoValue>{houseDetail.landArea}</InfoValue>
            </AdditionalInfo>
            <AdditionalInfo>
              <InfoTitle>주력 제품</InfoTitle>
              <InfoValue>
                {categoryDic(
                  Categories[houseDetail.agencyDetails.mainItemType],
                )}
              </InfoValue>
            </AdditionalInfo>
          </AdditionInformationWrapper>
          <DeliveryTypesWrapper>
            <DeliveryTypesTitle>사용 택배사</DeliveryTypesTitle>
            <DeliveryTypesListText>
              {houseDetail.agencyDetails.deliveryTypes.map((typeName) => {
                return typeName + ', ';
              })}
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
        <MainDescText>{convertNewLine(houseDetail.description)}</MainDescText>
        <MainDescTitle>📢영업 시간</MainDescTitle>
        <MainDescTimeContainer>
          <MainDescWorkHourTitle>영업 시간</MainDescWorkHourTitle>
          <MainDescWorkHourText>
            {houseDetail.openAt} ~ {houseDetail.closeAt}
          </MainDescWorkHourText>
        </MainDescTimeContainer>
        <MainDescTimeContainer>
          <MainDescWorkHourTitle>영업 요일</MainDescWorkHourTitle>
          {returnDayBox(houseDetail.availableWeekdays)}
        </MainDescTimeContainer>
        <MainDescMinimumExports>
          *창고 상황에 따라 달라집니다.
        </MainDescMinimumExports>
        <MainDescTitle>📢월 최소 출고량</MainDescTitle>
        <MainDescMinReleaseText>
          - {houseDetail.agencyDetails.minReleasePerMonth}건
        </MainDescMinReleaseText>
        <MainDescMinimumExports>
          * 월 최소 출고량은 창고측에서 희망하는 고객들의 월 출고량을
          나타냅니다.
        </MainDescMinimumExports>
        <MainDescTitle>📢시설 정보</MainDescTitle>
        <MainDescInfoBox>
          <MainDescInfoFloor>
            <MainDescInfoCard>{houseInfosArr[0]}</MainDescInfoCard>
            <MainDescInfoCard>{houseInfosArr[1]}</MainDescInfoCard>
            <MainDescInfoCard>{houseInfosArr[2]}</MainDescInfoCard>
            <MainDescInfoCard>{houseInfosArr[3]}</MainDescInfoCard>
            <MainDescInfoCard>{houseInfosArr[4]}</MainDescInfoCard>
          </MainDescInfoFloor>
          <MainDescInfoFloor>
            <MainDescInfoCard>{houseInfosArr[5]}</MainDescInfoCard>
            <MainDescInfoCard>{houseInfosArr[6]}</MainDescInfoCard>
            <MainDescInfoCard>{houseInfosArr[7]}</MainDescInfoCard>
            <MainDescInfoCard>{houseInfosArr[8]}</MainDescInfoCard>
            <MainDescInfoCard>{houseInfosArr[9]}</MainDescInfoCard>
          </MainDescInfoFloor>
        </MainDescInfoBox>
        {houseDetail.warehouseFacilityUsages.length !== 0 && (
          <>
            <MainDescTitle>📢시설 안내</MainDescTitle>
            <MainDescText>
              {houseDetail.warehouseFacilityUsages.map((line, index) => {
                return (
                  <span key={index}>
                    • {line}
                    <br />
                  </span>
                );
              })}
            </MainDescText>
          </>
        )}
        {houseDetail.warehouseUsageCautions.length !== 0 && (
          <>
            <MainDescTitle>📢시설 이용 시 주의사항</MainDescTitle>
            <MainDescText>
              {houseDetail.warehouseUsageCautions.map((line, index) => {
                return (
                  <span key={index}>
                    • {line}
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
  houseDetail: PropTypes.object,
  houseInfosArr: PropTypes.array,
};

export default Detail;
