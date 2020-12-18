import {
  Categories,
  WarehouseConditions,
  WarehouseTypes,
} from './globalVariables';

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

export const categoryNameDict = (category) => {
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
