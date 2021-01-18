import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  height: auto;
  position: relative;
  min-height: 85vh;
  @media screen and (max-width: 768px) {
    margin-top: 105px;
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

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 20px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const ListTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  padding-left: 10px;
  padding-bottom: 15px;
`;

export const NewButton = styled.div`
  border-radius: 20px;
  padding: 10px 18px;
  border: solid 1px #1e56a0;
  font-weight: bold;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
`;

export const ItemBox = styled.div`
  width: 100%;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

export const ItemImg = styled.img`
  width: 30%;
`;

export const ItemDescWrapper = styled.div`
  flex: 1;
  display: flex;
  align-self: flex-start;
  position: relative;
  flex-direction: column;
  line-height: 1.5;
  padding: 15px;
`;

export const SubTitle = styled.div``;

export const Title = styled.div`
  font-weight: bold;
  font-size: 27px;
`;

export const TitleUnderLine = styled.div`
  margin-top: 10px;
  width: 10%;
  border-top: 1px solid grey;
`;

export const StatusBox = styled.div`
  position: absolute;
  align-self: flex-end;
  padding: 7px 15px;
  color: white;
  background-color: #1fab89;
`;

export const statusToText = (status) => {
  if (status === 'IN_PROGRESS') {
    return '검토 진행중';
  } else if (status === 'REJECTED') {
    return '거절됨';
  } else if (status === 'VIEWABLE') {
    return '승인 완료';
  } else if (status === 'DELETED') {
    return '삭제됨';
  } else return '알 수 없음';
};
