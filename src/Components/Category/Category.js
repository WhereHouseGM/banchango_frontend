import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  font-family: 'paybooc-Medium', sans-serif;
`;

export const CategoryPickContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const CategoryPickTitle = styled.div`
  margin-top: -13px;
  font-weight: bold;
  width: 16%;
  font-size: 25px;
  align-self: center;
`;

export const CategoryPickButtonWrap = styled.div`
  width: 50%;
  max-width: 749px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const CategoryPickButton = styled.div`
  width: 13.5%;
  font-family: 'notosans-Regular', sans-serif;
  margin: 8px;
  font-size: 13px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1023px) {
    width: 31%;
  }
`;
export const CategoryFindButton = styled.div`
  padding: 15px 20px;
  border: 1px solid #1e56a0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  font-weight: bold;
  border-radius: 20px;
  align-self: center;
  margin-left: 30px;
  &:hover {
    background-color: #1e56a0;
    color: white;
    cursor: pointer;
  }
`;

export const ResultWrap = styled.div`
  width: 100%;
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ResultBox = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 90%;
  height: 500px;
  display: flex;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
  margin: 20px;
`;

export const ResultBoxImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center center;
  margin-right: -400px;
  padding-right: 400px;
  &:hover {
    cursor: pointer;
  }
`;

export const ResultBoxDescWrap = styled.div`
  min-width: 400px;
  text-align: left;
  padding: 30px;
`;

export const ResultBoxDescTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 18px;
`;

export const ResultBoxDescSub = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  font-size: 20px;
  color: grey;
`;

export const ResultBoxDescBoxWrap = styled.div`
  margin: 23px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  text-align: center;
`;

export const ResultBoxDescBoxLeft = styled.div`
  width: 48%;
  height: 100px;
  border-right: 1px solid black;
`;

export const ResultBoxDescBoxRight = styled.div`
  width: 48%;
  height: 100px;
`;

export const ResultBoxDescBoxTitle = styled.div`
  margin-top: 30px;
  font-weight: bold;
`;

export const ResultBoxDescBoxText = styled.div`
  margin-top: 5px;
`;

export const ResultBoxDescButtonWrap = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
`;

export const ResultBoxDescButton = styled.div`
  margin: 5px;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: ${(props) => (props.match === true ? '#1e56a0' : 'white')};
  color: ${(props) => (props.match === true ? 'white' : 'black')};
`;

export const ResultBoxDescDeliveryListTitle = styled.div`
  margin-top: 25px;
  font-weight: bold;
  font-size: 23px;
`;

export const ResultBoxDescDeliveryListText = styled.div`
  margin: 10px 0;
  font-size: 17px;
`;

export const ResultBoxDescInquiryButton = styled.div`
  margin: 30px auto 0 auto;
  padding: 10px 20px;
  border: 1px solid #1e56a0;
  border-radius: 20px;
  font-size: 20px;
  text-align: center;
  color: #1e56a0;
  font-weight: bold;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
  }
`;

export const BtnArr = [
  {
    id: 'CLOTH',
    name: '의류',
  },
  {
    id: 'COSMETIC',
    name: '화장품',
  },
  {
    id: 'ACCESSORY',
    name: '악세서리',
  },
  {
    id: 'GENERAL_MERCHANDISE',
    name: '잡화',
  },
  {
    id: 'FOOD',
    name: '식품',
  },
  {
    id: 'BOOK',
    name: '서적',
  },
  {
    id: 'INTERIOR',
    name: '인테리어',
  },
  {
    id: 'ELECTRONICS',
    name: '전자제품',
  },
  {
    id: 'SPORTS',
    name: '스포츠',
  },
  {
    id: 'FREEZE_STORAGE',
    name: '냉동',
  },
  {
    id: 'COLD_STORAGE',
    name: '냉장',
  },
  {
    id: 'LARGE_SIZE',
    name: '대형물품',
  },
];
