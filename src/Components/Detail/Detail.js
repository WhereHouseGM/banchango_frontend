import styled from 'styled-components';

import canParkImg from '../../assets/images/Detail/Car.png';
import cctvExistImg from '../../assets/images/Detail/Cctv.png';
import insuranceExistImg from '../../assets/images/Detail/Certificate.png';
import coolingExistImg from '../../assets/images/Detail/Cooling.png';
import lockSystemExistImg from '../../assets/images/Detail/Lock.png';
import packingExistImg from '../../assets/images/Detail/Packing.png';
import WMSExistImg from '../../assets/images/Detail/WMS.png';

export const Images = {
  canParkImg,
  cctvExistImg,
  insuranceExistImg,
  coolingExistImg,
  heatingExistImg: coolingExistImg,
  coolingAndHeatingExistImg: coolingExistImg,
  lockSystemExistImg,
  packingExistImg,
  WMSExistImg,
};
export const Container = styled.div`
  width: 100%;
  font-family: 'paybooc-Medium', sans-serif;
  text-align: center;
`;

export const MainImageContainer = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const MainImageSliderWrapper = styled.div`
  width: 80%;
  height: 100%;
  overflow: hidden;
  padding: 15px;
`;
export const sliderSettings = {
  className: 'slider variable-width',
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
};
export const SliderChildArrow = styled.div`
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const SliderChildWrapper = styled.div`
  height: 370px;
  margin: 0 20px;
  @media (max-width: 768px) {
    height: 235px;
  }
`;
export const SliderChildImg = styled.img`
  height: 100%;
`;

export const DetailPageNavbarContainer = styled.div`
  background-color: white;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.03);
  position: sticky;
  top: 45px;
  z-index: 50;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const DetailPageNavbarWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const DetailPageNavbarItemsWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 15px;
`;
export const DetailPageNavbarMargin = styled.div`
  width: 250px;
`;

export const DetailGotoButton = styled.div`
  color: #0079c0;
  font-weight: bold;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  padding: 30px 0;
  text-align: left;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    padding-top: 0;
    padding-bottom: 50px;
  }
`;

export const MainWrapper = styled.div`
  width: 90%;
  max-width: 750px;
  line-height: 1.65;
  justify-self: center;
  @media (max-width: 768px) {
    width: 94%;
  }
`;

export const MainSubTitle = styled.div`
  font-weight: bold;
  color: #50d5b3;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: #0079c0;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Content = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  margin: 30px 0;
  font-size: ${(props) => props.fontSize || '20px'};
  line-height: ${(props) => props.lineHeight || '1.6'};
  white-space: pre-wrap;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SectionTitle = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  margin-top: 100px;
  font-size: 23px;
  color: #0079c0;
  font-weight: bold;
  text-align: ${(props) => props.textAlign || 'left'};
`;
export const HouseInfoCardWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const HouseInfoCard = styled.div`
  width: 150px;
  height: 150px;
  margin: 10px;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 20px;
    width: 90px;
    height: 90px;
  }
`;
export const HouseInfoCardImage = styled.img`
  width: 100%;
`;
export const HouseInfoCardText = styled.div`
  margin-top: 10px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const WorkDaysWrapper = styled.div`
  display: flex;
`;
export const WorkDayBox = styled.div`
  padding: 5px 10px;
  margin: 5px;
  text-align: center;
  color: white;
  border-radius: 15px;
  background-color: ${(props) => (props.workOn ? '#15c7ab' : '#557b75')};
`;

export const MainMap = styled.div`
  margin: 20px auto;
  z-index: 1;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
  height: 350px;
`;

export const MainMapDesc = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  text-align: center;
  font-size: 16px;
  color: #8c9ca6;
  font-weight: bold;
`;

export const QuoteContactContainer = styled.div`
  margin-left: 30px;
  width: 250px;
  padding: 17px;
  align-self: flex-start;
  background-color: white;
  border: 1px solid #1e56a0;
  position: sticky;
  top: 120px;
  border-radius: 20px;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContactTitle = styled.div`
  font-weight: bold;
  font-size: 21px;
  color: #0079c0;
  margin-bottom: 10px;
`;

