import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import Modal from './Modal/ShowImageModal';
import { warehouseInfoCardTextDict } from '../../static/detail';
import {
  Container,
  MainImageContainer,
  DetailPageNavbarContainer,
  DetailPageNavbarItemsWrapper,
  DetailPageNavbarWrapper,
  DetailGotoButton,
  MainContainer,
  MainWrapper,
  MainSubTitle,
  MainTitle,
  Content,
  SectionTitle,
  MainMap,
  MainMapDesc,
  QuoteContactContainer,
  ContactTitle,
  ContactContentWrapper,
  LeftContent,
  RightContent,
  ContentTitle,
  ContentValue,
  MainItemTypeWrapper,
  MainItemTypeValue,
  DetailPageNavbarMargin,
  BottomContentTitle,
  BottomContentValue,
  QuoteContactButton,
  WorkDaysWrapper,
  sliderSettings,
  WorkDayBox,
  MainImageSliderWrapper,
  SliderChildWrapper,
  SliderChildImg,
  SliderChildArrow,
  HouseInfoCardWrapper,
  HouseInfoCardImage,
  HouseInfoCard,
  HouseInfoCardText,
  BlogVisitButton,
  Images,
  QuoteContactCautionText,
  MobileContainer,
  MobileUpperDescContainer,
  MobileUpperSliderContainer,
  MobileUpperDescWrapper,
  MobileDetailNavContainer,
  MobileQuoteContactButton,
  MobileUpperSliderWrapper,
  MobileUpperHouseName,
  MobileUpperAddress,
  MobileUpperDeliveryTitle,
  MobileUpperDeliveryText,
  MobileUpperDeliveryWrapper,
  MobileUpperCategoryButtonWrapper,
  MobileUpperCategoryButton,
  MobileUpperRightDescWrapper,
  MobileUpperRightDescBox,
  MobileUpperRightDescText,
  MobileUpperRightDescTitle,
  MobileDetailNavButton,
  MobileQuoteContactButtonWrapper,
  MobileBlogVisitButton,
} from './Detail';
import { categoryTitleDict, conditionDict } from '../../static/category';
import { dayOfWeek } from '../../static/detail';

