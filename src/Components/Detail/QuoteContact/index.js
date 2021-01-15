import React, { useState } from 'react';
import ImportListModal from './Modal/ImportList';

import {
  Container,
  Wrapper,
  Title,
  ProductTitleWrapper,
  ProductTitle,
  RestoreButton,
  ProductWrapper,
  ProductBlankWrapper,
  ProductLeftWrapper,
  ProductRightWrapper,
  InputTitle,
  InputTitleText,
  InputWrapper,
  InputBox,
  InputSubText,
  PickButtonWrapper,
  PickButton,
  AddProductButton,
  ProductListWrapper,
  ProductListTitle,
  HistoryUpper,
  HistoryUpperText,
  HistoryChild,
  HistoryChildText,
  TotalCountContainer,
  TotalCountWrapper,
  TotalCountTitle,
  TotalCountInput,
  TotalCountSubText,
  AnnounceTitle,
  TextareaWrapper,
  AnnounceTextarea,
  InquiryButton,
} from './QuoteContact';

const BlueText = ({ text, noRequired }) => (
  <InputTitle>
    <InputTitleText>{text}</InputTitleText>
    {!noRequired && <div style={{ color: 'red' }}>*</div>}
  </InputTitle>
);

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
const QuoteContact = () => {
  const [importListVisible, setImportListVisible] = useState(false);
  return (
    <>
      <ImportListModal
        visible={importListVisible}
        onClose={() => {
          setImportListVisible(false);
        }}
      />
      <Container>
        <Wrapper>
          <Title>견적 문의하기 - 스토리지 원</Title>
          <ProductTitleWrapper>
            <ProductTitle>상품 정보</ProductTitle>
            <RestoreButton
              onClick={() => {
                setImportListVisible(true);
              }}
            >
              불러오기
            </RestoreButton>
          </ProductTitleWrapper>
          <ProductWrapper>
            <ProductBlankWrapper />
            <ProductLeftWrapper>
              <BlueText text={'상품 종류'} />
              <InputBox />
              <BlueText text={'상품 크기 (가로 세로 높이의 합)'} />
              <InputWrapper>
                <InputBox />
                <InputSubText>cm</InputSubText>
              </InputWrapper>
              <BlueText text={'상품 무게'} />
              <InputWrapper>
                <InputBox />
                <InputSubText>kg</InputSubText>
              </InputWrapper>
              <BlueText text={'SKU'} />
              <InputWrapper>
                <InputBox />
                <InputSubText>개</InputSubText>
              </InputWrapper>
            </ProductLeftWrapper>
            <ProductRightWrapper>
              <BlueText text={'보관 수량'} />
              <InputWrapper>
                <InputBox />
                <InputSubText>개</InputSubText>
              </InputWrapper>
              <BlueText text={'보관 형태'} />
              <PickButtonWrapper>
                <PickButton>상온</PickButton>
                <PickButton>냉장</PickButton>
                <PickButton>냉동</PickButton>
              </PickButtonWrapper>
              <BlueText text={'바코드'} />
              <PickButtonWrapper>
                <PickButton>있음</PickButton>
                <PickButton>없음</PickButton>
                <PickButton>일부</PickButton>
              </PickButtonWrapper>
              <BlueText text={'URL'} noRequired={true} />
              <InputBox />
            </ProductRightWrapper>
          </ProductWrapper>
          <AddProductButton>상품 추가하기</AddProductButton>
          <ProductListWrapper>
            <ProductListTitle>상품 내역</ProductListTitle>
          </ProductListWrapper>
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
          <TotalCountContainer>
            <TotalCountWrapper>
              <TotalCountTitle>월간 총 출고량</TotalCountTitle>
              <div style={{ color: 'red' }}>*</div>
              <TotalCountInput />
              <TotalCountSubText>건</TotalCountSubText>
            </TotalCountWrapper>
          </TotalCountContainer>
          <ProductListWrapper>
            <AnnounceTitle>요청 및 유의 사항</AnnounceTitle>
            <TextareaWrapper>
              <AnnounceTextarea placeholder={'내용 입력'} />
            </TextareaWrapper>
            <InquiryButton>견적 문의하기</InquiryButton>
          </ProductListWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
export default QuoteContact;