export const ContactSubTitle = styled.div`
  font-size: 15px;
  color: #4a6777;
  line-height: 1.45;
`;
export const MainItemTypeWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 13px;
  margin-top: 14px;
`;

export const MainItemTypeValue = styled.div`
  margin-right: 9px;
  margin-top: 5px;
  padding: 8px 8px;
  border: 1px solid #1e56a0;
  color: #1e56a0;
  border-radius: 20px;
`;

export const ContactContentWrapper = styled.div`
  margin: 16px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
  font-size: 14px;
  line-height: 1;
`;

export const LeftContent = styled.div`
  width: 48%;
  padding: 14px 0;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
`;

export const RightContent = styled.div`
  width: 48%;
  padding: 14px 0;
`;

export const ContentTitle = styled.div`
  font-weight: bold;
`;

export const ContentValue = styled.div`
  margin-top: 5px;
`;

export const BottomContentTitle = styled.div`
  margin-top: 25px;
  font-weight: bold;
  font-size: 19px;
`;

export const BottomContentValue = styled.div`
  margin: 10px 0;
  line-height: 1.6;

  font-size: 14px;
`;

export const BlogVisitButton = styled.div`
  margin: 15px 0;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 17px;
  text-align: center;
  color: white;
  background-color: #15c7ab;
  font-weight: bold;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
  }
`;
export const QuoteContactButton = styled.div`
  margin: 10px 0;
  padding: 10px 20px;
  background-color: #0068ff;
  border-radius: 20px;
  font-size: 17px;
  text-align: center;
  color: white;
  font-weight: bold;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
  }
`;
export const QuoteContactCautionText = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  margin-top: 15px;
  text-align: center;
  font-size: 11.5px;
`;
export const MobileContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const MobileUpperDescContainer = styled.div``;
export const MobileUpperSliderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 34vh;
`;
export const MobileUpperSliderWrapper = styled.div`
  width: 100%;
`;
export const MobileUpperDescWrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  position: relative;
`;
export const MobileUpperHouseName = styled.div`
  font-size: 20px;
  color: #1e56a0;
  font-weight: bold;
`;
export const MobileUpperAddress = styled.div`
  font-size: 13px;
`;
export const MobileUpperDeliveryWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;
export const MobileUpperDeliveryTitle = styled.div`
  font-weight: bold;
  margin-right: 9px;
`;
export const MobileUpperDeliveryText = styled.div`
  font-size: 11px;
`;
export const MobileUpperCategoryButtonWrapper = styled.div`
  margin-top: 6px;
  padding-left: 5px;
  display: flex;
  align-items: center;
`;
export const MobileUpperCategoryButton = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  margin-right: 5px;
  text-align: center;
  font-size: 10px;
  padding: 4px 10px;
`;
export const MobileUpperRightDescWrapper = styled.div`
  margin-top: 20px;
  position: absolute;
  width: 150px;
  align-self: flex-end;
  display: flex;
  text-align: center;
  line-height: 2;
`;
export const MobileUpperRightDescBox = styled.div`
  width: 50%;
`;
export const MobileUpperRightDescTitle = styled.div`
  font-size: 11px;
  font-weight: bold;
`;
export const MobileUpperRightDescText = styled.div`
  font-size: 13px;
`;

export const MobileDetailNavContainer = styled.div`
  top: 45px;
  width: 100%;
  display: flex;
  text-align: center;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  position: sticky;
  top: 45px;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.03);
`;
export const MobileDetailNavButton = styled.div`
  flex: 1;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 15px 0;
  font-size: 13px;
`;
export const MobileQuoteContactButton = styled.div`
  width: 100%;
  padding: 15px 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  color: white;
  background-color: #1e56a0;
  font-weight: bold;
  font-size: 17px;
  z-index: 50;
`;
