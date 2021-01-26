import styled from 'styled-components';
import { MobileUpperMenuButton, MobileUpperMenuWrapper } from '../style';

const Container = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    min-height: 90vh;
  }
`;
const BigTitle = styled.span`
  font-weight: bold;
  font-size: 17px;
`;
const ContentWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-top: 15px;
`;

const TitleElement = ({ blackText, blueText = undefined }) => (
  <>
    {!!blueText && <BigTitle style={{ color: '#1e56a0' }}>{blueText}</BigTitle>}
    <BigTitle>
      {` `}
      {blackText}
    </BigTitle>
  </>
);

export const MobileMyPageQuoteListComponent = ({ historyPush }) => (
  <Container>
    <MobileUpperMenuWrapper>
      <MobileUpperMenuButton onClick={() => historyPush('/mypage')}>
        내 프로필
      </MobileUpperMenuButton>
      <MobileUpperMenuButton isIn>견적 요청 목록</MobileUpperMenuButton>
    </MobileUpperMenuWrapper>
    <ContentWrapper>
      <TitleElement blackText="창고 목록" />
      <div></div>
      <TitleElement blackText="창고 목록" blueText="스토리지원" />
    </ContentWrapper>
  </Container>
);
