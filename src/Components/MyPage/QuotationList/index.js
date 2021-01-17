import React from 'react';
import { useHistory } from 'react-router-dom';
import { WarehouseProgressDict } from '../../../static/mypage';

import {
  BannerTextDisabledBox,
  BannerTextEnabledBox,
  Container,
  HistoryChild,
  HistoryChildText,
  HistoryContainer,
  HistoryTitle,
  HistoryTitleText,
  HistoryUpper,
  HistoryUpperText,
  LeftBanner,
  ListChild,
  ListChildText,
  ListContainer,
  ListTitle,
  ListUpper,
  ListUpperText,
  SubTitle,
  UserInfoContainer,
} from './style';

const QuotationList = ({ quotes }) => {
  console.log('이거', quotes);
  const history = useHistory();
  const DUMMY_list = [
    {
      name: '스토리지원',
      address: '인천광역시 서구 북동로 32길 28',
      progress: '접수',
    },
    {
      name: '스토리지원',
      address: '인천광역시 서구 북동로 32길 28',
      progress: '접수',
    },
    {
      name: '스토리지원',
      address: '인천광역시 서구 북동로 32길 28',
      progress: '접수',
    },
  ];
  const DUMMY_HISTORY = [
    {
      category: '마우스',
      big: '120cm',
      weight: '12.5kg',
      sku: '2개',
      quantity: '12개',
      form: '상온',
      barcord: '있음.',
    },
    {
      category: '마우스',
      big: '120cm',
      weight: '12.5kg',
      sku: '2개',
      quantity: '12개',
      form: '상온',
      barcord: '있음.',
    },
    {
      category: '마우스',
      big: '120cm',
      weight: '12.5kg',
      sku: '2개',
      quantity: '12개',
      form: '상온',
      barcord: '있음.',
    },
    {
      category: '마우스',
      big: '120cm',
      weight: '12.5kg',
      sku: '2개',
      quantity: '12개',
      form: '상온',
      barcord: '있음.',
    },
  ];
  return (
    <Container>
      <LeftBanner>
        <BannerTextDisabledBox
          onClick={() => {
            history.push('/mypage');
          }}
        >
          내 프로필
        </BannerTextDisabledBox>
        <BannerTextEnabledBox>견적 요청 목록</BannerTextEnabledBox>
        <BannerTextDisabledBox
          onClick={() => {
            localStorage.clear();
            history.push('/');
          }}
        >
          로그아웃
        </BannerTextDisabledBox>
      </LeftBanner>
      <UserInfoContainer>
        <ListTitle>견적 요청 목록</ListTitle>
        <SubTitle>창고 목록</SubTitle>
        <ListContainer>
          <ListUpper>
            <ListUpperText width={'20%'}>창고 이름</ListUpperText>
            <ListUpperText width={'50%'}>주소</ListUpperText>
            <ListUpperText width={'20%'}>진행 상황</ListUpperText>
            <ListUpperText width={'10%'}>보기</ListUpperText>
          </ListUpper>
          {quotes.map((item, idx) => (
            <ListChild key={idx}>
              <ListChildText width={'20%'}>{item.warehouse.name}</ListChildText>
              <ListChildText width={'50%'}>
                {item.warehouse.address}
              </ListChildText>
              <ListChildText width={'20%'}>
                {WarehouseProgressDict[item.status]}
              </ListChildText>
              <ListChildText width={'10%'}>{'>'}</ListChildText>
            </ListChild>
          ))}
        </ListContainer>
        <HistoryContainer>
          <HistoryTitle>
            <HistoryTitleText>스토리지원</HistoryTitleText>
            <HistoryTitleText color={'black'}>견적 내역</HistoryTitleText>
          </HistoryTitle>
          <HistoryUpper>
            <HistoryUpperText width={'12%'}>상품 종류</HistoryUpperText>
            <HistoryUpperText width={'12%'}>상품 크기</HistoryUpperText>
            <HistoryUpperText width={'12%'}>상품 무게</HistoryUpperText>
            <HistoryUpperText width={'12%'}>SKU</HistoryUpperText>
            <HistoryUpperText width={'12%'}>보관 수량</HistoryUpperText>
            <HistoryUpperText width={'12%'}>보관 형태</HistoryUpperText>
            <HistoryUpperText width={'12%'}>바코드</HistoryUpperText>
            <HistoryUpperText width={'12%'}>상품 URL</HistoryUpperText>
          </HistoryUpper>
          {DUMMY_HISTORY.map((item, idx) => (
            <HistoryChild key={idx}>
              <HistoryChildText width={'12%'}>{item.category}</HistoryChildText>
              <HistoryChildText width={'12%'}>{item.big}</HistoryChildText>
              <HistoryChildText width={'12%'}>{item.weight}</HistoryChildText>
              <HistoryChildText width={'12%'}>{item.sku}</HistoryChildText>
              <HistoryChildText width={'12%'}>{item.quantity}</HistoryChildText>
              <HistoryChildText width={'12%'}>{item.form}</HistoryChildText>
              <HistoryChildText width={'12%'}>{item.barcord}</HistoryChildText>
              <HistoryChildText width={'12%'}>클릭</HistoryChildText>
            </HistoryChild>
          ))}
        </HistoryContainer>
      </UserInfoContainer>
    </Container>
  );
};
export default QuotationList;
