import React from 'react';
import styled from 'styled-components';
import Cloth from '../../assets/images/cloth.jpg';
import Cosmetic from '../../assets/images/cosmetic.jpg';
import Food from '../../assets/images/food.jpg';
import Furniture from '../../assets/images/furniture.jpg';
import GeneralMerchandise from '../../assets/images/general_merchandise.jpg';
import Jewelry from '../../assets/images/jewelry.jpg';

const Categories = {
  COSMETIC: 'COSMETIC',
  CLOTH: 'CLOTH',
  FURNITURE: 'FURNITURE',
  GENERAL: 'GENERAL_MERCHANDISE',
  FOOD: 'TEMPERATURE_SENSITIVE',
  JEWELRY: 'ACCESSORY',
};

const Container = styled.section`
  max-width: 1000px;
  margin: 50px auto;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContainerHeader = styled.h1`
  margin-left: 20px;
`;

const ItemContainer = styled.div`
  width: 31%;
  height: 130px;
  margin: 5px 10px;
  display: flex;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: translateZ(0) scale(0.98);
  }
`;

const ImageContainer = styled.div`
  width: 35%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px 0 0 10px;
`;

const Description = styled.div`
  width: 65%;
  padding: 10px;
`;

const DescriptionHeader1 = styled.h1`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 1.1em;
  &:hover {
    color: #30475e;
  }
`;

const DescriptionHeader2 = styled.h2`
  margin-top: 7px;
  margin-bottom: 10px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 0.86em;
  color: #aaa;
  &:hover {
    color: #30475e;
  }
`;

const DescriptionHeader3 = styled.h3`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 0.75em;
  line-height: 1.2;
  margin-top: 16px;
  &:hover {
    color: #30475e;
  }
`;

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
