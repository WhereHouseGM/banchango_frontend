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

export const BtnContainer = {
  CLOTHES: {
    name: '의류',
    icon: { normal: DressA, clicked: DressB },
  },
  COSMETIC: {
    name: '화장품',
    icon: { normal: SkincareA, clicked: SkincareB },
  },
  JEWELRY: {
    name: '악세서리',
    icon: { normal: BagA, clicked: BagB },
  },
  GENERAL_MERCHANDISE: {
    name: '잡화',
    icon: { normal: ToothbrushA, clicked: ToothbrushB },
  },
  FOOD: {
    name: '식품',
    icon: { normal: HealthyFoodA, clicked: HealthyFoodB },
  },
  BOOK: {
    name: '서적',
    icon: { normal: BookshelfA, clicked: BookshelfB },
  },
  INTERIOR: {
    name: '인테리어',
    icon: { normal: LightBulbA, clicked: LightBulbB },
  },
  ELECTRONICS: {
    name: '전자기기',
    icon: { normal: SmartphoneA, clicked: SmartphoneB },
  },
  SPORTS: {
    name: '스포츠',
    icon: { normal: SportsA, clicked: SportsB },
  },
  FREEZE_STORAGE: {
    name: '냉동',
    icon: { normal: RefrigeratorA, clicked: RefrigeratorB },
  },
  COLD_STORAGE: {
    name: '냉장',
    icon: { normal: IcecreamA, clicked: IcecreamB },
  },
  FURNITURE: {
    name: '대형물품',
    icon: { normal: FurnitureA, clicked: FurnitureB },
  },
};
