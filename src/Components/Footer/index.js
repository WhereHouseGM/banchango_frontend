import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-family: 'notosans-Regular', sans-serif;
  padding: 35px 0;
  width: 100%;
  background-color: #1e56a0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.66;
  font-size: 15px;
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
  margin-top: 20px;
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
            <BoxBottomLink to={'/service-agreements'}>
              개인정보 처리방침
            </BoxBottomLink>
          </LeftBox>
          <RightBox>
            <BoxTitle>고객센터</BoxTitle>
            <BoxBody>
              이메일 | qksckdrh@gmail.com
              <br />
              대표전화 | 010-4342-1243
            </BoxBody>
            <BoxBottomLink to={'/icon-source'}>
              홈페이지 아이콘 출처
            </BoxBottomLink>
          </RightBox>
        </Wrapper>
      </BoxWrapper>
      <BottomText>@ BANCHANGOHUB INT Co.Ltd.</BottomText>
    </Container>
  );
};
export default Footer;
