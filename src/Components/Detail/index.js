import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Modal from './Modal/ShowImageModal';
import {
  Container,
  MainImageContainer,
  ImageButton,
  DetailPageNavbarContainer,
  DetailPageNavbarItemsWrapper,
  DetailPageNavbarWrapper,
  DetailGotoButton,
  MainContainer,
  MainWrapper,
  MainSubTitle,
  MainTitle,
  Content,
  SectionTitle,
  MainMapImg,
  MainMapDesc,
  QuoteContactContainer,
  ContactTitle,
  ContactSubTitle,
  ContactContentWrapper,
  LeftContent,
  RightContent,
  ContentTitle,
  ContentValue,
  MainItemTypeWrapper,
  MainItemTypeValue,
  DetailPageNavbarMargin,
  BottomContentTitle,
  BottomContentValue,
  QuoteContactButton,
  WorkDaysWrapper,
  WorkDayBox,
} from './Detail';
import { categoryTitleDict } from '../../static/category';
import { dayOfWeek } from '../../static/detail';

const Detail = ({ warehouse }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const history = useHistory();

  const centerRef = {
    desc: React.createRef(),
    info: React.createRef(),
    announce: React.createRef(),
    caution: React.createRef(),
    position: React.createRef(),
  };
  const getWorkingWeekDayArr = () => {
    let resultArr = [...warehouse.availableWeekdays.toString()];
    while (true) {
      if (resultArr.length === 7) break;
      resultArr = ['0', ...resultArr];
    }
    return resultArr;
  };

  const scrollFunc = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop - 90, behavior: 'smooth' });
  };

  return (
    <>
      <Modal
        className="Modal"
        onClose={() => {
          setModalVisible(false);
        }}
        visible={modalVisible}
      />
      <Container>
        <MainImageContainer bgImage={warehouse.mainImageUrl}>
          <ImageButton
            onClick={() => {
              setModalVisible(true);
            }}
          >
            시설보기
          </ImageButton>
        </MainImageContainer>
        <DetailPageNavbarContainer>
          <DetailPageNavbarWrapper>
            <DetailPageNavbarItemsWrapper>
              <DetailGotoButton
                onClick={() => {
                  scrollFunc(centerRef.desc);
                }}
              >
                센터 소개
              </DetailGotoButton>
              <DetailGotoButton
                onClick={() => {
                  scrollFunc(centerRef.info);
                }}
              >
                시설 정보
              </DetailGotoButton>
              <DetailGotoButton
                onClick={() => {
                  scrollFunc(centerRef.announce);
                }}
              >
                시설 안내사항
              </DetailGotoButton>
              <DetailGotoButton
                onClick={() => {
                  scrollFunc(centerRef.caution);
                }}
              >
                주의사항
              </DetailGotoButton>
              <DetailGotoButton
                onClick={() => {
                  scrollFunc(centerRef.position);
                }}
              >
                위치정보
              </DetailGotoButton>
            </DetailPageNavbarItemsWrapper>
            <DetailPageNavbarMargin />
          </DetailPageNavbarWrapper>
        </DetailPageNavbarContainer>
        <MainContainer>
          <MainWrapper>
            <MainSubTitle ref={centerRef.desc}>
              {warehouse.address}&nbsp;{warehouse.addressDetail}
            </MainSubTitle>
            <MainTitle>{warehouse.name}</MainTitle>
            <Content lineHeight="1.8" fontSize="19px">
              {warehouse.description}
            </Content>
            <SectionTitle>영업시간</SectionTitle>
            <Content fontSize="30px">
              {warehouse.openAt}&nbsp;~&nbsp;{warehouse.closeAt}
            </Content>
            <Content>{warehouse.availableTimeDetail}</Content>
            <WorkDaysWrapper>
              {getWorkingWeekDayArr().map((item, idx) => (
                <WorkDayBox key={idx} workOn={item === '1'}>
                  {dayOfWeek[idx].value}
                </WorkDayBox>
              ))}
            </WorkDaysWrapper>
            <SectionTitle>월 최소 출고량</SectionTitle>
            <Content>
              월 최소 {warehouse.minReleasePerMonth}건 출고 필요
            </Content>
            <SectionTitle ref={centerRef.info}>시설 정보</SectionTitle>
            <SectionTitle>보험 가입 내역</SectionTitle>
            {warehouse.insurances.map((insurance, idx) => {
              return (
                <React.Fragment key={`INSURANCE${idx}`}>
                  <Content>
                    {idx + 1}. {insurance}
                  </Content>
                  <br />
                </React.Fragment>
              );
            })}
            <SectionTitle ref={centerRef.announce}>시설 안내 사항</SectionTitle>
            {warehouse.warehouseFacilityUsages.map((usage, idx) => {
              return (
                <React.Fragment key={`WFU${idx}`}>
                  <Content>
                    {idx + 1}. {usage}
                  </Content>
                  <br />
                </React.Fragment>
              );
            })}
            <SectionTitle ref={centerRef.caution}>
              시설 이용 시 주의사항
            </SectionTitle>
            {warehouse.warehouseUsageCautions.map((caution, idx) => {
              return (
                <React.Fragment key={`WUC${idx}`}>
                  <Content>
                    {idx + 1}. {caution}
                  </Content>
                  <br />
                </React.Fragment>
              );
            })}
            <SectionTitle ref={centerRef.position} textAlign="center">
              위치 정보
            </SectionTitle>
            <div style={{ margin: '0px auto', width: '50%' }}>
              <MainMapImg
                src={
                  'https://user-images.githubusercontent.com/62606632/103610746-3043b680-4f64-11eb-92bd-d30b57349f4a.png'
                }
              />
            </div>
            <MainMapDesc>{warehouse.address}</MainMapDesc>
          </MainWrapper>
          <QuoteContactContainer>
            <ContactTitle>{warehouse.name}</ContactTitle>
            <ContactSubTitle>{warehouse.address}</ContactSubTitle>
            <MainItemTypeWrapper>
              {warehouse.mainItemTypes.map((type, idx) => {
                return (
                  <MainItemTypeValue key={idx}>
                    {categoryTitleDict(type)}
                  </MainItemTypeValue>
                );
              })}
            </MainItemTypeWrapper>
            <ContactContentWrapper>
              <LeftContent>
                <ContentTitle>월 최소 출고량</ContentTitle>
                <ContentValue>{warehouse.minReleasePerMonth}건</ContentValue>
              </LeftContent>
              <RightContent>
                <ContentTitle>평수</ContentTitle>
                <ContentValue>{warehouse.space}평</ContentValue>
              </RightContent>
            </ContactContentWrapper>

            <BottomContentTitle>택배사</BottomContentTitle>
            <BottomContentValue>
              {warehouse.deliveryTypes.map((type) => type + ' ')}
            </BottomContentValue>
            <QuoteContactButton
              onClick={() => {
                history.push(
                  `/warehouses/quotecontact/${warehouse.warehouseId}`,
                );
              }}
            >
              견적 요청하기
            </QuoteContactButton>
          </QuoteContactContainer>
        </MainContainer>
      </Container>
    </>
  );
};

Detail.propTypes = {
  warehouse: PropTypes.object.isRequired,
};

export default Detail;
