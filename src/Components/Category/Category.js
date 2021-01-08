import React, { useState } from 'react';
import styled from 'styled-components';
const Con = styled.div`
  width: 100%;
  text-align: center;
  font-family: 'paybooc-Medium', sans-serif;
`;
const CategoryPickCon = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;
const CategoryPickTitle = styled.div`
  margin-top: -8px;
  font-weight: bold;
  width: 16%;
  font-size: 25px;
`;
const CategoryPickButtonWrap = styled.div`
  width: 63%;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-self: center;
`;
const CategoryPickButton = styled.div`
  width: 8%;
  min-width: 120px;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1023px) {
    width: 31%;
  }
`;
const CategoryFindButton = styled.div`
  padding: 15px 20px;
  background-color: #1e56a0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  color: white;
  border-radius: 20px;
  align-self: center;
`;
const ResultWrap = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const ResultBox = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 90%;
  height: 500px;
  display: flex;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
  margin: 20px;
  transition: all 0.2s ease;
  &:hover {
    transform: translateZ(0) scale(0.995);
  }
`;
const ResultBoxImage = styled.img`
  /* background-color: grey; */
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center center;
  /* flex: 1; */
  margin-right: -400px;
  padding-right: 400px;

  &:hover {
    cursor: pointer;
  }
`;
const ResultBoxDescWrap = styled.div`
  /* width: 400px; */
  min-width: 400px;
  /* flex:1; */
  text-align: left;
  padding: 30px;
`;
const ResultBoxDescTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 18px;
`;
const ResultBoxDescSub = styled.div`
  font-size: 20px;
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
  height: 100px;
  border-right: 1px solid black;
`;
const ResultBoxDescBoxRight = styled.div`
  width: 48%;
  height: 100px;
`;
const ResultBoxDescBoxTitle = styled.div`
  margin-top: 30px;
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
const Category = () => {
  const ButtonsName = [
    '의류',
    '화장품',
    '악세서리',
    '잡화',
    '식품',
    '서적',
    '인테리어',
    '전자기기',
    '스포츠',
    '냉동',
    '냉장',
    '대형물품',
  ];
  const [clicked, setClicked] = useState([]);
  return (
    <Con>
      <CategoryPickCon>
        <CategoryPickTitle>
          <br />
          맞춤 창고 검색
        </CategoryPickTitle>
        <CategoryPickButtonWrap>
          {ButtonsName.map((name, idx) => {
            return (
              <CategoryPickButton
                onClick={() => {
                  let temp = clicked;
                  temp[idx] = !temp[idx];
                  setClicked([...temp]);
                }}
                style={
                  clicked[idx]
                    ? { backgroundColor: '#1e56a0', color: 'white' }
                    : { backgroundColor: 'white', color: 'black' }
                }
              >
                {name}
              </CategoryPickButton>
            );
          })}
        </CategoryPickButtonWrap>
        <CategoryFindButton>창고 찾기</CategoryFindButton>
      </CategoryPickCon>
      <ResultWrap>
        <ResultBox
          onClick={() => {
            window.location.href = '/warehouses/detail';
          }}
        >
          <ResultBoxImage
            src={
              'https://user-images.githubusercontent.com/62606632/103597537-d0d5ae80-4f43-11eb-971e-cecfe088eada.png'
            }
          />
          <ResultBoxDescWrap>
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
            <ResultBoxDescInquiryButton>견적 문의</ResultBoxDescInquiryButton>
          </ResultBoxDescWrap>
        </ResultBox>
        <ResultBox></ResultBox>
      </ResultWrap>
    </Con>
  );
};
export default Category;
