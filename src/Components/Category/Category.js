import React from 'react';
import PropTypes from 'prop-types';
import {
  MainTitleContainer,
  MainTitle,
  Container,
  ItemContainer,
  ItemWrapper,
  Item,
  Image,
  InformationWrapper,
  LinkToDetailPage,
  Address,
  Name,
  StickerContainer,
  StickerWrapper,
  Stickers,
  Sticker,
  AdditionInformationWrapper,
  MonthlyMinimumExports,
  InfoTitle,
  InfoValue,
  MinReleaseValue,
  AdditionalInfo,
} from './Category_Styles';
import {
  typesDict,
  conditionDict,
  categoryNameDict,
} from './../../static/category';

const convertDeliveryTypes = (deliveryTypes) => {
  let size = deliveryTypes.length;

  if (size >= 2) {
    return (
      <span>
        {deliveryTypes[0]}
        <br />외 {size - 1} 곳
      </span>
    );
  } else {
    return deliveryTypes[0];
  }
};

const Category = ({ warehouses, category }) => {
  return (
    <>
      <MainTitleContainer>
        <MainTitle>{categoryNameDict(category)} 리스트</MainTitle>
      </MainTitleContainer>
      <Container>
        <ItemContainer>
          {warehouses.map((warehouse, index) => (
            <ItemWrapper key={index}>
              <Item
                onClick={() =>
                  (window.location.href = `/warehouses/detail/${warehouse.warehouseId}`)
                }
              >
                <Image bgImage={warehouse.mainImageUrl}></Image>
                <InformationWrapper>
                  <LinkToDetailPage
                    href={`/warehouses/detail${warehouse.warehouseId}`}
                  >
                    <Address>{warehouse.address}</Address>
                    <Name>
                      <div>{warehouse.name}</div>
                    </Name>
                  </LinkToDetailPage>
                  <StickerContainer>
                    <StickerWrapper>
                      <Stickers>
                        <Sticker>
                          {conditionDict(warehouse.warehouseCondition[0])}
                        </Sticker>
                        <Sticker>{typesDict(warehouse.warehouseType)}</Sticker>
                      </Stickers>
                    </StickerWrapper>
                  </StickerContainer>
                  <AdditionInformationWrapper>
                    <MonthlyMinimumExports>
                      <InfoTitle>월 최소 출고량</InfoTitle>
                      <br />
                      <MinReleaseValue>
                        {warehouse.minReleasePerMonth}
                      </MinReleaseValue>
                    </MonthlyMinimumExports>
                    <AdditionalInfo>
                      <InfoTitle>평수</InfoTitle>
                      <br />
                      <InfoValue>{warehouse.totalArea}</InfoValue>
                    </AdditionalInfo>
                    <AdditionalInfo>
                      <InfoTitle>택배사</InfoTitle>
                      <br />
                      <InfoValue>
                        {convertDeliveryTypes(warehouse.deliveryTypes)}
                      </InfoValue>
                    </AdditionalInfo>
                  </AdditionInformationWrapper>
                </InformationWrapper>
              </Item>
            </ItemWrapper>
          ))}
        </ItemContainer>
      </Container>
    </>
  );
};

Category.propTypes = {
  warehouses: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};

export default Category;
