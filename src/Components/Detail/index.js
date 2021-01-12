import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from './Modal/ShowImageModal';
import {
  Container,
  MainImageContainer,
  ImageButton,
  DetailPageNavbarContainer,
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
  BottomContentTitle,
  BottomContentValue,
  QuoteContactButton,
} from './Detail';

const Detail = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const history = useHistory();

  const centerRef = {
    desc: React.createRef(),
    info: React.createRef(),
    announce: React.createRef(),
    caution: React.createRef(),
    position: React.createRef(),
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
        <MainImageContainer>
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
          </DetailPageNavbarWrapper>
        </DetailPageNavbarContainer>

        <MainContainer>
          <MainWrapper>
            <MainSubTitle ref={centerRef.desc}>
              인천서구 북항로 31길 B센터
            </MainSubTitle>
            <MainTitle>스토리지원</MainTitle>
            <Content lineHeight="1.8" fontSize="19px">
              인천 서구 스킨이데아 B 센터에 위치해 있습니다. 바닥 에폭시 작업 및
              밝은 조명이 설치되어 있습니다. 창고 내, 구간 별로 섹션을 나누어
              고객님들의 물품을 체계적으로 관리하고 있습니다.
              <br />
              <br />
              <br />
              주로, 생활용품, 화장품, 운동복 등, 다양한 고객님의 물품을 책임지고
              있으며, 이외에도 다양한 물품 처리가 가능합니다. 월 출고량, 기업
              규모에 상관없이 함께 성장할 수 있는 화주님을 모시고 있습니다.
              <br />
              <br />
              <br />
              스타트업 물류, 소규모 사업자, 다품종 소량 모두 처리가 가능합니다.
              재난배상, 영업배상, 화재보험 등 고객님의 물품이 보다 안전하게 처리
              될 수 있는 장치들이 마련되어 있습니다.
              <br />
            </Content>
            <SectionTitle>영업시간</SectionTitle>
            <Content fontSize="30px">09:00 ~ 18:00</Content>
            <Content>* 창고 사정에 따라 변동 될 수 있습니다.</Content>
            <SectionTitle>월 최소 출고량</SectionTitle>
            <Content>월 최소 1건 출고 필요</Content>
            <SectionTitle ref={centerRef.info}>시설 정보</SectionTitle>
            <SectionTitle>보험 가입 내역</SectionTitle>
            <Content>
              삼성화재 영업배상보험
              <br />
              롯데해상 재난배상보험
              <br />
              KB보험 화재보험
            </Content>
            <SectionTitle ref={centerRef.announce}>시설 안내 사항</SectionTitle>
            <Content>
              1. 자동 래핑 머신이 있어, 빠른 출고가 가능합니다.
              <br /> 2. 제함기(박스포장 기계)가 있습니다. <br />
              3. 이벗매니저(재고관리 프로그램)을 사용하여, 체계적인 물류 관리가
              가능합니다. <br />
              4. 거래 업체애 따라 A~Z(알파벳)으로 로케이션이 분류 되어 있습니다.
              <br /> 5. 1층에 약 600팔레트 정도 수용이 가능합니다. <br />
              6. 2층을 새 단장하여, 신규 화주분들을 모시고 있습니다.
              <br />
              7. 포장 시간이 기록되어 배송 CS가 용이합니다.
            </Content>
            <SectionTitle ref={centerRef.caution}>
              시설 이용 시 주의사항
            </SectionTitle>
            <Content>
              1. 자동 래핑 머신이 있어, 빠른 출고가 가능합니다.
              <br />
              2. 제함기(박스포장 기계)가 있습니다.
              <br />
              3. 이벗매니저(재고관리 프로그램)을 사용하여, 체계적인 물류 관리가
              가능합니다.
              <br />
              4. 거래 업체애 따라 A~Z(알파벳)으로 로케이션이 분류 되어 있습니다.
              <br />
              5. 1층에 약 600팔레트 정도 수용이 가능합니다.
              <br />
              6. 2층을 새 단장하여, 신규 화주분들을 모시고 있습니다.
              <br />
              7. 포장 시간이 기록되어 배송 CS가 용이합니다.
            </Content>
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
            <MainMapDesc>인천서구 동작구</MainMapDesc>
          </MainWrapper>
          <QuoteContactContainer>
            <ContactTitle>세방 3PL 물류</ContactTitle>
            <ContactSubTitle>경기도 고양시 중구</ContactSubTitle>
            <ContactContentWrapper>
              <LeftContent>
                <ContentTitle>월 최소 출고량</ContentTitle>
                <ContentValue>100건</ContentValue>
              </LeftContent>
              <RightContent>
                <ContentTitle>평수</ContentTitle>
                <ContentValue>2,500평</ContentValue>
              </RightContent>
            </ContactContentWrapper>
            <MainItemTypeWrapper>
              <MainItemTypeValue>악세사리</MainItemTypeValue>
              <MainItemTypeValue>서적</MainItemTypeValue>
            </MainItemTypeWrapper>
            <BottomContentTitle>택배사</BottomContentTitle>
            <BottomContentValue>CJ 대한통운 로젠택배</BottomContentValue>
            <QuoteContactButton
              onClick={() => {
                history.push('/warehouses/quotecontact');
              }}
            >
              견적 문의
            </QuoteContactButton>
          </QuoteContactContainer>
        </MainContainer>
      </Container>
    </>
  );
};
export default Detail;
