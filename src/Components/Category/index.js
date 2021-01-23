import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { categoryTitleDict } from '../../static/category';
import { message } from 'antd';
import Loading from '../../Components/Loading';

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
  MobileCategoryTitle,
  MobileSelectedCategoryListWrapper,
  MobileSelectedCategoryText,
  MobileSelectedCategoryArrow,
  MobileResultBox,
  MobileResultImage,
  MobileResultBottomWrapper,
  MobileResultHouseName,
  MobileResultAddress,
  MobileResultCategoryButtonWrapper,
  MobileResultQuoteContactButton,
  MobileResultCategoryButton,
  MobileCategoryPickerBox,
  MobileCategoryPickerButtonWrapper,
  MobileCategoryPickerButton,
  MobileCategoryFindButton,
  ShowMoreButton,
} from './Category';
import DownButton from '../../assets/icons/DownButton.png';
import { warehouseApi } from '../../api';
import { searchWarehouseEvent } from '../GoogleAnalytics';

const Category = () => {
  const [results, setResults] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isExtraLoading, setIsExtraLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const selectedMainItemTypes = sessionStorage.getItem('MainItemTypes');
  const [
    mobileCategoryPickerClicked,
    setMobileCategoryPickerClicked,
  ] = useState(false);
  const [clickedItems, setClickedItems] = useState(
    selectedMainItemTypes === null || selectedMainItemTypes === undefined
      ? 'GENERAL_MERCHANDISE'
      : selectedMainItemTypes,
  );
  const history = useHistory();
  const getApi = useCallback(async () => {
    warehouseApi
      .getByMainItemTypes(clickedItems, pageIndex, 10)
      .then(({ data: { warehouses } }) => {
        if (isExtraLoading) {
          setResults((prevResults) => [...prevResults, ...warehouses]);
        } else {
          setResults(warehouses);
          if (warehouses.length !== 0) {
            window.scrollTo({
              top: document.getElementById('resultTop').offsetTop,
              behavior: 'smooth',
            });
          }
        }
        setLoading(false);
      })
      .catch(({ response: { status } }) => {
        if (status === 404) {
          if (isExtraLoading) {
            message.warning('더 이상 검색 결과가 없습니다.');
          } else {
            message.warning('검색 결과가 존재하지 않습니다.');
          }
        } else {
        }
        setLoading(false);
      });
  }, [clickedItems, pageIndex, isExtraLoading, setResults]);

  useEffect(() => {
    let clickedArr = JSON.parse(sessionStorage.getItem('ClickedButton'));
    !!clickedArr
      ? setClicked(clickedArr)
      : setClicked([false, false, false, true]);
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
              searchWarehouseEvent();
              if (
                getClickedMainItemTypes().join(',').toString() !== clickedItems
              ) {
                setIsExtraLoading(false);
                setPageIndex(0);
                setClickedItems(getClickedMainItemTypes().join(',').toString());
              } else {
                setClickedItems(getClickedMainItemTypes().join(',').toString());
              }
            }
          }}
        >
          창고 검색
        </CategoryFindButton>
        <MobileCategoryTitle>맞춤 창고 검색</MobileCategoryTitle>
        <MobileSelectedCategoryListWrapper
          onClick={() => {
            setMobileCategoryPickerClicked(!mobileCategoryPickerClicked);
          }}
        >
          <MobileSelectedCategoryText>
            {getClickedMainItemTypes().map((item, idx) => {
              if (getClickedMainItemTypes().length - 1 === idx) {
                return <span key={idx}>{categoryTitleDict(item)}</span>;
              } else {
                return <span key={idx}>{categoryTitleDict(item) + ', '}</span>;
              }
            })}
          </MobileSelectedCategoryText>
          <MobileSelectedCategoryArrow src={DownButton} alt={'화살표 아이콘'} />
        </MobileSelectedCategoryListWrapper>
        <MobileCategoryPickerBox
          style={
            mobileCategoryPickerClicked
              ? { display: 'block' }
              : { display: 'none' }
          }
        >
          <MobileCategoryPickerButtonWrapper>
            {BtnArr.map((button, idx) => {
              return (
                <MobileCategoryPickerButton
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
                </MobileCategoryPickerButton>
              );
            })}
          </MobileCategoryPickerButtonWrapper>
          <MobileCategoryFindButton
            onClick={() => {
              if (getClickedMainItemTypes().length === 0) {
                message.warning('상품 종류를 1개 이상 선택해 주세요!');
                return;
              } else {
                searchWarehouseEvent();
                setClickedItems(getClickedMainItemTypes().join(',').toString());
                setMobileCategoryPickerClicked(false);
              }
            }}
          >
            창고 검색
          </MobileCategoryFindButton>
        </MobileCategoryPickerBox>
      </CategoryPickContainer>
      <div id="resultTop" />
      {loading ? (
        <Loading />
      ) : (
        results.map((warehouse, index) => (
          <React.Fragment key={index}>
            <ResultWrap>
              <ResultBox>
                <ResultBoxImage
                  src={warehouse.mainImageUrl}
                  alt={'창고 사진'}
                  onClick={() => {
                    history.push(
                      `/warehouses/detail/${warehouse.warehouseId}/${warehouse.name}`,
                    );
                  }}
                />
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
                  <ResultBoxDescInquiryButton
                    onClick={() => {
                      history.push(
                        `/warehouses/detail/${warehouse.warehouseId}/${warehouse.name}`,
                      );
                    }}
                  >
                    창고 상세보기
                  </ResultBoxDescInquiryButton>
                </ResultBoxDescWrap>
              </ResultBox>
            </ResultWrap>
          </React.Fragment>
        ))
      )}
      {loading ? (
        <Loading />
      ) : (
        results.map((warehouse, index) => (
          <MobileResultBox key={index}>
            <MobileResultImage
              src={warehouse.mainImageUrl}
              alt={'창고 메인 이미지'}
              onClick={() => {
                history.push(
                  `/warehouses/detail/${warehouse.warehouseId}/${warehouse.name}`,
                );
              }}
            />
            <MobileResultBottomWrapper>
              <MobileResultHouseName>{warehouse.name}</MobileResultHouseName>
              <MobileResultAddress>{warehouse.address}</MobileResultAddress>
              <MobileResultCategoryButtonWrapper>
                {warehouse.mainItemTypes.map((type, idx) => (
                  <MobileResultCategoryButton key={idx} match={type.match}>
                    {categoryTitleDict(type.name)}
                  </MobileResultCategoryButton>
                ))}
              </MobileResultCategoryButtonWrapper>
              <MobileResultQuoteContactButton
                onClick={() => {
                  history.push(
                    `/warehouses/detail/${warehouse.warehouseId}/${warehouse.name}`,
                  );
                }}
              >
                상세 보기
              </MobileResultQuoteContactButton>
            </MobileResultBottomWrapper>
          </MobileResultBox>
        ))
      )}
      {results.length % 10 === 0 && results.length !== 0 ? (
        <ShowMoreButton
          onClick={() => {
            setPageIndex(pageIndex + 1);
            setIsExtraLoading(true);
          }}
        >
          더 보기
        </ShowMoreButton>
      ) : null}
    </Container>
  );
};

export default Category;
