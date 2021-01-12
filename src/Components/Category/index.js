import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { categoryTitleDict } from '../../static/category';
import { message } from 'antd';

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
import { warehouseApi } from '../../api';

const Category = ({ warehouses }) => {
  const [results, setResults] = useState(warehouses === null ? [] : warehouses);
  const [clicked, setClicked] = useState([]);
  const selectedMainItemTypes = sessionStorage.getItem('MainItemTypes');
  const [clickedItems, setClickedItems] = useState(
    selectedMainItemTypes === null || selectedMainItemTypes === undefined
      ? 'CLOTH'
      : selectedMainItemTypes,
  );
  const history = useHistory();
  const getApi = useCallback(async () => {
    try {
      let _results = await warehouseApi.getByMainItemTypes(clickedItems, 0, 10);
      let { status } = _results;
      if (status !== 200) throw new Error();
      const {
        data: { warehouses },
      } = _results;
      setResults(warehouses);
    } catch (Error) {
      message.warning('검색 결과가 존재하지 않습니다.');
    }
  }, [clickedItems]);
  useEffect(() => {
    let clickedArr = JSON.parse(sessionStorage.getItem('ClickedButton'));
    !!clickedArr ? setClicked(clickedArr) : setClicked([true]);
  }, []);

  useEffect(() => {
    getApi();
  }, [getApi]);

  const getClickedMainItemTypes = () => {
    let clickedMainItemTypes = [];
    for (let i = 0; i < clicked.length; i++) {
      if (clicked[i] === true) {
        clickedMainItemTypes.push(BtnArr[i].id);
      }
    }
    return clickedMainItemTypes;
  };

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
        <CategoryFindButton
          onClick={() => {
            if (getClickedMainItemTypes().length === 0) {
              message.warning('상품 종류를 1개 이상 선택해 주세요!');
              return;
            } else {
              setClickedItems(getClickedMainItemTypes().join(',').toString());
            }
          }}
        >
          창고 찾기
        </CategoryFindButton>
      </CategoryPickContainer>
      {results.map((warehouse, index) => (
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
                    <ResultBoxDescButton key={idx} match={type.match}>
                      {categoryTitleDict(type.name)}
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
