import styled from 'styled-components';
import BackgroundImg from '../../assets/images/MainPage/Background.png';

import SliderImg1 from '../../assets/images/MainPage/SliderImg1.png';
import SliderImg2 from '../../assets/images/MainPage/SliderImg2.png';
import SliderImg3 from '../../assets/images/MainPage/SliderImg3.png';

import Card_1 from '../../assets/images/MainPage/Card_1.png';
import Card_2 from '../../assets/images/MainPage/Card_2.png';
import Card_3 from '../../assets/images/MainPage/Card_3.png';
import Card_4 from '../../assets/images/MainPage/Card_4.png';

import Compare1 from '../../assets/images/MainPage/Compare_1.png';
import Compare2 from '../../assets/images/MainPage/Compare_2.png';

import DressA from '../../assets/icons/MainPage/DressA.png';
import DressB from '../../assets/icons/MainPage/DressB.png';

import SkincareA from '../../assets/icons/MainPage/SkincareA.png';
import SkincareB from '../../assets/icons/MainPage/SkincareB.png';

import BagA from '../../assets/icons/MainPage/BagA.png';
import BagB from '../../assets/icons/MainPage/BagB.png';

import ToothbrushA from '../../assets/icons/MainPage/ToothbrushA.png';
import ToothbrushB from '../../assets/icons/MainPage/ToothbrushB.png';

import HealthyFoodA from '../../assets/icons/MainPage/HealthyFoodA.png';
import HealthyFoodB from '../../assets/icons/MainPage/HealthyFoodB.png';

import BookshelfA from '../../assets/icons/MainPage/BookshelfA.png';
import BookshelfB from '../../assets/icons/MainPage/BookshelfB.png';

import LightBulbA from '../../assets/icons/MainPage/LightBulbA.png';
import LightBulbB from '../../assets/icons/MainPage/LightBulbB.png';

import SmartphoneA from '../../assets/icons/MainPage/SmartphoneA.png';
import SmartphoneB from '../../assets/icons/MainPage/SmartphoneB.png';

import SportsA from '../../assets/icons/MainPage/SportsA.png';
import SportsB from '../../assets/icons/MainPage/SportsB.png';

import IcecreamA from '../../assets/icons/MainPage/IcecreamA.png';
import IcecreamB from '../../assets/icons/MainPage/IcecreamB.png';

import RefrigeratorA from '../../assets/icons/MainPage/RefrigeratorA.png';
import RefrigeratorB from '../../assets/icons/MainPage/RefrigeratorB.png';

import FurnitureA from '../../assets/icons/MainPage/FurnitureA.png';
import FurnitureB from '../../assets/icons/MainPage/FurnitureB.png';

export const SliderImgArr = [
  { path: SliderImg1, alt: '첫번째 슬라이드 이미지' },
  { path: SliderImg2, alt: '두번째 슬라이드 이미지' },
  { path: SliderImg3, alt: '세번째 슬라이드 이미지' },
];

export const CardImgArr = [
  { path: Card_1, alt: '첫번째 카드 이미지' },
  { path: Card_2, alt: '첫번째 카드 이미지' },
  { path: Card_3, alt: '첫번째 카드 이미지' },
  { path: Card_4, alt: '첫번째 카드 이미지' },
];

export const CompareImgArr = [
  { path: Compare1, alt: '기존 창고 임대 시 사진' },
  { path: Compare2, alt: '반창고 파트너스 이용 시 사진' },
];

export const BtnArr = [
  {
    id: 'CLOTH',
    name: '의류',
    icon: { normal: DressA, clicked: DressB },
  },
  {
    id: 'COSMETIC',
    name: '화장품',
    icon: { normal: SkincareA, clicked: SkincareB },
  },
  {
    id: 'ACCESSORY',
    name: '악세서리',
    icon: { normal: BagA, clicked: BagB },
  },
  {
    id: 'GENERAL_MERCHANDISE',
    name: '잡화',
    icon: { normal: ToothbrushA, clicked: ToothbrushB },
  },
  {
    id: 'FOOD',
    name: '식품',
    icon: { normal: HealthyFoodA, clicked: HealthyFoodB },
  },
  {
    id: 'BOOK',
    name: '서적',
    icon: { normal: BookshelfA, clicked: BookshelfB },
  },
  {
    id: 'INTERIOR',
    name: '인테리어',
    icon: { normal: LightBulbA, clicked: LightBulbB },
  },
  {
    id: 'ELECTRONICS',
    name: '전자기기',
    icon: { normal: SmartphoneA, clicked: SmartphoneB },
  },
  {
    id: 'SPORTS',
    name: '스포츠',
    icon: { normal: SportsA, clicked: SportsB },
  },
  {
    id: 'FREEZE_STORAGE',
    name: '냉동',
    icon: { normal: RefrigeratorA, clicked: RefrigeratorB },
  },
  {
    id: 'COLD_STORAGE',
    name: '냉장',
    icon: { normal: IcecreamA, clicked: IcecreamB },
  },
  {
    id: 'LARGE_SIZE',
    name: '대형물품',
    icon: { normal: FurnitureA, clicked: FurnitureB },
  },
];

export const Container = styled.div`
  font-family: 'paybooc-Medium', sans-serif;
  width: 100%;
  text-align: center;
  line-height: 1.5;
`;

export const FirstContainer = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  line-height: 1.7;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(56, 128, 146);
  color: white;
