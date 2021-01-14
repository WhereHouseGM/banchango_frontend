export const warehouseTypes = [
  {
    id: 'THREEPL',
    value: 'THREEPL',
    children: '3PL',
  },
  {
    id: 'FULFILLMENT',
    value: 'FULFILLMENT',
    children: '풀필먼트',
  },
];

export const mainItemTypes = [
  {
    id: 'CLOTH',
    value: 'CLOTH',
    children: '의류',
  },
  {
    id: 'COSMETIC',
    value: 'COSMETIC',
    children: '화장품',
  },
  {
    id: 'ACCESSORY',
    value: 'ACCESSORY',
    children: '악세사리',
  },
  {
    id: 'GENERAL_MERCHANDISE',
    value: 'GENERAL_MERCHANDISE',
    children: '잡화',
  },
  {
    id: 'FOOD',
    value: 'FOOD',
    children: '식품',
  },
  {
    id: 'BOOK',
    value: 'BOOK',
    children: '서적',
  },
  {
    id: 'INTERIOR',
    value: 'INTERIOR',
    children: '인테리어',
  },
  {
    id: 'ELECTRONICS',
    value: 'ELECTRONICS',
    children: '전자제품',
  },
  {
    id: 'SPORTS',
    value: 'SPORTS',
    children: '스포츠용품',
  },
  {
    id: 'COLD_STORAGE',
    value: 'COLD_STORAGE',
    children: '냉장 보관',
  },
  {
    id: 'FREEZE_STORAGE',
    value: 'FREEZE_STORAGE',
    children: '냉동 보관',
  },
  {
    id: 'LARGE_SIZE',
    value: 'LARGE_SIZE',
    children: '대형 물품',
  },
];

export const facilityChecks = [
  {
    id: 'cctvExist',
    value: 'cctvExist',
    children: 'CCTV',
  },
  {
    id: 'doorLockExist',
    value: 'doorLockExist',
    children: '잠금 장치',
  },
  {
    id: 'workerExist',
    value: 'workerExist',
    children: '현장 인력',
  },
  {
    id: 'canPark',
    value: 'canPark',
    children: '주차',
  },
];

export const airConditioningTypes = [
  {
    id: 'COOLING',
    value: 'COOLING',
    children: '냉방',
  },
  {
    id: 'HEATING',
    value: 'HEATING',
    children: '난방',
  },
  {
    id: 'BOTH',
    value: 'BOTH',
    children: '모두 지원',
  },
  {
    id: 'NONE',
    value: 'NONE',
    children: '없음',
  },
];

export const availableWeekdays = [
  {
    id: '111110',
    value: '111110',
    children: '평일(월~금)',
  },
  {
    id: '111111',
    value: '111111',
    children: '평일 및 토요일',
  },
  {
    id: '1111111',
    value: '1111111',
    children: '평일 및 주말',
  },
];

export const warehouseConditions = [
  {
    id: 'ROOM_TEMPERATURE',
    value: 'ROOM_TEMPERATURE',
    children: '상온 창고',
  },
  {
    id: 'LOW_TEMPERATURE',
    value: 'LOW_TEMPERATURE',
    children: '저온 창고',
  },
  {
    id: 'BONDED',
    value: 'BONDED',
    children: '보세 창고',
  },
  {
    id: 'SAVAGE',
    value: 'SAVAGE',
    children: '야적 창고',
  },
  {
    id: 'HAZARDOUS',
    value: 'HAZARDOUS',
    children: '위험 창고',
  },
  {
    id: 'CONTAINER',
    value: 'CONTAINER',
    children: '컨테이너',
  },
];
