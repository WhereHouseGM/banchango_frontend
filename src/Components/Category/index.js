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
      {warehouses.map((warehouse, index) => (
        <React.Fragment key={index}>
          <ResultWrap>
            <ResultBox
              onClick={() => {
                history.push(`/warehouses/detail/${warehouse.warehouseId}`);
              }}
            >
              <ResultBoxImage src={warehouse.mainImageUrl} />
              <ResultBoxDescWrap>
                <ResultBoxDescTitle>{warehouse.name}</ResultBoxDescTitle>
                <ResultBoxDescSub>{warehouse.address}</ResultBoxDescSub>
                <ResultBoxDescBoxWrap>
                  <ResultBoxDescBoxLeft>
                    <ResultBoxDescBoxTitle>
                      월 최소 출고량
                    </ResultBoxDescBoxTitle>
                    <ResultBoxDescBoxText>
                      {warehouse.minReleasePerMonth}
                    </ResultBoxDescBoxText>
                  </ResultBoxDescBoxLeft>
                  <ResultBoxDescBoxRight>
                    <ResultBoxDescBoxTitle>평수</ResultBoxDescBoxTitle>
                    <ResultBoxDescBoxText>
                      {warehouse.space}
                    </ResultBoxDescBoxText>
                  </ResultBoxDescBoxRight>
                </ResultBoxDescBoxWrap>
                <ResultBoxDescButtonWrap>
                  {warehouse.mainItemTypes.map((type, idx) => (
                    <ResultBoxDescButton match={type.match}>
                      {type.name}
                    </ResultBoxDescButton>
                  ))}
                </ResultBoxDescButtonWrap>
                <ResultBoxDescDeliveryListTitle>
                  택배사
                </ResultBoxDescDeliveryListTitle>
                <ResultBoxDescDeliveryListText>
                  {warehouse.deliveryTypes.join(' ')}
                </ResultBoxDescDeliveryListText>
                <ResultBoxDescInquiryButton>
                  견적 문의
                </ResultBoxDescInquiryButton>
              </ResultBoxDescWrap>
            </ResultBox>
          </ResultWrap>
        </React.Fragment>
      ))}
    </Container>
  );
};

Category.propTypes = {
  warehouses: PropTypes.arrayOf(Object),
};
export default Category;
