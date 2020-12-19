import React from 'react';
import PropTypes from 'prop-types';
import {
  UpperImage,
  UpperImageTextContainer,
  UpperImageTitleText,
  Container,
  ItemContainer,
  Image,
  AdditionInformationWrapper,
  MonthlyMinimumExports,
  InfoTitle,
  InfoValue,
  MinReleaseValue,
  AdditionalInfo,
  UpperImageContainer,
  HouseContainer,
  Desc,
  HouseNameText,
  HouseLocationText,
  TagContainer,
  TagBox,
  DeliveryTypesWrapper,
  DeliveryTypesTitle,
  DeliveryTypesListText,
  ButtonWrapper,
  RequestInquireButton,
  RequestTourButton,
  UpperImageDescText,
  UpperImageWarningText,
} from './Category_Styles';
import {
  conditionDict,
  categoryTitleDict,
  categorySubTitleDict,
  categoryDescDict,
  typesDetailDict,
} from './../../static/category';
import { Categories } from './../../static/globalVariables';

import clothBack from './../../assets/images/background/CLOTH.png';
import cosmeticBack from './../../assets/images/background/COSMETIC.png';
import foodBack from './../../assets/images/background/FOOD.png';
import furnitureBack from './../../assets/images/background/FURNITURE.png';
import jewelryBack from './../../assets/images/background/JEWELRY.png';
import generalBack from './../../assets/images/background/GENERAL.png';

const returnDeliveryTypes = (deliveryTypes) => {
  return deliveryTypes.map((typeName, index) => {
    if (deliveryTypes.length - 1 !== index) {
      return typeName + ', ';
    } else {
      return typeName;
    }
  });
};

const returnBackImage = (category) => {
  switch (category) {
    case Categories.CLOTH:
      return clothBack;
    case Categories.COSMETIC:
      return cosmeticBack;
    case Categories.FURNITURE:
      return furnitureBack;
    case Categories.GENERAL:
      return generalBack;
    case Categories.FOOD:
      return foodBack;
    case Categories.JEWELRY:
      return jewelryBack;
    default:
      return '';
  }
};

const Category = ({ warehouses, category }) => {
  return (
    <>
      <UpperImageContainer>
        <UpperImage src={returnBackImage(category)} />
        <UpperImageTextContainer>
          <UpperImageTitleText>
            {categoryTitleDict(category)}
          </UpperImageTitleText>
          <UpperImageDescText>
            {categorySubTitleDict(category)}
            <br />
            <br />
            {categoryDescDict(category)}
          </UpperImageDescText>
          <UpperImageWarningText>
            *주력 품목 이외에도, 각각의 창고들은 다양한 전문 분야가 있습니다.
            창고를 클릭하여 상세정보를 확인해 보세요.
          </UpperImageWarningText>
        </UpperImageTextContainer>
      </UpperImageContainer>
      <Container>
        <ItemContainer>
          {warehouses.map((houseDetail, index) => (
            <HouseContainer
              key={index}
              onClick={() => {
                window.location.href = `/warehouses/detail/${houseDetail.warehouseId}`;
              }}
            >
              <Image src={houseDetail.mainImageUrl} alt="HouseImage image" />
              <Desc>
                <HouseNameText>{houseDetail.name}</HouseNameText>
                <HouseLocationText>{houseDetail.address}</HouseLocationText>
                <TagContainer>
                  {houseDetail.warehouseCondition.map((condition) => (
                    <TagBox key={condition}>{conditionDict(condition)}</TagBox>
                  ))}
                </TagContainer>
                <AdditionInformationWrapper>
                  <MonthlyMinimumExports>
                    <InfoTitle>월 최소 출고량</InfoTitle>
                    <MinReleaseValue>
                      {houseDetail.minReleasePerMonth}
                    </MinReleaseValue>
                  </MonthlyMinimumExports>
                  <AdditionalInfo>
                    <InfoTitle>평수</InfoTitle>
                    <InfoValue>{houseDetail.totalArea}</InfoValue>
                  </AdditionalInfo>
                  <AdditionalInfo>
                    <InfoTitle>주 서비스</InfoTitle>
                    <InfoValue>
                      {typesDetailDict(houseDetail.warehouseType)}
                    </InfoValue>
                  </AdditionalInfo>
                </AdditionInformationWrapper>
                <DeliveryTypesWrapper>
                  <DeliveryTypesTitle>사용 택배사</DeliveryTypesTitle>
                  <DeliveryTypesListText>
                    {returnDeliveryTypes(houseDetail.deliveryTypes)}
                  </DeliveryTypesListText>
                </DeliveryTypesWrapper>
                <ButtonWrapper>
                  <RequestInquireButton>견적 문의</RequestInquireButton>
                  <RequestTourButton>투어 신청</RequestTourButton>
                </ButtonWrapper>
              </Desc>
            </HouseContainer>
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
