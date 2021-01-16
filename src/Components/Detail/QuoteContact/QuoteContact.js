import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  width: 100%;
  min-width: 1024px;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 0px auto;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-top: 10px;
  padding: 15px 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ProductTitleWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 15px;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const ProductTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  padding-left: 25px;
`;

export const RestoreButton = styled.div`
  border: 1px solid #1e56a0;
  border-radius: 20px;
  padding: 10px 15px;
  font-weight: bold;
  font-size: 14px;
  color: #1e56a0;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProductBlankWrapper = styled.div`
  flex: 1;
`;

export const ProductLeftWrapper = styled.div`
  width: 45%;
`;

export const ProductRightWrapper = styled.div`
  width: 45%;
`;

export const InputTitle = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const InputTitleText = styled.div`
  color: #1e56a0;
  font-size: 20px;
  margin-right: 5px;
  font-weight: bold;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const InputBox = styled.input`
  width: 75%;
  height: 28px;
  margin-bottom: 40px;
`;

export const InputSubText = styled.div`
  color: #1e56a0;
  font-size: 20px;
  margin-top: 2px;
  margin-left: 10px;
  font-weight: bold;
`;

export const PickButtonWrapper = styled.div`
  width: 75%;
  display: flex;
  margin-bottom: 40px;
`;

export const PickButton = styled.div`
  flex: 1;
  text-align: center;
  padding: 7px 0;
  border: 1px solid rgba(0, 0, 0, 0.25);
  &:hover {
    cursor: pointer;
  }
`;

export const AddProductButton = styled.div`
  color: #1e56a0;
  border: solid 1px #1e56a0;
  padding: 10px 10px;
  font-weight: bold;
  margin: 10px auto;
  width: 200px;
  border-radius: 20px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ProductListWrapper = styled.div``;

export const ProductListTitle = styled.div`
  font-weight: bold;
  width: 100%;
  font-size: 30px;
  padding: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const HistoryUpper = styled.div`
  display: flex;
  padding: 15px 0;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  text-align: center;
`;

export const HistoryUpperText = styled.div`
  font-weight: bold;
  font-size: 15px;
  width: ${(props) => props.width};
`;

export const HistoryChild = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

export const HistoryChildText = styled.div`
  width: ${(props) => props.width};
`;

export const TotalCountContainer = styled.div`
  margin: 25px 0;
  display: flex;
  flex-direction: row-reverse;
`;

export const TotalCountWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #1e56a0;
  font-size: 25px;
  font-weight: bold;
`;

export const TotalCountTitle = styled.div`
  padding-left: 15px;
  margin-right: 5px;
`;

export const TotalCountInput = styled.input`
  margin-left: 10px;
  width: 200px;
`;

export const TotalCountSubText = styled.div`
  margin-left: 10px;
`;

export const AnnounceTitle = styled.div`
  margin-top: 80px;
  font-weight: bold;
  width: 100%;
  font-size: 30px;
  padding: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const TextareaWrapper = styled.div`
  width: 80%;
  height: 300px;
  margin: 30px auto;
`;

export const AnnounceTextarea = styled.textarea`
  height: 100%;
  width: 100%;
`;

export const InquiryButton = styled.div`
  background-color: #1e56a0;
  color: white;
  border-radius: 40px;
  padding: 20px 60px;
  text-align: center;
  font-size: 20px;
  width: 300px;
  margin: 40px auto;
  &:hover {
    cursor: pointer;
  }
`;

export const KeepingTypes = [
  {
    id: 'WARM',
    value: 'WARM',
    children: '상온',
  },
  {
    id: 'COLD',
    value: 'COLD',
    children: '냉장',
  },
  {
    id: 'FREEZE',
    value: 'FREEZE',
    children: '냉동',
  },
];

export const Barcodes = [
  {
    id: 'ALL',
    value: 'ALL',
    children: '있음',
  },
  {
    id: 'NONE',
    value: 'NONE',
    children: '없음',
  },
  {
    id: 'PARTIAL',
    value: 'PARTIAL',
    children: '일부',
  },
];
