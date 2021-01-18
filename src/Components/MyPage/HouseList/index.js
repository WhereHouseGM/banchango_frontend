import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  LeftBanner,
  BannerTextDisabledBox,
  BannerTextEnabledBox,
  UserInfoContainer,
  TitleWrapper,
  ListTitle,
  NewButton,
  ItemContainer,
  ItemBox,
  ItemImg,
  ItemDescWrapper,
  SubTitle,
  Title,
  TitleUnderLine,
  ConfirmedBox,
} from './HouseList';

const HouseList = () => {
  const history = useHistory();
  return (
    <Container>
      <LeftBanner>
        <BannerTextDisabledBox
          onClick={() => {
            history.push('/mypage');
          }}
        >
          내 프로필
        </BannerTextDisabledBox>
        <BannerTextEnabledBox
          onClick={() => {
            history.push('/mypage/houselist');
          }}
        >
          내 창고
        </BannerTextEnabledBox>
        <BannerTextDisabledBox
          onClick={() => {
            localStorage.clear();
            history.push('/');
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
