import { Categories, WarehouseConditions } from './globalVariables';

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

export const warehouseInfoCardTextDict = (existName) => {
  switch (existName) {
    case 'packingExist':
      return '포장인력';
    case 'insuranceExist':
      return '보험 가입';
    case 'cctvExist':
      return 'CCTV';
    case 'canPark':
      return '주차 가능';
    case 'coolingExist':
      return '냉방';
    case 'heatingExist':
      return '난방';
    case 'coolingAndHeatingExist':
      return '냉난방';
    case 'lockSystemExist':
      return '경비업체';
    case 'WMSExist':
      return 'WMS';
    default:
      return '';
  }
};

export const dayOfWeek = [
  { id: '0', value: '일' },
  { id: '1', value: '월' },
  { id: '2', value: '화' },
  { id: '3', value: '수' },
  { id: '4', value: '목' },
  { id: '5', value: '금' },
  { id: '6', value: '토' },
];
