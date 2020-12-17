import React from 'react';
import MapIcon from '../../assets/icons/map-icon.png';
import TruckIcon from '../../assets/icons/truck-icon.png';
import BoxIcon from '../../assets/icons/box-icon.png';
import {
  Container,
  TextContainer,
  TextHeader1,
  TextHeader2,
  ButtonContainer,
  Button,
  CardContainer,
  Card,
  CardText,
  CardTextHeader1,
  CardTextParagraph,
  CardImageContainer,
  CardImage,
  LeftCard,
} from './MainDescription_Styles';

const MainDescription = () => (
  <Container>
    <TextContainer>
      <TextHeader1>
        판매에만
        <br />
        집중하세요!
      </TextHeader1>
      <TextHeader2>
        보관 - 관리 - 출고 - CS
        <br />
        모두 반창고 파트너에게 맡기세요.
      </TextHeader2>
      <ButtonContainer>
        <Button>파트너 찾기</Button>
        <Button>견적 추천 받기</Button>
      </ButtonContainer>
    </TextContainer>
    <CardContainer>
      <Card>
        <CardText>
          <CardTextHeader1>원하는 파트너 찾기</CardTextHeader1>
          <CardTextParagraph>화장품, 악세서리, 전자기기 등</CardTextParagraph>
        </CardText>
        <CardImageContainer>
          <CardImage src={MapIcon} alt="Find appropriate partner!" />
        </CardImageContainer>
      </Card>
      <LeftCard>
        <CardText>
          <CardTextHeader1>파트너에게 물품 전달</CardTextHeader1>
          <CardTextParagraph>
            바코드 부착 작업 등 보관 관리 대행
          </CardTextParagraph>
        </CardText>
        <CardImageContainer>
          <CardImage src={TruckIcon} alt="Deliver goods to partners." />
        </CardImageContainer>
      </LeftCard>
      <Card>
        <CardText>
          <CardTextHeader1>물품 자동 출고</CardTextHeader1>
          <CardTextParagraph>제품 판매 시 자동으로 출고</CardTextParagraph>
        </CardText>
        <CardImageContainer>
          <CardImage src={BoxIcon} alt="Automatically export goods." />
        </CardImageContainer>
      </Card>
    </CardContainer>
  </Container>
);

export default MainDescription;
