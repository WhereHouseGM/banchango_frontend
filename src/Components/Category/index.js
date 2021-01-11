import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Container,
  CategoryPickContainer,
  CategoryPickTitle,
  CategoryPickButtonWrap,
  CategoryPickButton,
  CategoryFindButton,
  ResultWrap,
  ResultBox,
  ResultBoxImage,
  ResultBoxDescWrap,
  ResultBoxDescTitle,
  ResultBoxDescSub,
  ResultBoxDescBoxWrap,
  ResultBoxDescBoxLeft,
  ResultBoxDescBoxRight,
  ResultBoxDescBoxTitle,
  ResultBoxDescBoxText,
  ResultBoxDescButtonWrap,
  ResultBoxDescButton,
  ResultBoxDescDeliveryListTitle,
  ResultBoxDescDeliveryListText,
  ResultBoxDescInquiryButton,
  BtnArr,
} from './Category';

const Category = ({ warehouses, error, loading }) => {
  const [clicked, setClicked] = useState([]);
  const history = useHistory();
  console.log(warehouses);
  return (
    <Container>
      <CategoryPickContainer>
        <CategoryPickTitle>
          <br />
          맞춤 창고 검색
        </CategoryPickTitle>
        <CategoryPickButtonWrap>
          {BtnArr.map((button, idx) => {
            return (
              <CategoryPickButton
                id={button.id}
                key={idx}
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
                {button.name}
              </CategoryPickButton>
            );
          })}
        </CategoryPickButtonWrap>
        <CategoryFindButton>창고 찾기</CategoryFindButton>
      </CategoryPickContainer>
      <ResultWrap>
        <ResultBox
          onClick={() => {
            history.push('/warehouses/detail');
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
    </Container>
  );
};
export default Category;
