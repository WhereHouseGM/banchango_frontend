import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const convertNewLine = (original) => {
  return original.split('\r').map(function (item, idx) {
    return (
      <span key={idx}>
        • {item}
        <br />
      </span>
    );
  });
};

const convertDayBox = (originalDay) => {
  let dayCharArray = [];
  let arrOriginalDay = originalDay.toString().split('');
  for (let i = 0; i < 7 - arrOriginalDay.length; i++) {
    dayCharArray.push('0');
  }
  dayCharArray = [...dayCharArray, ...arrOriginalDay];
  // TODO: map으로 월 화 수 목 금 카드 만들기
  dayCharArray.map();
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

const Description = styled.div`
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

const MainDescriptionMinReleaseText = styled.h4`
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

const MainDescriptionWrapper = styled.div`
  width: 60%;
  min-width: 350px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 50px;
`;

const MainDescriptionTitle = styled.h1`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-top: 100px;
  margin-bottom: 12px;
`;

const MainDescriptionText = styled.span`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 16px;
  line-height: 35px;
`;

const MainDescriptionTimeContainer = styled.div`
  display: flex;
`;

const MainDescriptionWorkHourTitle = styled.h4`
  font-weight: bold;
  margin-right: 25px;
  margin-bottom: 6px;
`;

const MainDescriptionWorkHourText = styled.h4`
  color: grey;
`;

const MainDescriptionMinimumExports = styled.h4`
  margin-top: 7px;
  font-size: 14px;
`;

const MainDescriptionInfoBox = styled.div`
  width: 90%;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border: 1px solid rgb(229, 232, 240);
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
`;

const MainDescriptionInfoFloor = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
`;

const MainDescriptionInfoCard = styled.div`
  width: 20%;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`;

const ExtraDescriptionWrapper = styled.div`
  width: 60%;
  min-width: 350px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 50px;
`;
const ExtraDescriptionMap = styled.div`
  margin-top: 50px;
  width: 500px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
`;

const ExtraDescriptionMapTitle = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const Detail = ({ houseDetail, houseInfosArr }) => {
  useEffect(() => {
    let mapElement = document.getElementById('map');
    // DUMMY
    let position = new window.daum.maps.LatLng(37.496314, 126.9553);
    let map = new window.daum.maps.Map(mapElement, {
      center: position,
      level: 5,
    });
    let marker = new window.daum.maps.Marker({
      position: position,
    });
    marker.setMap(map);
  }, []);
  return (
    <Container>
      <HouseContainer>
        <Image src={houseDetail.mainImageUrl} alt="HouseImage image" />
        <Description>
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
        </Description>
      </HouseContainer>
      <MainDescriptionWrapper>
        <MainDescriptionTitle>📢창고 소개</MainDescriptionTitle>
        <MainDescriptionText>
          {convertNewLine(houseDetail.description)}
        </MainDescriptionText>
        <MainDescriptionTitle>📢영업 시간</MainDescriptionTitle>
        <MainDescriptionTimeContainer>
          <MainDescriptionWorkHourTitle>영업 시간</MainDescriptionWorkHourTitle>
          <MainDescriptionWorkHourText>
            {houseDetail.openAt} ~ {houseDetail.closeAt}
          </MainDescriptionWorkHourText>
        </MainDescriptionTimeContainer>
        <MainDescriptionTimeContainer>
          <MainDescriptionWorkHourTitle>영업 요일</MainDescriptionWorkHourTitle>
          <MainDescriptionWorkHourText>
            {convertDayBox(houseDetail.availableWeekdays)}
          </MainDescriptionWorkHourText>
        </MainDescriptionTimeContainer>
        <MainDescriptionMinimumExports>
          *창고 상황에 따라 달라집니다.
        </MainDescriptionMinimumExports>
        <MainDescriptionTitle>📢월 최소 출고량</MainDescriptionTitle>
        <MainDescriptionMinReleaseText>
          - {houseDetail.agencyDetails.minReleasePerMonth}건
        </MainDescriptionMinReleaseText>
        <MainDescriptionMinimumExports>
          * 월 최소 출고량은 창고측에서 희망하는 고객들의 월 출고량을
          나타냅니다.
        </MainDescriptionMinimumExports>
        <MainDescriptionTitle>📢시설 정보</MainDescriptionTitle>
        <MainDescriptionInfoBox>
          <MainDescriptionInfoFloor>
            <MainDescriptionInfoCard>
              {houseInfosArr[0]}
            </MainDescriptionInfoCard>
            <MainDescriptionInfoCard>
              {houseInfosArr[1]}
            </MainDescriptionInfoCard>
            <MainDescriptionInfoCard>
              {houseInfosArr[2]}
            </MainDescriptionInfoCard>
            <MainDescriptionInfoCard>
              {houseInfosArr[3]}
            </MainDescriptionInfoCard>
            <MainDescriptionInfoCard>
              {houseInfosArr[4]}
            </MainDescriptionInfoCard>
          </MainDescriptionInfoFloor>
          <MainDescriptionInfoFloor>
            <MainDescriptionInfoCard>
              {houseInfosArr[5]}
            </MainDescriptionInfoCard>
            <MainDescriptionInfoCard>
              {houseInfosArr[6]}
            </MainDescriptionInfoCard>
            <MainDescriptionInfoCard>
              {houseInfosArr[7]}
            </MainDescriptionInfoCard>
            <MainDescriptionInfoCard>
              {houseInfosArr[8]}
            </MainDescriptionInfoCard>
            <MainDescriptionInfoCard>
              {houseInfosArr[9]}
            </MainDescriptionInfoCard>
          </MainDescriptionInfoFloor>
        </MainDescriptionInfoBox>
        {/* TODO: string array using map */}
        {houseDetail.warehouseFacilityUsages.length !== 0 && (
          <>
            <MainDescriptionTitle>📢시설 안내</MainDescriptionTitle>
            <MainDescriptionText>
              1. 물품을 바코딩 및 박싱 작업.
            </MainDescriptionText>
          </>
        )}
        {houseDetail.warehouseUsageCautions.length !== 0 && (
          <>
            <MainDescriptionTitle>📢시설 이용 시 주의사항</MainDescriptionTitle>
            <MainDescriptionText>
              1. 물품을 바코딩 및 박싱 작업.
            </MainDescriptionText>
          </>
        )}
      </MainDescriptionWrapper>
      <ExtraDescriptionWrapper>
        <ExtraDescriptionMapTitle>위치 정보</ExtraDescriptionMapTitle>
        <ExtraDescriptionMap id="map"></ExtraDescriptionMap>
      </ExtraDescriptionWrapper>
    </Container>
  );
};

Detail.propTypes = {
  // TODO: propTypes edit
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toSignupPage: PropTypes.func.isRequired,
};

export default Detail;
