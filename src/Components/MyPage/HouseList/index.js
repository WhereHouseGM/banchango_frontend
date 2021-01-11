import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  height: auto;
  position: relative;
  min-height: 85vh;
  @media screen and (max-width: 768px) {
    margin-top: 105px;
  }
`;
const LeftBanner = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  position: absolute;
  height: 100%;
  background-color: #1e56a0;
  width: 270px;
  color: white;
`;
const BannerTextEnabledBox = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 30px auto;
  &:hover {
    cursor: pointer;
  }
`;
const BannerTextDisabledBox = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 30px auto;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;
const UserInfoContainer = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  width: 900px;
  padding: 40px 20px;
  margin: 0px auto;
`;
const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 20px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const ListTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  padding-left: 10px;
  padding-bottom: 15px;
`;
const NewButton = styled.div`
  border-radius: 20px;
  padding: 10px 18px;
  border: solid 1px #1e56a0;
  font-weight: bold;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
const ItemContainer = styled.div`
  width: 100%;
`;
const ItemBox = styled.div`
  width: 100%;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;
const ItemImg = styled.img`
  width: 30%;
`;
const ItemDescWrapper = styled.div`
  flex: 1;
  /* height: 100%; */
  display: flex;
  align-self: flex-start;
  position: relative;
  flex-direction: column;
  line-height: 1.5;
  padding: 15px;
`;
const SubTitle = styled.div``;
const Title = styled.div`
  font-weight: bold;
  font-size: 27px;
`;
const TitleUnderLine = styled.div`
  margin-top: 10px;
  width: 10%;
  border-top: 1px solid grey;
`;
const ConfirmedBox = styled.div`
  position: absolute;
  align-self: flex-end;
  padding: 7px 15px;
  color: white;
  background-color: #1fab89;
`;

const HouseList = () => {
  return (
    <Container>
      <LeftBanner>
        <BannerTextDisabledBox>내 프로필</BannerTextDisabledBox>
        <BannerTextDisabledBox
          onClick={() => {
            window.location.href = '/mypage/quotation';
          }}
        >
          견적 요청 목록
        </BannerTextDisabledBox>
        <BannerTextEnabledBox
          onClick={() => {
            window.location.href = '/mypage/houselist';
          }}
        >
          내 창고
        </BannerTextEnabledBox>
        <BannerTextDisabledBox
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          로그아웃
        </BannerTextDisabledBox>
      </LeftBanner>
      <UserInfoContainer>
        <TitleWrapper>
          <ListTitle>내 창고 목록</ListTitle>
          <NewButton>새로 만들기</NewButton>
        </TitleWrapper>
        <ItemContainer>
          <ItemBox>
            <ItemImg
              src={
                'https://user-images.githubusercontent.com/62606632/104148782-f61c5e00-5416-11eb-9729-d2c9d5197faf.png'
              }
            />
            <ItemDescWrapper>
              <SubTitle>인천시 서구 석납동 창고</SubTitle>
              <Title>
                {'멋진 창고'}
                <TitleUnderLine />
              </Title>
              <ConfirmedBox>승인 완료</ConfirmedBox>
            </ItemDescWrapper>
          </ItemBox>
        </ItemContainer>
      </UserInfoContainer>
    </Container>
  );
};
export default HouseList;
