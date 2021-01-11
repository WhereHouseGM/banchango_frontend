import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Modal from './Modal/ShowImageModal';

const Con = styled.div`
  width: 100%;
  font-family: 'paybooc-Medium', sans-serif;
  text-align: center;
`;
const FirstBigImgCon = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('https://user-images.githubusercontent.com/62606632/103606209-36806580-4f59-11eb-9aaa-bd46b5f17b30.png');
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
const FirstBigImgButton = styled.div`
  background-color: white;
  color: black;
  font-weight: bold;
  border-radius: 20px;
  padding: 10px 25px;
  margin: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const FirstRefsWrapWrap = styled.div`
  background-color: white;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  /* left: 0; */
`;
const FirstRefsWrap = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 20px;
`;
const FirstRef = styled.div`
  color: #0079c0;
  font-weight: bold;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const MainCon = styled.div`
  width: 100%;
  padding: 30px 0;
  text-align: left;
  display: flex;
  justify-content: center;
`;
const MainWrap = styled.div`
  width: 90%;
  max-width: 900px;
  line-height: 1.65;
  justify-self: center;
`;
const MainSubTitle = styled.div`
  font-weight: bold;
  color: #50d5b3;
`;
const MainTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: #0079c0;
`;
const MainDesc = styled.div`
  margin: 30px 0;
  font-size: ${(props) => props.fontSize || '20px'};
  line-height: ${(props) => props.lineHeight || '2'};
`;
const MainSmallTitle = styled.div`
  margin-top: 100px;
  font-size: 25px;
  color: #0079c0;
  font-weight: bold;
  text-align: ${(props) => props.textAlign || 'left'};
`;
const MainMapImg = styled.img`
  margin: 20px auto;
  width: 100%;
`;
const MainMapDesc = styled.div`
  text-align: center;
  font-size: 16px;
  color: #8c9ca6;
  font-weight: bold;
`;
const RightDesc = styled.div`
  margin-left: 30px;
  width: 300px;
  padding: 20px;
  height: 420px;
  background-color: white;
  position: sticky;
  top: 110px;
  /* border: 1px solid black; */
  border-radius: 20px;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
`;

const ResultBoxDescTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 18px;
`;
const ResultBoxDescSub = styled.div`
  font-size: 15px;
`;
const ResultBoxDescBoxWrap = styled.div`
  margin: 23px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  text-align: center;
`;
const ResultBoxDescBoxLeft = styled.div`
  width: 48%;
  padding: 20px 0;
  border-right: 1px solid black;
`;
const ResultBoxDescBoxRight = styled.div`
  width: 48%;
  padding: 20px 0;
`;
const ResultBoxDescBoxTitle = styled.div`
  /* margin-top: 30px; */
  font-weight: bold;
`;
const ResultBoxDescBoxText = styled.div`
  margin-top: 5px;