`;

export const FirstUpperTitle = styled.div`
  font-weight: ${(props) => props.fontWeight || 'normal'};
  font-size: ${(props) => props.fontSize || '30px'};
`;

export const FirstTitle = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  margin-top: 10px;
  width: 90%;
  font-size: 22px;
  line-height: 1.8;
  white-space: pre-line;
  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 20px;
    white-space: normal;
  }
`;

export const FirstButton = styled.div`
  margin-top: 30px;
  background-color: white;
  font-weight: bold;
  border-radius: 15px;
  color: #1e56a0;
  padding: 10px 40px;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
  }
`;

export const SecondContainer = styled.div`
  padding: 60px 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const SecondSideWrapper = styled.div`
  flex: 1;
  margin-top: 35px;
  border-top: 30px solid #1e56a0;
`;

export const SecondSideTextWrapper = styled.div`
  margin-top: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SecondSideText = styled.div`
  font-weight: bold;
  color: #1e56a0;
  font-size: 20px;
`;

export const SecondSideArrow = styled.div`
  color: grey;
  margin-left: 20px;
  font-size: 25px;
`;

export const SecondMiddleWrapper = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SecondTitle = styled.div`
  color: #15c7ab;
  font-weight: bold;
  font-size: 40px;
`;

export const SecondSubTitle = styled.div`
  margin-top: 10px;
  /* width: 90%; */
  font-size: 20px;
  @media (max-width: 1023px) {
    white-space: pre-wrap;
  }
`;

export const SecondWrapper = styled.div`
  /* width: 100%; */
  max-width: 864px;
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 1023px) {
    width: 90%;
  }
`;

export const SecondCategoryBox = styled.div`
  width: 14%;
  min-width: 105px;
  border: 3px solid #1e56a0;
  border-radius: 20px;
  padding: 12px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    margin-top: -10px;
    cursor: pointer;
  }
`;

export const SecondCategoryIcon = styled.img`
  width: 65%;
`;

export const SecondCategoryText = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
`;

export const SecondButton = styled.div`
  border-radius: 38px;
  box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #1e56a0;
  background-color: #ffffff;
  font-weight: bold;
  margin-top: 10px;
  padding: 15px 20px;
  color: #1e56a0;
  transition: all 0.2s ease;
  &:hover {
    background-color: #1e56a0;
    color: white;
    cursor: pointer;
  }
`;

export const ThirdContainer = styled.div`
  width: 100%;
  padding: 50px 0;
`;

export const SliderBox = styled.div`
  width: 90%;
  display: flex;
  margin: -40px auto 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const SliderWrapper = styled.div`
  width: 90%;
  max-width: 768px;
`;

export const SliderButton = styled.div`
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const SliderSetting = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const QuickSystemBanner = styled.div`
  width: 100%;
  padding: 20px 0 60px 0;
  background-color: #1e56a0;
  border: solid 1px #707070;
  line-height: 1.6;
  color: white;
`;

export const BannerTitle = styled.div`
  color: #15c7ab;
  font-size: 20px;
`;

export const BannerTextBig = styled.div`
  font-weight: bold;
  font-size: 35px;
`;

export const BannerTextSmall = styled.div`
  font-size: 15px;
`;

export const FourthContainer = styled.div`
  background-color: rgba(160, 160, 160, 0.07);
  width: 100%;
`;

export const FourthWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FourthCard = styled.div`
  width: 46%;
  margin: 15px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const FourthCardImg = styled.img`
  width: 100%;
`;

export const FifthContainer = styled.div`
  width: 100%;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FifthTitleWrapper = styled.div`
  color: white;
  background-color: #1e56a0;
  padding: 30px 0;
  width: 100%;
`;

export const FifthTitleFirst = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  font-size: 26px;
  font-weight: normal;
`;

export const FifthTitleSecond = styled.div`
  font-size: 54px;
  font-weight: bold;
  @media (max-width: 1023px) {
    font-size: 28px;
  }
`;

export const FifthTitleThird = styled.div`
  margin-top: 10px;
  font-family: 'notosans-Regular', sans-serif;
  font-size: 18px;
  font-weight: normal;
  color: #15c7ab;
`;

export const FifthWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  max-width: 768px;
  align-items: center;
  justify-content: space-between;
  margin-top: -25px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const FifthTempImg = styled.img`
  width: 45%;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    width: 60%;
  }
`;

export const FifthTitle = styled.div`
  font-weight: bold;
  margin: 30px auto;
  padding: 10px 0;
  border-top: 1px solid #15c7ab;
  border-bottom: 1px solid #15c7ab;
  font-size: 40px;
  color: #15c7ab;
  @media (max-width: 1023px) {
    width: 80%;
    font-size: 30px;
    white-space: pre-wrap;
  }
`;

export const FifthImageBox = styled.img`
  width: 90%;
  max-width: 800px;
  margin: 10px 0;
`;

export const FifthDesc = styled.div`
  margin-top: 10px;
  margin-bottom: 150px;
  font-size: 20px;
  color: #1e56a0;
  @media (max-width: 1023px) {
    white-space: pre-wrap;
  }
`;

export const FifthDescRed = styled.div`
  margin-top: 30px;
  font-weight: bold;
  font-size: 40px;
  color: red;
  margin-bottom: 100px;
  @media (max-width: 1023px) {
    margin-top: 15px;
    margin-bottom: 50px;
    font-size: 22px;
  }
`;

export const LastGreyContainer = styled.div`
  padding: 20px 0;
  width: 100%;
  background-color: rgba(160, 160, 160, 0.07);
`;