const Detail = ({ warehouse }) => {
  const SliderRef = React.createRef();
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=27af2ff52796d884554beee394faa49e&autoload=false';
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        let targetPos = new window.kakao.maps.LatLng(
          warehouse.latitude,
          warehouse.longitude,
        );
        let container = document.getElementById('kakaoMap');
        let options = {
          center: targetPos,
          level: 4,
        };
        const map = new window.kakao.maps.Map(container, options);
        let markerPosition = targetPos;
        let marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
        var mapTypeControl = new window.kakao.maps.MapTypeControl();
        map.addControl(
          mapTypeControl,
          window.kakao.maps.ControlPosition.TOPRIGHT,
        );
        var zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
      });
    };
  }, [warehouse.latitude, warehouse.longitude]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImgUrl, setModalImgUrl] = useState('');

  const history = useHistory();
  const centerRef = {
    desc: React.createRef(),
    info: React.createRef(),
    announce: React.createRef(),
    caution: React.createRef(),
    position: React.createRef(),
  };
  const getWorkingWeekDayArr = () => {
    let resultArr = [...warehouse.availableWeekdays.toString()];
    while (true) {
      if (resultArr.length === 7) break;
      resultArr = ['0', ...resultArr];
    }
    return resultArr;
  };
  const scrollFunc = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop - 90, behavior: 'smooth' });
  };
  return (
    <>
      <Modal
        className="Modal"
        onClose={() => {
          setModalVisible(false);
        }}
        visible={modalVisible}
        modalImgUrl={modalImgUrl}
      />
      <MobileContainer>
        <MobileUpperDescContainer>
          <MobileUpperSliderContainer>
            <MobileUpperSliderWrapper>
              <Slider
                {...sliderSettings}
                ref={SliderRef}
                style={{ height: '30vh' }}
              >
                <SliderChildWrapper>
                  <SliderChildImg
                    src={warehouse.mainImageUrl}
                    onClick={() => {
                      setModalImgUrl(warehouse.mainImageUrl);
                      setModalVisible(true);
                    }}
                  />
                </SliderChildWrapper>
                {warehouse.images.map((item, idx) => (
                  <SliderChildWrapper key={idx}>
                    <SliderChildImg src={item} alt={'상세 사진'} />
                  </SliderChildWrapper>
                ))}
              </Slider>
            </MobileUpperSliderWrapper>
          </MobileUpperSliderContainer>
          <MobileUpperDescWrapper>
            <MobileUpperHouseName>{warehouse.name}</MobileUpperHouseName>
            <MobileUpperAddress>{warehouse.address}</MobileUpperAddress>
            <MobileUpperDeliveryWrapper>
              <MobileUpperDeliveryTitle>택배사</MobileUpperDeliveryTitle>
              <MobileUpperDeliveryText>
                {warehouse.deliveryTypes.map((item, idx) => {
                  if (warehouse.deliveryTypes.length - 1 === idx) {
                    return <span key={idx}>{item}</span>;
                  } else {
                    return <span key={idx}>{item + ', '}</span>;
                  }
                })}
              </MobileUpperDeliveryText>
            </MobileUpperDeliveryWrapper>
            <MobileUpperCategoryButtonWrapper>
              {warehouse.mainItemTypes.map((item, idx) => (
                <MobileUpperCategoryButton key={idx}>
                  {categoryTitleDict(item)}
                </MobileUpperCategoryButton>
              ))}
            </MobileUpperCategoryButtonWrapper>
            <MobileUpperRightDescWrapper>
              <MobileUpperRightDescBox>
                <MobileUpperRightDescTitle>
                  월 최소 출고량
                </MobileUpperRightDescTitle>
                <MobileUpperRightDescText>
                  {warehouse.minReleasePerMonth + '건'}
                </MobileUpperRightDescText>
              </MobileUpperRightDescBox>
              <MobileUpperRightDescBox>
                <MobileUpperRightDescTitle>평수</MobileUpperRightDescTitle>
                <MobileUpperRightDescText>
                  {warehouse.space + '평'}
                </MobileUpperRightDescText>
              </MobileUpperRightDescBox>
            </MobileUpperRightDescWrapper>
          </MobileUpperDescWrapper>
        </MobileUpperDescContainer>
        <MobileQuoteContactButtonWrapper>
          {!!warehouse.blogUrl && (
            <MobileBlogVisitButton
              onClick={() => {
                window.open(warehouse.blogUrl);
              }}
            >
              블로그 방문하기
            </MobileBlogVisitButton>
          )}
          <MobileQuoteContactButton
            onClick={() => {
              history.push(`/warehouses/quotecontact/${warehouse.warehouseId}`);
            }}
          >
            견적 문의하기
          </MobileQuoteContactButton>
        </MobileQuoteContactButtonWrapper>
      </MobileContainer>
      <MobileDetailNavContainer>
        <MobileDetailNavButton
          onClick={() => {
            scrollFunc(centerRef.desc);
          }}
        >
          센터 소개
        </MobileDetailNavButton>
        <MobileDetailNavButton
          onClick={() => {
            scrollFunc(centerRef.info);
          }}
        >
          시설 정보
        </MobileDetailNavButton>
        <MobileDetailNavButton
          onClick={() => {
            scrollFunc(centerRef.announce);
          }}
        >
          안내사항
        </MobileDetailNavButton>
        {warehouse.warehouseUsageCautions.length !== 0 && (
          <MobileDetailNavButton
            onClick={() => {
              scrollFunc(centerRef.caution);
            }}
          >
            주의사항
          </MobileDetailNavButton>
        )}
        <MobileDetailNavButton
          onClick={() => {
            scrollFunc(centerRef.position);
          }}
        >
          위치 정보
        </MobileDetailNavButton>
      </MobileDetailNavContainer>
      <Container>
        <MainImageContainer>
          <SliderChildArrow
            onClick={() => {
              SliderRef.current.slickPrev();
            }}
          >
            {'<'}
          </SliderChildArrow>
          <MainImageSliderWrapper>
            <Slider {...sliderSettings} ref={SliderRef}>
              <SliderChildWrapper>
                <SliderChildImg
                  src={warehouse.mainImageUrl}
                  onClick={() => {
                    setModalImgUrl(warehouse.mainImageUrl);
                    setModalVisible(true);
                  }}
                />
              </SliderChildWrapper>
              {warehouse.images.map((item, idx) => (
                <SliderChildWrapper key={idx}>
                  <SliderChildImg
                    src={item}
                    onClick={() => {
                      setModalImgUrl(item);
                      setModalVisible(true);
                    }}
                  />
                </SliderChildWrapper>
              ))}
            </Slider>
          </MainImageSliderWrapper>
          <SliderChildArrow
            onClick={() => {
              SliderRef.current.slickNext();
            }}
          >
            {'>'}
          </SliderChildArrow>
        </MainImageContainer>
        <DetailPageNavbarContainer>
          <DetailPageNavbarWrapper>
            <DetailPageNavbarItemsWrapper>
              <DetailGotoButton
                onClick={() => {
                  scrollFunc(centerRef.desc);
                }}
              >
                센터 소개
              </DetailGotoButton>
              <DetailGotoButton
                onClick={() => {
                  scrollFunc(centerRef.info);
                }}
              >
                시설 정보
              </DetailGotoButton>
              <DetailGotoButton
                onClick={() => {
                  scrollFunc(centerRef.announce);
                }}
              >
                시설 안내사항
              </DetailGotoButton>
              {warehouse.warehouseUsageCautions.length !== 0 && (
                <DetailGotoButton
                  onClick={() => {
                    scrollFunc(centerRef.caution);
                  }}
                >
                  주의사항
                </DetailGotoButton>
              )}
              <DetailGotoButton
                onClick={() => {
                  scrollFunc(centerRef.position);
                }}
              >
                위치정보
              </DetailGotoButton>
            </DetailPageNavbarItemsWrapper>
            <DetailPageNavbarMargin />
          </DetailPageNavbarWrapper>
        </DetailPageNavbarContainer>
        <MainContainer>
          <MainWrapper>
            <MainSubTitle ref={centerRef.desc}>
              {warehouse.address}&nbsp;{warehouse.addressDetail}
            </MainSubTitle>
            <MainTitle>{warehouse.name}</MainTitle>
            <Content lineHeight="1.5" fontSize="19px">
              {warehouse.description}
            </Content>
            <SectionTitle>영업시간</SectionTitle>
            <Content fontSize="20px">
              {warehouse.openAt}&nbsp;~&nbsp;{warehouse.closeAt}
            </Content>
            <Content fontSize="16px">{warehouse.availableTimeDetail}</Content>
            <WorkDaysWrapper>
              {getWorkingWeekDayArr().map((item, idx) => (
                <WorkDayBox key={idx} workOn={item === '1'}>
                  {dayOfWeek[idx].value}
                </WorkDayBox>
              ))}
            </WorkDaysWrapper>
            <SectionTitle>월 최소 출고량</SectionTitle>
            <Content>
              월 최소 {warehouse.minReleasePerMonth}건 출고 필요
            </Content>
            <SectionTitle ref={centerRef.info}>시설 정보</SectionTitle>
            <HouseInfoCardWrapper>
              {warehouse.houseInfo.map((item, idx) => (
                <HouseInfoCard key={idx}>
                  <HouseInfoCardImage src={Images[item + 'Img']} />
                  <HouseInfoCardText>
                    {warehouseInfoCardTextDict(item)}
                  </HouseInfoCardText>
                </HouseInfoCard>
              ))}
            </HouseInfoCardWrapper>
            <SectionTitle>창고 종류</SectionTitle>
            {warehouse.warehouseCondition.map((item, idx) => (
              <Content key={idx}>{conditionDict(item)}</Content>
            ))}
            <SectionTitle>경비 업체</SectionTitle>
            {warehouse.securityCompanies.map((item, idx) => (
              <Content key={idx}>{item}</Content>
            ))}
            <SectionTitle>보험 가입 내역</SectionTitle>
            {warehouse.insurances.map((insurance, idx) => {
              return (
                <React.Fragment key={`INSURANCE${idx}`}>
                  <Content>
                    {idx + 1}. {insurance}
                  </Content>
                </React.Fragment>
              );
            })}
            <SectionTitle ref={centerRef.announce}>시설 안내 사항</SectionTitle>
            {warehouse.warehouseFacilityUsages.map((usage, idx) => {
              return (
                <React.Fragment key={`WFU${idx}`}>
                  <Content>
                    {idx + 1}. {usage}
                  </Content>
                </React.Fragment>
              );
            })}
            {warehouse.warehouseUsageCautions.length !== 0 && (
              <SectionTitle ref={centerRef.caution}>
                시설 이용 시 주의사항
              </SectionTitle>
            )}
            {warehouse.warehouseUsageCautions.map((caution, idx) => {
              return (
                <React.Fragment key={`WUC${idx}`}>
                  <Content>
                    {idx + 1}. {caution}
                  </Content>
                </React.Fragment>
              );
            })}
            <SectionTitle ref={centerRef.position} textAlign="center">
              위치 정보
            </SectionTitle>
            <MainMap id="kakaoMap" />
            <MainMapDesc>
              {warehouse.address}&nbsp;{warehouse.addressDetail}
            </MainMapDesc>
          </MainWrapper>
          <QuoteContactContainer>
            <ContactTitle>{warehouse.name}</ContactTitle>
            <MainItemTypeWrapper>
              {warehouse.mainItemTypes.map((type, idx) => {
                return (
                  <MainItemTypeValue key={idx}>
                    {categoryTitleDict(type)}
                  </MainItemTypeValue>
                );
              })}
            </MainItemTypeWrapper>
            <ContactContentWrapper>
              <LeftContent>
                <ContentTitle>
                  월 최소 출고량
                  <br /> <br />
                </ContentTitle>
                <ContentValue>{warehouse.minReleasePerMonth}건</ContentValue>
              </LeftContent>
              <RightContent>
                <ContentTitle>
                  평수 <br /> <br />
                </ContentTitle>
                <ContentValue>{warehouse.space}평</ContentValue>
              </RightContent>
            </ContactContentWrapper>
            <BottomContentTitle>택배사</BottomContentTitle>
            <BottomContentValue>
              {warehouse.deliveryTypes.map((type) => type + ' ')}
            </BottomContentValue>
            {!!warehouse.blogUrl && (
              <BlogVisitButton
                onClick={() => {
                  window.open(warehouse.blogUrl);
                }}
              >
                방문 인터뷰 블로그
              </BlogVisitButton>
            )}
            {localStorage.getItem('type') !== 'OWNER' ? (
              <QuoteContactButton
                onClick={() => {
                  history.push(
                    `/warehouses/quotecontact/${warehouse.warehouseId}/${warehouse.name}`,
                  );
                }}
              >
                견적 요청하기
              </QuoteContactButton>
            ) : null}
            <QuoteContactCautionText>
              반창고의 빠른 검토 후,
              <br />
              보통 1 영업일 이내에, 견적서가 송부됩니다.
            </QuoteContactCautionText>
          </QuoteContactContainer>
        </MainContainer>
      </Container>
    </>
  );
};

Detail.propTypes = {
  warehouse: PropTypes.object.isRequired,
};

export default Detail;
