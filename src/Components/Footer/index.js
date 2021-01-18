import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  padding-top: 35px;
  width: 100%;
  background-color: #1e56a0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.66;
  font-size: 15px;
  position: absolute;
  @media (max-width: 768px) {
    font-size: 9px;
  }
`;
const BoxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MarginBox = styled.div`
  width: 13%;
`;
const Wrapper = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
`;
const LeftBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const RightBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const BoxTitle = styled.div`
  font-weight: bold;
`;
const BoxBody = styled.div``;
const BoxBottomLink = styled(Link)`
  margin: 10px 10px 0 10px;
  font-size: 8.6px;
  text-decoration: none;
  color: white;
  align-self: flex-start;
  border-bottom: 1px solid white;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
`;

const BottomText = styled.div`
  font-weight: bold;
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 7px;
  }
`;
const BottomLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <Container>
      <BoxWrapper>
        <MarginBox />
        <Wrapper>
          <LeftBox>
            <BoxTitle>반창고</BoxTitle>
            <BoxBody>
              대표 | 최윤석 <br />
              주소 | 서울특별시 동작구 성도동 창신관 304호
            </BoxBody>
          </LeftBox>
          <RightBox>
            <BoxTitle>고객센터</BoxTitle>
            <BoxBody>
              이메일 | wherehousegm@gmail.com
              <br />
              대표전화 | 010-4161-4711
            </BoxBody>
            <BoxBottomLink
              onClick={() => {
                window.location.href =
                  'https://www.cognitoforms.com/WhereHouseGM/%ED%8C%8C%ED%8A%B8%EB%84%88%EC%8B%AD%EB%AC%B8%EC%9D%98';
              }}
              style={{ fontSize: '15px' }}
            >
              창고 등록 문의
            </BoxBottomLink>
          </RightBox>
        </Wrapper>
      </BoxWrapper>
      <BottomText>@ BANCHANGOHUB INT Co.Ltd.</BottomText>
      <BottomLinkWrapper>
        <BoxBottomLink to={'/service-agreements'}>
          홈페이지 이용 약관
        </BoxBottomLink>
        <BoxBottomLink to={'/privacy-policy'}>개인정보 처리방침</BoxBottomLink>
        <BoxBottomLink to={'/icon-source'}>
          홈페이지 디자인 저작권 공시
        </BoxBottomLink>
      </BottomLinkWrapper>
    </Container>
  );
};
export default Footer;
