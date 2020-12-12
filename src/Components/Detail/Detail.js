import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HouseImage from '../../assets/images/TEMP.jpeg';

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
  /* background-color: rgb(180, 196, 223); */
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

const DeliveryTypesListText = styled.h3``;

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
`;

const MainDescriptionTitle = styled.h1`
  font-size: 26px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const MainDescriptionText = styled.span`
  /* padding-left: 20px; */
  font-size: 22px;
  line-height: 40px;
`;

const MainDescriptionOpenTime = styled.h4`
  font-size: 20px;
  font-weight: bold;
`;

const MainDescriptionMinimumExports = styled.h4`
  font-size: 14px;
`;

const MainDescriptionInfoBox = styled.div`
  background-color: white;
  display: flex;
  border: 1px solid rgb(229, 232, 240);
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
`;

const Detail = ({ houseDetail }) => (
  <Container>
    <HouseContainer>
      <Image src={HouseImage} alt="HouseImage image" />
      <Description>
        <HouseNameText>{houseDetail.name}</HouseNameText>
        <HouseLocationText>경기도 고양시 동구</HouseLocationText>
        <TagContainer>
          <TagBox>상온보관</TagBox>
          <TagBox>냉동보관</TagBox>
        </TagContainer>
        <AdditionInformationWrapper>
          <MonthlyMinimumExports>
            <InfoTitle>월 최소 출고량</InfoTitle>
            <MinReleaseValue>{'최소 출고량'}</MinReleaseValue>
          </MonthlyMinimumExports>
          <AdditionalInfo>
            <InfoTitle>평수</InfoTitle>
            <InfoValue>{'평수'}</InfoValue>
          </AdditionalInfo>
          <AdditionalInfo>
            <InfoTitle>주력 제품</InfoTitle>
            <InfoValue>{'주력 제품'}</InfoValue>
          </AdditionalInfo>
        </AdditionInformationWrapper>
        <DeliveryTypesWrapper>
          <DeliveryTypesTitle>사용 택배사</DeliveryTypesTitle>
          <DeliveryTypesListText>CJ 대한통운, 로젠택배</DeliveryTypesListText>
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
        - 서울 내 한시간 거리의 창고와 계약 / 제휴가 되어 있어 탄력적 운영이
        가능하고 물량 증가에 대응이 가능합니다.
        <br />
        - 상품별 특화 창고를 운영합니다.
        <br />
        - 창고용 물류관리시스템이 온라인으로 구축되어 있어 일련의 출고 과정을
        실시간으로 조회할 수 있습니다.
        <br />
      </MainDescriptionText>
      <MainDescriptionTitle>📢영업 시간</MainDescriptionTitle>
      <MainDescriptionOpenTime>09:00 ~ 18:00</MainDescriptionOpenTime>
      <MainDescriptionText>
        -월, 화, 수
        <br />
      </MainDescriptionText>
      <MainDescriptionMinimumExports>
        *창고 상황에 따라 달라집니다.
      </MainDescriptionMinimumExports>
      <MainDescriptionTitle>📢월 최소 출고량</MainDescriptionTitle>
      <MainDescriptionText>
        - 1건
        <br />
      </MainDescriptionText>
      <MainDescriptionMinimumExports>
        * 월 최소 출고량은 창고측에서 희망하는 고객들의 월 출고량을 나타냅니다.
      </MainDescriptionMinimumExports>
      <MainDescriptionTitle>📢시설 정보</MainDescriptionTitle>
      <MainDescriptionInfoBox>
        여기에 시설 정보 들어감.
        <br />
      </MainDescriptionInfoBox>
      <MainDescriptionTitle>
        <br />
        📢시설 안내
      </MainDescriptionTitle>
      <MainDescriptionText>
        1. 물품을 바코딩 및 박싱 작업.
        <br />
        2.asdf
        <br />
      </MainDescriptionText>
      <MainDescriptionTitle>📢시설 이용 시 주의사항</MainDescriptionTitle>
      <MainDescriptionText>
        1. 물품을 바코딩 및 박싱 작업.
        <br />
        2.asdf
        <br />
        <br />
      </MainDescriptionText>{' '}
    </MainDescriptionWrapper>
  </Container>
);

Detail.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toSignupPage: PropTypes.func.isRequired,
};

export default Detail;