`;
const ResultBoxDescButtonWrap = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
`;
const ResultBoxDescButton = styled.div`
  margin: 5px;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 20px;
`;
const ResultBoxDescDeliveryListTitle = styled.div`
  margin-top: 25px;
  font-weight: bold;
  font-size: 23px;
`;
const ResultBoxDescDeliveryListText = styled.div`
  margin: 10px 0;
  font-size: 17px;
`;
const ResultBoxDescInquiryButton = styled.div`
  margin: 30px auto 0 auto;
  padding: 10px 20px;
  border: 1px solid #1e56a0;
  border-radius: 20px;
  font-size: 20px;
  text-align: center;
  color: #1e56a0;
  font-weight: bold;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
  }
`;
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
        className={'Modal'}
        onClose={() => {
          setModalVisible(false);
        }}
        visible={modalVisible}
      />
      <Con>
        <FirstBigImgCon>
          <FirstBigImgButton
            onClick={() => {
              setModalVisible(true);
            }}
          >
            시설보기
          </FirstBigImgButton>
        </FirstBigImgCon>
        <FirstRefsWrapWrap>
          <FirstRefsWrap>
            <FirstRef
              onClick={() => {
                scrollFunc(centerRef.desc);
              }}
            >
              센터 소개
            </FirstRef>
            <FirstRef
              onClick={() => {
                scrollFunc(centerRef.info);
              }}
            >
              시설 정보
            </FirstRef>
            <FirstRef
              onClick={() => {
                scrollFunc(centerRef.announce);
              }}
            >
              시설 안내사항
            </FirstRef>
            <FirstRef
              onClick={() => {
                scrollFunc(centerRef.caution);
              }}
            >
              주의사항
            </FirstRef>
            <FirstRef
              onClick={() => {
                scrollFunc(centerRef.position);
              }}
            >
              위치정보
            </FirstRef>
          </FirstRefsWrap>
        </FirstRefsWrapWrap>

        <MainCon>
          <MainWrap>
            <MainSubTitle ref={centerRef.desc}>
              인천서구 북항로 31길 B센터 스토리지원
            </MainSubTitle>
            <MainTitle>스토리지원</MainTitle>
            <MainDesc lineHeight={'1.8'} fontSize={'19px'}>
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
            </MainDesc>
            <MainSmallTitle>영업시간</MainSmallTitle>
            <MainDesc fontSize={'30px'}>09:00 ~ 18:00</MainDesc>
            <MainDesc>* 창고 사정에 따라 변동 될 수 있습니다.</MainDesc>
            <MainSmallTitle>월 최소 출고량</MainSmallTitle>
            <MainDesc>월 최소 1건 출고 필요</MainDesc>
            <MainSmallTitle ref={centerRef.info}>시설 정보</MainSmallTitle>
            <MainSmallTitle>보험 가입 내역</MainSmallTitle>
            <MainDesc>
              삼성화재 영업배상보험
              <br />
              롯데해상 재난배상보험
              <br />
              KB보험 화재보험
            </MainDesc>
            <MainSmallTitle ref={centerRef.announce}>
              시설 안내 사항
            </MainSmallTitle>
            <MainDesc>
              1. 자동 래핑 머신이 있어, 빠른 출고가 가능합니다.
              <br /> 2. 제함기(박스포장 기계)가 있습니다. <br />
              3. 이벗매니저(재고관리 프로그램)을 사용하여, 체계적인 물류 관리가
              가능합니다. <br />
              4. 거래 업체애 따라 A~Z(알파벳)으로 로케이션이 분류 되어 있습니다.
              <br /> 5. 1층에 약 600팔레트 정도 수용이 가능합니다. <br />
              6. 2층을 새 단장하여, 신규 화주분들을 모시고 있습니다.
              <br />
              7. 포장 시간이 기록되어 배송 CS가 용이합니다.
            </MainDesc>
            <MainSmallTitle ref={centerRef.caution}>
              시설 이용 시 주의사항
            </MainSmallTitle>
            <MainDesc>
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
            </MainDesc>
            <MainSmallTitle ref={centerRef.position} textAlign={'center'}>
              위치 정보
            </MainSmallTitle>
            <div style={{ margin: '0px auto', width: '50%' }}>
              <MainMapImg
                src={
                  'https://user-images.githubusercontent.com/62606632/103610746-3043b680-4f64-11eb-92bd-d30b57349f4a.png'
                }
              />
            </div>
            <MainMapDesc>인천서구 동작구</MainMapDesc>
          </MainWrap>
          <RightDesc>
            <ResultBoxDescTitle>세방 3PL 물류</ResultBoxDescTitle>
            <ResultBoxDescSub>경기도 고양시 중구</ResultBoxDescSub>
            <ResultBoxDescBoxWrap>
              <ResultBoxDescBoxLeft>
                <ResultBoxDescBoxTitle>월 최소 출고량</ResultBoxDescBoxTitle>
                <ResultBoxDescBoxText>100건</ResultBoxDescBoxText>
              </ResultBoxDescBoxLeft>
              <ResultBoxDescBoxRight>
                <ResultBoxDescBoxTitle>평수</ResultBoxDescBoxTitle>
                <ResultBoxDescBoxText>2,500평</ResultBoxDescBoxText>
              </ResultBoxDescBoxRight>
            </ResultBoxDescBoxWrap>
            <ResultBoxDescButtonWrap>
              <ResultBoxDescButton>악세사리</ResultBoxDescButton>
              <ResultBoxDescButton>서적</ResultBoxDescButton>
            </ResultBoxDescButtonWrap>
            <ResultBoxDescDeliveryListTitle>
              택배사
            </ResultBoxDescDeliveryListTitle>
            <ResultBoxDescDeliveryListText>
              CJ 대한통운 로젠택배
            </ResultBoxDescDeliveryListText>
            <ResultBoxDescInquiryButton
              onClick={() => {
                history.push('/warehouses/quotecontact');
              }}
            >
              견적 문의
            </ResultBoxDescInquiryButton>
          </RightDesc>
        </MainCon>
      </Con>
    </>
  );
};
export default Detail;
