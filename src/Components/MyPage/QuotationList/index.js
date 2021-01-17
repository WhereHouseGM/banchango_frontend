import React, { useState, useCallback } from 'react';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';
import { estimateApi } from '../../../api';
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
  const history = useHistory();
  const [singleQuoteList, setSingleQuoteList] = useState([]);
  const handleGetSingleQuoteList = useCallback(
    (item) => {
      message.loading('불러오는 중..');
      estimateApi
        .getEstimateItems(item.id, localStorage.getItem('AccessToken'))
        .then(({ data }) => {
          setSingleQuoteList(data.estimateItems);
          message.destroy();
        })
        .catch(({ response: { status } }) => {
          if (status === 404) {
            message.destroy();
            message.error('견적 내역을 불러올 수 없습니다.');
          } else {
            history.push('/error');
          }
        });
    },
    [history],
  );
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
              <ListChildText
                width={'10%'}
                isA
                onClick={() => handleGetSingleQuoteList(item)}
              >
                {'>'}
              </ListChildText>
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
          {singleQuoteList.map((item, idx) => (
            <HistoryChild key={idx}>
              <HistoryChildText width={'12%'}>
                {item.keepingType}
              </HistoryChildText>
              <HistoryChildText width={'12%'}>
                {item.perimeter}
              </HistoryChildText>
              <HistoryChildText width={'12%'}>{item.weight}</HistoryChildText>
              <HistoryChildText width={'12%'}>{item.sku}</HistoryChildText>
              <HistoryChildText width={'12%'}>
                {item.keepingNumber}
              </HistoryChildText>
              <HistoryChildText width={'12%'}>{item.name}</HistoryChildText>
              <HistoryChildText width={'12%'}>{item.barcord}</HistoryChildText>
              <HistoryChildText
                isA={!!item.url}
                width={'12%'}
                onClick={() => {
                  if (!!item.url) {
                    window.location.href = 'item.url';
                  }
                }}
              >
                {item.url ? '클릭' : '없음'}
              </HistoryChildText>
            </HistoryChild>
          ))}
        </HistoryContainer>
      </UserInfoContainer>
    </Container>
  );
};
export default QuotationList;
