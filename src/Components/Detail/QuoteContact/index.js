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
  KeepingTypes,
  Barcodes,
  ChildUrlText,
} from './QuoteContact';

const BlueText = ({ text, noRequired }) => (
  <InputTitle>
    <InputTitleText>{text}</InputTitleText>
    {!noRequired && <div style={{ color: 'red' }}>*</div>}
  </InputTitle>
);

// const DUMMY_HISTORY = [
//   {
//     category: '마우스',
//     big: '120cm',
//     weight: '12.5kg',
//     sku: '2개',
//     quantity: '12개',
//     form: '상온',
//     barcord: '있음.',
//   },
//   {
//     category: '마우스',
//     big: '120cm',
//     weight: '12.5kg',
//     sku: '2개',
//     quantity: '12개',
//     form: '상온',
//     barcord: '있음.',
//   },
//   {
//     category: '마우스',
//     big: '120cm',
//     weight: '12.5kg',
//     sku: '2개',
//     quantity: '12개',
//     form: '상온',
//     barcord: '있음.',
//   },
//   {
//     category: '마우스',
//     big: '120cm',
//     weight: '12.5kg',
//     sku: '2개',
//     quantity: '12개',
//     form: '상온',
//     barcord: '있음.',
//   },
// ];
const QuoteContact = () => {
  const [importListVisible, setImportListVisible] = useState(false);
  const [estimateItems, setEstimateItems] = useState([]);
  const [estimateItemInput, setEstimateItemInput] = useState({
    name: null,
    keepingNumber: null,
    perimiter: null,
    keepingType: null,
    weight: null,
    barcode: null,
    sku: null,
    url: null,
  });

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
              <InputBox
                onChange={(event) =>
                  setEstimateItemInput({
                    ...estimateItemInput,
                    name: event.target.value,
                  })
                }
              />
              <BlueText text={'상품 크기 (가로 세로 높이의 합)'} />
              <InputWrapper>
                <InputBox
                  type="number"
                  onChange={(event) =>
                    setEstimateItemInput({
                      ...estimateItemInput,
                      perimiter: parseFloat(event.target.value),
                    })
                  }
                />
                <InputSubText>cm</InputSubText>
              </InputWrapper>
              <BlueText text={'상품 무게'} />
              <InputWrapper>
                <InputBox
                  type="number"
                  onChange={(event) => {
                    setEstimateItemInput({
                      ...estimateItemInput,
                      weight: parseFloat(event.target.value),
                    });
                  }}
                />
                <InputSubText>kg</InputSubText>
              </InputWrapper>
              <BlueText text={'SKU'} />
              <InputWrapper>
                <InputBox
                  type="number"
                  onChange={(event) => {
                    setEstimateItemInput({
                      ...estimateItemInput,
                      sku: parseInt(event.target.value),
                    });
                  }}
                />
                <InputSubText>개</InputSubText>
              </InputWrapper>
            </ProductLeftWrapper>
            <ProductRightWrapper>
              <BlueText text={'보관 수량'} />
              <InputWrapper>
                <InputBox
                  type="number"
                  onChange={(event) => {
                    setEstimateItemInput({
                      ...estimateItemInput,
                      keepingNumber: parseInt(event.target.value),
                    });
                  }}
                />
                <InputSubText>개</InputSubText>
              </InputWrapper>
              <BlueText text={'보관 형태'} />
              <PickButtonWrapper>
                {KeepingTypes.map((type, index) => {
                  return (
                    <PickButton key={`KEEPINGTYPE${index}`} value={type.value}>
                      {type.children}
                    </PickButton>
                  );
                })}
              </PickButtonWrapper>
              <BlueText text={'바코드'} />
              <PickButtonWrapper>
                {Barcodes.map((type, index) => {
                  return (
                    <PickButton key={`BARCODE${index}`} value={type.value}>
                      {type.children}
                    </PickButton>
                  );
                })}
              </PickButtonWrapper>
              <BlueText text={'URL'} noRequired={true} />
              <InputBox
                type="text"
                onChange={(event) => {
                  setEstimateItemInput({
                    ...estimateItemInput,
                    url: event.target.value,
                  });
                }}
              />
            </ProductRightWrapper>
          </ProductWrapper>
          <AddProductButton
            onClick={() => {
              console.log(estimateItemInput);
              let beforeEstimateItems = estimateItems;
              beforeEstimateItems.push(estimateItemInput);
              setEstimateItems([...beforeEstimateItems]);
              console.log(estimateItems);
              // TODO : NULL CHECK
              setEstimateItemInput({
                name: null,
                keepingNumber: null,
                perimiter: null,
                keepingType: null,
                weight: null,
                barcode: null,
                sku: null,
                url: null,
              });
              // TODO : Empty all input fields.
            }}
          >
            상품 추가하기
          </AddProductButton>
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
          {estimateItems.map((item, idx) => (
            <HistoryChild key={idx}>
              <HistoryChildText width={'12%'}>{item.name}</HistoryChildText>
              <HistoryChildText width={'12%'}>
                {item.perimiter}
              </HistoryChildText>
              <HistoryChildText width={'12%'}>{item.weight}</HistoryChildText>
              <HistoryChildText width={'12%'}>{item.sku}</HistoryChildText>
              <HistoryChildText width={'12%'}>
                {item.keepingNumber}
              </HistoryChildText>
              <HistoryChildText width={'12%'}>
                {item.keepingType}
              </HistoryChildText>
              <HistoryChildText width={'12%'}>{item.barcode}</HistoryChildText>
              {item.url !== null ? (
                <ChildUrlText width={'12%'} href={item.url}>
                  클릭
                </ChildUrlText>
              ) : (
                <ChildUrlText width={'12%'}>없음</ChildUrlText>
              )}
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
