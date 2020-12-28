import React from 'react';
import Cloth from '../../assets/images/cloth.jpg';
import Cosmetic from '../../assets/images/cosmetic.jpg';
import Food from '../../assets/images/food.jpg';
import Furniture from '../../assets/images/furniture.jpg';
import GeneralMerchandise from '../../assets/images/general_merchandise.jpg';
import Jewelry from '../../assets/images/jewelry.jpg';
import {
  Container,
  CategoryContainer,
  ContainerHeader,
  ItemContainer,
  ImageContainer,
  Image,
  Description,
  DescriptionHeader1,
  DescriptionHeader2,
  DescriptionHeader3,
} from './MainCategory_Styles';

const Categories = {
  COSMETIC: 'COSMETIC',
  CLOTH: 'CLOTH',
  FURNITURE: 'FURNITURE',
  GENERAL: 'GENERAL_MERCHANDISE',
  FOOD: 'FOOD',
  JEWELRY: 'ACCESSORY',
};

const MainCategory = () => {
  const gotoLists = ({ currentTarget: { id } }) => {
    switch (id) {
      case Categories.COSMETIC:
        window.location.href = `category/${Categories.COSMETIC}`;
        return;
      case Categories.CLOTH:
        window.location.href = `category/${Categories.CLOTH}`;
        return;
      case Categories.FURNITURE:
        window.location.href = `category/${Categories.FURNITURE}`;
        return;
      case Categories.GENERAL:
        window.location.href = `category/${Categories.GENERAL}`;
        return;
      case Categories.FOOD:
        window.location.href = `category/${Categories.FOOD}`;
        return;
      case Categories.JEWELRY:
        window.location.href = `category/${Categories.JEWELRY}`;
        return;
      default:
        return;
    }
  };

  return (
    <Container>
      <ContainerHeader>업종별 파트너</ContainerHeader>
      <CategoryContainer>
        <ItemContainer id={Categories.COSMETIC} onClick={gotoLists}>
          <ImageContainer>
            <Image src={Cosmetic} alt="Cosmetic image" />
          </ImageContainer>
          <Description>
            <DescriptionHeader1>화장품</DescriptionHeader1>
            <DescriptionHeader2>Cosmetics</DescriptionHeader2>
            <DescriptionHeader3>
              온도 유지가 가능하며, 작은 물품 하나하나 관리할 수 있는 물류
              파트너
            </DescriptionHeader3>
          </Description>
        </ItemContainer>
        <ItemContainer id={Categories.CLOTH} onClick={gotoLists}>
          <ImageContainer>
            <Image src={Cloth} alt="Cloth image" />
          </ImageContainer>
          <Description>
            <DescriptionHeader1>의류</DescriptionHeader1>
            <DescriptionHeader2>Clothes</DescriptionHeader2>
            <DescriptionHeader3>
              많은 SKU(제품 종류 수)를 효과적으로 관리할 수 있는 의류 파트너
            </DescriptionHeader3>
          </Description>
        </ItemContainer>
        <ItemContainer id={Categories.FURNITURE} onClick={gotoLists}>
          <ImageContainer>
            <Image src={Furniture} alt="Furniture image" />
          </ImageContainer>
          <Description>
            <DescriptionHeader1>가구</DescriptionHeader1>
            <DescriptionHeader2>Furnitures</DescriptionHeader2>
            <DescriptionHeader3>
              부서짐 방지, 습도 유지 등 큰 크기의 가구를 효과적으로 관리할 수
              있는 가구 파트너
            </DescriptionHeader3>
          </Description>
        </ItemContainer>
        <ItemContainer id={Categories.GENERAL} onClick={gotoLists}>
          <ImageContainer>
            <Image src={GeneralMerchandise} alt="General Merchandise image" />
          </ImageContainer>
          <Description>
            <DescriptionHeader1>잡화</DescriptionHeader1>
            <DescriptionHeader2>General Merchandises</DescriptionHeader2>
            <DescriptionHeader3>
              생활 용품, 전자 기기 등 다양한 제품 및 상품을 판매하는 셀러에게
              적합한 물류 파트너
            </DescriptionHeader3>
          </Description>
        </ItemContainer>
        <ItemContainer id={Categories.FOOD} onClick={gotoLists}>
          <ImageContainer>
            <Image src={Food} alt="Food image" />
          </ImageContainer>
          <Description>
            <DescriptionHeader1>음식</DescriptionHeader1>
            <DescriptionHeader2>Foods</DescriptionHeader2>
            <DescriptionHeader3>
              냉동, 냉장 보관 및 유통 기한 관리가 철저히 이루어지는 물류 파트너
            </DescriptionHeader3>
          </Description>
        </ItemContainer>
        <ItemContainer id={Categories.JEWELRY} onClick={gotoLists}>
          <ImageContainer>
            <Image src={Jewelry} alt="Jewelry image" />
          </ImageContainer>
          <Description>
            <DescriptionHeader1>악세서리</DescriptionHeader1>
            <DescriptionHeader2>Jewelries</DescriptionHeader2>
            <DescriptionHeader3>
              깨짐 방지, 세세한 품질 관리가 가능한 악세사리 전용 파트너
            </DescriptionHeader3>
          </Description>
        </ItemContainer>
      </CategoryContainer>
    </Container>
  );
};

export default MainCategory;
