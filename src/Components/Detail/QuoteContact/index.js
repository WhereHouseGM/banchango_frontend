import React, { useState } from 'react';
import ImportListModal from './Modal/ImportList';
import AdditionalInfoModal from './Modal/AdditionalInfo';
import { useParams } from 'react-router-dom';
import { estimateApi } from '../../../api';

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
  RemoveItemButton,
  MobileHistoryChild,
  MobileHistoryChildText,
  MobileHistoryUpperText,
  MobileHistoryContainer,
  MobileHistoryUpperContainer,
  MobileHistoryAdditionalInfoButton,
  MobileHistoryAdditionalInfoButtonWrapper,
} from './QuoteContact';
import { quoteDoneEvent } from '../../GoogleAnalytics';
import AdditionalInfoButtonImg from '../../../assets/icons/QuoteContact/AdditionalInfoButton.png';
import { message } from 'antd';

const BlueText = ({ text, noRequired }) => (
  <InputTitle>
    <InputTitleText>{text}</InputTitleText>
    {!noRequired && <div style={{ color: 'red' }}>*</div>}
  </InputTitle>
);

const QuoteContact = () => {
  const [isQuoteLoading, setIsQuoteLoading] = useState(false);
  const [importListVisible, setImportListVisible] = useState(false);
  const [additionalInfoVisible, setAdditionalInfoVisible] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState({});
  const [estimateItems, setEstimateItems] = useState([]);
  const [estimateItemInput, setEstimateItemInput] = useState({
    name: null,
    keepingNumber: null,
    perimeter: null,
    keepingType: 'WARM',
    weight: null,
    barcode: 'ALL',
    sku: null,
    url: null,
  });
  const params = useParams();
  const [clickedKeepingTypeIndex, setClickedKeepingTypeIndex] = useState(0);
  const [clickedBarcodeIndex, setClickedBarcodeIndex] = useState(0);
  const [estimate, setEstimate] = useState({
    warehouseId: parseInt(params.warehouseId),
    estimateItems: [],
    content: null,
    monthlyAverageRelease: null,
  });
  const goToResultList = () => {
    window.scrollTo({
      top: document.getElementById('resultList').offsetTop - 53,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <ImportListModal
        visible={importListVisible}
        goToResultList={goToResultList}
        onClose={() => setImportListVisible(false)}
        getEstimateItems={(id) => {
          estimateApi
            .getEstimateItems(id, localStorage.getItem('AccessToken'))
            .then(({ data: { estimateItems } }) => {
              setEstimateItems(estimateItems);
              setEstimate({
                ...estimate,
                estimateItems: estimateItems,
              });
            })
            .catch(({ response: { status } }) => {
              if (status === 400) {
                alert('[400] 요청 형식이 잘못되었습니다.');
                return;
              } else if (status === 401) {
                alert('[401] 로그인을 다시 해주세요.');
                return;
              } else if (status === 403) {
                alert('[403] 해당 요청을 수행할 수 있는 권한이 없습니다.');
                return;
              } else if (status === 404) {
                return;
              }
            });
        }}
      />
      <AdditionalInfoModal
        visible={additionalInfoVisible}
        onClose={() => setAdditionalInfoVisible(false)}
        additionalInfo={additionalInfo}
      />
      <Container>
        <Wrapper>
          <Title>{`견적 문의하기 - ${params.name}`}</Title>
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
                placeholder="상품이름을 적어주세요. ex) 파운데이션, 의자등"
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
                  placeholder="상품 또는 상품을 포장한 가로세로높이 합"
                  id="perimeter"
                  onChange={(event) =>
                    setEstimateItemInput({
                      ...estimateItemInput,
                      perimeter: parseFloat(event.target.value),
                    })
                  }
                />
                <InputSubText>cm</InputSubText>
              </InputWrapper>
              <BlueText text={'상품 무게'} />
              <InputWrapper>
                <InputBox
                  type="number"
                  placeholder="상품의 대략적인 무게를 적어주세요."
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
                  placeholder="ex) 머그컵에 색이 3가지인 경우 SKU: 3"
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
                  placeholder="창고에 보관할 적정 재고량을 적어주세요."
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
                placeholder="상품의 판매링크가 있다면 넣어주세요."
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
                message.destroy();
                message.warning('상품 종류를 입력해주세요.');
                return;
              } else if (estimateItemInput.keepingNumber === null) {
                message.destroy();
                message.warning('보관 수량을 입력해주세요.');
                return;
              } else if (estimateItemInput.perimeter === null) {
                message.warning('상품 크기를 입력해주세요.');
                return;
              } else if (estimateItemInput.weight === null) {
                message.destroy();
                message.warning('상품 무게를 입력해주세요.');
                return;
              } else if (estimateItemInput.sku === null) {
                message.destroy();
                message.warning('상품 SKU를 입력해주세요.');
                return;
              }
              let beforeEstimateItems = estimateItems;
              beforeEstimateItems.push(estimateItemInput);
              setEstimateItems([...beforeEstimateItems]);
              setEstimate({
                ...estimate,
                estimateItems: estimateItems,
              });
              setEstimateItemInput({
                name: null,
                keepingNumber: null,
                perimeter: null,
                keepingType: 'WARM',
                weight: null,
                barcode: 'ALL',
                sku: null,
                url: null,
              });
              document.getElementById('name').value = '';
              document.getElementById('keepingNumber').value = '';
              document.getElementById('perimeter').value = '';
              document.getElementById('weight').value = '';
              document.getElementById('sku').value = '';
              document.getElementById('url').value = '';
            }}
          >
            상품 추가하기
          </AddProductButton>
          <ProductListWrapper>
            <ProductListTitle id={'resultList'}>상품 내역</ProductListTitle>
          </ProductListWrapper>
          <MobileHistoryContainer>
            <MobileHistoryUpperContainer>
              <MobileHistoryUpperText width="9%" />
              <MobileHistoryUpperText width="21%">
                상품 종류
              </MobileHistoryUpperText>
              <MobileHistoryUpperText width="21%">
                상품 크기
              </MobileHistoryUpperText>
              <MobileHistoryUpperText width="21%">
                상품 무게
              </MobileHistoryUpperText>
              <MobileHistoryUpperText width="21%">SKU</MobileHistoryUpperText>
              <MobileHistoryUpperText width="7%" />
            </MobileHistoryUpperContainer>
            {estimateItems.map((item, idx) => (
              <MobileHistoryChild key={idx}>
                <RemoveItemButton
                  style={{ width: '9%' }}
                  index={idx}
                  onClick={() => {
                    let beforeEstimateItems = estimateItems;
                    beforeEstimateItems = beforeEstimateItems.filter(
                      (_item, itemIndex) => idx !== itemIndex,
                    );
                    setEstimateItems([...beforeEstimateItems]);
                    setEstimate({
                      ...estimate,
                      estimateItems: beforeEstimateItems,
                    });
                  }}
                >
                  X
                </RemoveItemButton>
                <MobileHistoryChildText width={'21%'}>
                  {item.name}
                </MobileHistoryChildText>
                <MobileHistoryChildText width={'21%'}>
                  {item.perimeter}
                </MobileHistoryChildText>
                <MobileHistoryChildText width={'21%'}>
                  {item.weight}
                </MobileHistoryChildText>
                <MobileHistoryChildText width={'21%'}>
                  {item.sku}
                </MobileHistoryChildText>
                <MobileHistoryAdditionalInfoButtonWrapper>
                  <MobileHistoryAdditionalInfoButton
                    width={'70%'}
                    src={AdditionalInfoButtonImg}
                    onClick={() => {
                      setAdditionalInfo(item);
                      setAdditionalInfoVisible(true);
                    }}
                  />
                </MobileHistoryAdditionalInfoButtonWrapper>
              </MobileHistoryChild>
            ))}
          </MobileHistoryContainer>
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
                {item.perimeter}
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
              {item.url === null ||
              item.url === '' ||
              item.url === undefined ? (
                <ChildUrlText width={'12%'} isNotNull={false}>
                  없음
                </ChildUrlText>
              ) : (
                <ChildUrlText
                  width={'12%'}
                  isNotNull={true}
                  onClick={() => {
                    window.open(`${item.url}`);
                  }}
                >
                  클릭
                </ChildUrlText>
              )}
              <RemoveItemButton
                index={idx}
                onClick={() => {
                  let beforeEstimateItems = estimateItems;
                  beforeEstimateItems = beforeEstimateItems.filter(
                    (_item, itemIndex) => idx !== itemIndex,
                  );
                  setEstimateItems([...beforeEstimateItems]);
                  setEstimate({
                    ...estimate,
                    estimateItems: beforeEstimateItems,
                  });
                }}
              >
                X
              </RemoveItemButton>
            </HistoryChild>
          ))}
          <TotalCountContainer>
            <TotalCountWrapper>
              <TotalCountTitle>월간 총 출고량</TotalCountTitle>
              <div style={{ color: 'red' }}>*</div>
              <TotalCountInput
                type="number"
                onChange={(event) => {
                  setEstimate({
                    ...estimate,
                    monthlyAverageRelease: parseInt(event.target.value),
                  });
                }}
              />
              <TotalCountSubText>건</TotalCountSubText>
            </TotalCountWrapper>
          </TotalCountContainer>
          <ProductListWrapper>
            <AnnounceTitle>요청 및 유의 사항</AnnounceTitle>
            <TextareaWrapper>
              <AnnounceTextarea
                placeholder={'내용 입력'}
                onChange={(event) => {
                  setEstimate({ ...estimate, content: event.target.value });
                }}
              />
            </TextareaWrapper>
            <InquiryButton
              style={
                isQuoteLoading
                  ? {
                      backgroundColor: 'white',
                      color: 'black',
                      border: '1px solid black',
                      cursor: 'default',
                    }
                  : {}
              }
              onClick={() => {
                if (isQuoteLoading) return;
                if (estimate.monthlyAverageRelease === null) {
                  message.destroy();
                  message.warning('월간 총 출고량을 입력해주세요.');
                  return;
                }
                let estimateItemsToSend = estimateItems;
                if (estimateItemsToSend.length === 0) {
                  message.warning('상품을 1개 이상 입력해주세요.');
                  return;
                }
                setIsQuoteLoading(true);
                message.loading('접수 중 입니다..',10);
                estimateApi
                  .saveEstimate(estimate, localStorage.getItem('AccessToken'))
                  .then(() => {
                    quoteDoneEvent();
                    alert('견적 문의 요청이 정상적으로 접수되었습니다.');
                    window.location.href = '/mypage/quotation';
                  })
                  .catch(({ response: { status } }) => {
                    if (status === 400) {
                      alert('[400] : 요청 형식이 잘못되었습니다.');
                    } else if (status === 401) {
                      alert('[401] : 로그인을 다시 해주세요.');
                    } else if (status === 403) {
                      alert(
                        '[403] : 해당 창고에는 현재 견적문의를 할 수 없습니다.',
                      );
                    } else if (status === 404) {
                      alert('[404] : 존재하지 않는 창고입니다.');
                    } else {
                      alert('UNKNOWN ERROR');
                    }
                  })
                  .finally(() => {
                    setIsQuoteLoading(false);
                    message.destroy();
                  });
              }}
            >
              견적 문의하기
            </InquiryButton>
          </ProductListWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
export default QuoteContact;
