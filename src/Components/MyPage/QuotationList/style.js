import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  height: auto;
  position: relative;
  min-height: 85vh;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const LeftBanner = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  position: absolute;
  height: 100%;
  background-color: #1e56a0;
  width: 270px;
  color: white;
`;
export const BannerTextEnabledBox = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 30px auto;
  &:hover {
    cursor: pointer;
  }
`;
export const BannerTextDisabledBox = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 30px auto;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export const UserInfoContainer = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  width: 900px;
  padding: 40px 20px;
  margin: 0px auto;
`;
export const ListTitle = styled.div`
  font-weight: bold;
  width: 100%;
  font-size: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 10px;
  padding-bottom: 15px;
`;
export const SubTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  width: 95%;
  margin: 0 auto;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
export const ListContainer = styled.div`
  background-color: white;
  text-align: center;
`;
export const ListUpper = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;
export const ListUpperText = styled.div`
  font-weight: bold;
  font-size: 15px;
  width: ${(props) => props.width};
`;
export const ListChild = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;
export const ListChildText = styled.div`
  width: ${(props) => props.width};
  &:hover {
    cursor: ${(props) => (props.isA ? 'pointer' : 'auto')};
  }
`;
export const HistoryContainer = styled.div`
  margin: 30px 0;
  padding: 10px;
`;
export const HistoryTitle = styled.div`
  font-weight: bold;
  width: 100%;
  font-size: 20px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
`;
export const HistoryTitleText = styled.div`
  color: ${(props) => props.color || '#1e56a0'};
  margin-right: 7px;
`;
export const HistoryUpper = styled.div`
  display: flex;
  padding: 10px 0;
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
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;
export const HistoryChildText = styled.div`
  width: ${(props) => props.width};
  color: ${(props) => (props.isA ? '#40A9FF' : 'black')};
  &:hover {
    cursor: ${(props) => (props.isA ? 'pointer' : 'auto')};
  }
`;
