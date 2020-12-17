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

const Categories = {
  CLOTH: 'CLOTH',
  COSMETIC: 'COSMETIC',
  FURNITURE: 'FURNITURE',
  GENERAL: 'GENERAL_MERCHANDISE',
  FOOD: 'TEMPERATURE_SENSITIVE',
  JEWELRY: 'ACCESSORY',
};

const WarehouseConditions = {
  ROOM_TEMPERATURE: 'ROOM_TEMPERATURE',
  LOW_TEMPERATURE: 'LOW_TEMPERATURE',
  BONDED: 'BONDED',
  SAVAGE: 'SAVAGE',
  HAZARDOUS: 'HAZARDOUS',
  SELF_STORAGE: 'SELF_STORAGE',
  CONTAINER: 'CONTAINER',
};

const WarehouseTypes = {
  THREEPL: 'THREEPL',
  FULFILLMENT: 'FULFILLMENT',
};

const types = (warehouseType) => {
  switch (warehouseType) {
    case WarehouseTypes.THREEPL:
      return '3PL';
    case WarehouseTypes.FULFILLMENT:
      return '풀필먼트';
    default:
      return '';
  }
};

const condition = (warehouseCondition) => {
  switch (warehouseCondition) {
    case WarehouseConditions.ROOM_TEMPERATURE:
      return '상온창고';
    case WarehouseConditions.LOW_TEMPERATURE:
      return '저온창고';
    case WarehouseConditions.BONDED:
      return '보세창고';
    case WarehouseConditions.SAVAGE:
      return '야외창고';
    case WarehouseConditions.HAZARDOUS:
      return '위험창고';
    case WarehouseConditions.SELF_STORAGE:
      return '셀프창고';
    case WarehouseConditions.CONTAINER:
      return '컨테이너';
    default:
      return '';
  }
};

const categoryName = (category) => {
  switch (category.toString().toUpperCase()) {
    case Categories.CLOTH:
      return '의류 창고 ';
    case Categories.COSMETIC:
      return '화장품 창고 ';
    case Categories.FURNITURE:
      return '가구 창고 ';
    case Categories.GENERAL:
      return '잡화 창고 ';
    case Categories.FOOD:
      return '식품 창고 ';
    case Categories.JEWELRY:
      return '악세사리 창고 ';
    default:
      return '';
  }
};

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
        <MainTitle>{categoryName(category)} 리스트</MainTitle>
      </MainTitleContainer>
      <Container>
        <ItemContainer>
          {warehouses.map((warehouse, index) => (
            <ItemWrapper key={index}>
              <Item
                onClick={() =>
                  (window.location.href = `/warehouses/${warehouse.warehouseId}`)
                }
              >
                <Image bgImage={warehouse.mainImageUrl}></Image>
                <InformationWrapper>
                  <LinkToDetailPage
                    href={`/warehouses/${warehouse.warehouseId}`}
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
                          {condition(warehouse.warehouseCondition[0])}
                        </Sticker>
                        <Sticker>{types(warehouse.warehouseType)}</Sticker>
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
