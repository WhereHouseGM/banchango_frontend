import styled from 'styled-components';
import {
  MobileHistoryAdditionalInfoButton,
  MobileHistoryAdditionalInfoButtonWrapper,
  MobileHistoryChild,
  MobileHistoryChildText,
  MobileHistoryContainer,
  MobileHistoryUpperContainer,
  MobileHistoryUpperText,
} from '../../Detail/QuoteContact/QuoteContact';
import AdditionalInfoButtonImg from '../../../assets/icons/QuoteContact/AdditionalInfoButton.png';
import { MobileUpperMenuButton, MobileUpperMenuWrapper } from '../style';
import { WarehouseProgressDict } from '../../../static/mypage';

const Container = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    min-height: 90vh;
  }
`;
const TitleWrapper = styled.div`
  margin: 20px 0 10px 0;
`;
const BigTitle = styled.span`
  font-weight: bold;
  font-size: 17px;
`;
const ContentWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const HouseListContainer = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
const HouseListUpperWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  text-align: center;
`;
const HouseListUpperText = styled.div`
  font-size: 12px;
  font-weight: bold;
  width: ${(props) => props.width};
`;

const HouseListChildWrapper = styled.div`
  display: flex;
  text-align: center;
  background-color: ${(props) => (props.isOn ? '#1e56a0' : 'white')};
  color: ${(props) => (props.isOn ? 'white' : 'black')};
`;
const HouseListChildText = styled.div`
  font-size: 13px;
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  width: ${(props) => props.width};
`;

const TitleElement = ({ blackText, blueText = undefined }) => (
  <TitleWrapper>
    {!!blueText && <BigTitle style={{ color: '#1e56a0' }}>{blueText}</BigTitle>}
    <BigTitle>
      {` `}
      {blackText}
    </BigTitle>
  </TitleWrapper>
);

export const MobileMyPageQuoteListComponent = ({
  historyPush,
  handleGetSingleQuoteList,
  quotes,
  setSelectedWarehouseName,
  clickedQuote,
  setClickedQuote,
  singleQuoteList,
  selectedWarehouseName,
  setAdditionalInfo,
  setAdditionalInfoModalVisible,
}) => (
  <Container>
    <MobileUpperMenuWrapper>
      <MobileUpperMenuButton onClick={() => historyPush('/mypage')}>
        내 프로필
      </MobileUpperMenuButton>
      <MobileUpperMenuButton isIn>견적 요청 목록</MobileUpperMenuButton>
    </MobileUpperMenuWrapper>
    <ContentWrapper>
      <TitleElement blackText="창고 목록" />
      <HouseListContainer>
        <HouseListUpperWrapper>
          <HouseListUpperText width="25%">창고 이름</HouseListUpperText>
          <HouseListUpperText width="35%">주소</HouseListUpperText>
          <HouseListUpperText width="27%">진행 상황</HouseListUpperText>
          <HouseListUpperText width="13%">보기</HouseListUpperText>
        </HouseListUpperWrapper>
        {quotes.map((item, idx) => (
          <HouseListChildWrapper
            isOn={clickedQuote === idx}
            key={idx}
            onClick={() => {
              setClickedQuote(idx);
              handleGetSingleQuoteList(item);
              setSelectedWarehouseName(item.warehouse.name);
            }}
          >
            <HouseListChildText width="25%">
              {item.warehouse.name}
            </HouseListChildText>
            <HouseListChildText width="35%">
              {item.warehouse.address}
            </HouseListChildText>
            <HouseListChildText width="27%">
              {WarehouseProgressDict[item.status]}
            </HouseListChildText>
            <HouseListChildText width="13%">{`>`}</HouseListChildText>
          </HouseListChildWrapper>
        ))}
      </HouseListContainer>
      <TitleElement blackText="견적 내역" blueText={selectedWarehouseName} />
      <MobileHistoryContainer>
        <MobileHistoryUpperContainer>
          <MobileHistoryUpperText width="23%">상품 종류</MobileHistoryUpperText>
          <MobileHistoryUpperText width="23%">상품 크기</MobileHistoryUpperText>
          <MobileHistoryUpperText width="23%">상품 무게</MobileHistoryUpperText>
          <MobileHistoryUpperText width="22%">SKU</MobileHistoryUpperText>
          <MobileHistoryUpperText width="7%" />
        </MobileHistoryUpperContainer>
        {singleQuoteList.map((item, idx) => (
          <MobileHistoryChild key={idx}>
            <MobileHistoryChildText width={'23%'}>
              {item.name}
            </MobileHistoryChildText>
            <MobileHistoryChildText width={'23%'}>
              {item.perimeter}
            </MobileHistoryChildText>
            <MobileHistoryChildText width={'23%'}>
              {item.weight}
            </MobileHistoryChildText>
            <MobileHistoryChildText width={'22%'}>
              {item.sku}
            </MobileHistoryChildText>
            <MobileHistoryAdditionalInfoButtonWrapper>
              <MobileHistoryAdditionalInfoButton
                width={'70%'}
                src={AdditionalInfoButtonImg}
                onClick={() => {
                  setAdditionalInfo(item);
                  setAdditionalInfoModalVisible(true);
                }}
              />
            </MobileHistoryAdditionalInfoButtonWrapper>
          </MobileHistoryChild>
        ))}
      </MobileHistoryContainer>
    </ContentWrapper>
  </Container>
);
