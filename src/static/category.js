import {
  Categories,
  WarehouseConditions,
  WarehouseTypes,
} from './globalVariables';

export const categoryDict = (category) => {
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

export const categoryTitleDict = (category) => {
  switch (category) {
    case Categories.CLOTH:
      return '의류';
    case Categories.COSMETIC:
      return '화장품';
    case Categories.FURNITURE:
      return '가구';
    case Categories.GENERAL:
      return '잡화';
    case Categories.FOOD:
      return '식품';
    case Categories.JEWELRY:
      return '악세사리';
    default:
      return '';
  }
};

export const categorySubTitleDict = (category) => {
  switch (category) {
    case Categories.CLOTH:
      return 'Clothes';
    case Categories.COSMETIC:
      return 'Cosmetics';
    case Categories.FURNITURE:
      return 'Furnitures';
    case Categories.GENERAL:
      return 'General Merchandises';
    case Categories.FOOD:
      return 'Foods';
    case Categories.JEWELRY:
      return 'Jewelries';
    default:
      return '';
  }
};

export const categoryDescDict = (category) => {
  switch (category) {
    case Categories.CLOTH:
      return '많은 SKU(제품 종류 수)를 효과적으로 관리할 수 있는 의류 파트너';
    case Categories.COSMETIC:
      return '온도 유지가 가능하며, 작은 물품 하나하나 관리할 수 있는 물류 파트너';
    case Categories.FURNITURE:
      return '부서짐 방지, 습도 유지 등 큰 크기의 가구를 효과적으로 관리할 수있는 가구 파트너';
    case Categories.GENERAL:
      return '생활 용품, 전자 기기 등 다양한 제품 및 상품을 판매하는 셀러에게 적합한 물류 파트너';
    case Categories.FOOD:
      return '냉동, 냉장 보관 및 유통 기한 관리가 철저히 이루어지는 물류 파트너';
    case Categories.JEWELRY:
      return '깨짐 방지, 세세한 품질 관리가 가능한 악세사리 전용 파트너';
    default:
      return '';
  }
};

export const typesDict = (warehouseType) => {
  switch (warehouseType) {
    case WarehouseTypes.THREEPL:
      return '3PL';
    case WarehouseTypes.FULFILLMENT:
      return '풀필먼트';
    default:
      return '';
  }
};

export const conditionDict = (warehouseCondition) => {
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
