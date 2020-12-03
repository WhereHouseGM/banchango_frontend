import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #ccc;
  color: #333;
`;

const Header1 = styled.h1`
  margin: 10px 0;
  font-size: 15px;
`;

const Header2 = styled.h2`
  margin: 3px 0;
  font-weight: normal;
  font-size: 13px;
`;

const UsageInformation = styled.a`
  color: #333;
  &:hover {
    color: #0c056d;
  }
`;

const Footer = () => (
  <Container>
    <Header1>
      <UsageInformation href="/">이용 약관 </UsageInformation>|
      <UsageInformation href="/"> 개인정보취급방침</UsageInformation>
    </Header1>
    <Header2>(주) 반창고 | 대표 최윤석</Header2>
    <Header2>wherehousegm@gmail.com</Header2>
    <Header2>서울특별시 동작구 상도동 369 숭실대학교 창신관 304호</Header2>
    <Header2>© WHEREHOUSE INT Co.,Ltd.</Header2>
  </Container>
);

export default Footer;
