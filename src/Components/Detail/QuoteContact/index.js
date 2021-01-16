import React, { useState } from 'react';
import ImportListModal from './Modal/ImportList';
import { message } from 'antd';

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
  keepingTypeToText,
  barcodeToText,
} from './QuoteContact';

const BlueText = ({ text, noRequired }) => (
  <InputTitle>
    <InputTitleText>{text}</InputTitleText>
    {!noRequired && <div style={{ color: 'red' }}>*</div>}
  </InputTitle>
);

const QuoteContact = () => {
  const [importListVisible, setImportListVisible] = useState(false);
  const [estimateItems, setEstimateItems] = useState([]);
  const [estimateItemInput, setEstimateItemInput] = useState({
    name: null,
    keepingNumber: null,
    perimiter: null,
    keepingType: 'WARM',
    weight: null,
    barcode: 'ALL',
    sku: null,
    url: null,
  });
  const [clickedKeepingTypeIndex, setClickedKeepingTypeIndex] = useState(0);
  const [clickedBarcodeIndex, setClickedBarcodeIndex] = useState(0);

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
                type="text"
                id="name"
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
                  id="perimiter"
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
                  id="weight"
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
                  id="sku"
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
                  id="keepingNumber"
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
                    <PickButton
                      key={`KEEPINGTYPE${index}`}
                      value={type.value}
                      onClick={() => {
                        setClickedKeepingTypeIndex(index);
                        setEstimateItemInput({
                          ...estimateItemInput,
                          keepingType: type.value,
                        });
                      }}
                      style={
                        clickedKeepingTypeIndex === index
                          ? {
                              backgroundColor: '#1e56a0',
                              color: 'white',
                            }
                          : {
                              backgroundColor: 'white',
                              color: 'black',
                            }
                      }
                    >
                      {type.children}
                    </PickButton>
                  );
                })}
              </PickButtonWrapper>
              <BlueText text={'바코드'} />
              <PickButtonWrapper>
                {Barcodes.map((type, index) => {
                  return (
                    <PickButton
                      key={`BARCODE${index}`}
                      value={type.value}
                      onClick={() => {
                        setClickedBarcodeIndex(index);
                        setEstimateItemInput({
                          ...estimateItemInput,
                          barcode: type.value,
                        });
                      }}
                      style={
                        clickedBarcodeIndex === index
                          ? {
                              backgroundColor: '#1e56a0',
                              color: 'white',
                            }
                          : {
                              backgroundColor: 'white',
                              color: 'black',
                            }
                      }
                    >
                      {type.children}
                    </PickButton>
                  );
                })}
              </PickButtonWrapper>
              <BlueText text={'URL'} noRequired={true} />
              <InputBox
                type="text"
                id="url"
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
              if (
                estimateItemInput.name === null ||
                estimateItemInput.name.trim() === ''
              ) {
                message.warning('상품 종류를 입력해주세요.');
                return;
              } else if (estimateItemInput.keepingNumber === null) {
                message.warning('보관 수량을 입력해주세요.');
                return;
              } else if (estimateItemInput.perimiter === null) {
                message.warning('상품 크기를 입력해주세요.');
                return;
              } else if (estimateItemInput.weight === null) {
                message.warning('상품 무게를 입력해주세요.');
                return;
              } else if (estimateItemInput.sku === null) {
                message.warning('상품 SKU를 입력해주세요.');
              }
              let beforeEstimateItems = estimateItems;
              beforeEstimateItems.push(estimateItemInput);
              setEstimateItems([...beforeEstimateItems]);
              setEstimateItemInput({
                name: null,
                keepingNumber: null,
                perimiter: null,
                keepingType: 'WARM',
                weight: null,
                barcode: 'ALL',
                sku: null,
                url: null,
              });
              document.getElementById('name').value = '';
              document.getElementById('keepingNumber').value = '';
              document.getElementById('perimiter').value = '';
              document.getElementById('weight').value = '';
              document.getElementById('sku').value = '';
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
                {keepingTypeToText(item.keepingType)}
              </HistoryChildText>
              <HistoryChildText width={'12%'}>
                {barcodeToText(item.barcode)}
              </HistoryChildText>
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
