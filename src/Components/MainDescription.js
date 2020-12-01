import React from 'react';
import styled from 'styled-components';
import MapIcon from '../assets/icons/map-icon.png';
import TruckIcon from '../assets/icons/truck-icon.png';
import BoxIcon from '../assets/icons/box-icon.png';

const Container = styled.section`
    max-width: 1000px;
    margin: 50px auto;
    padding: 50px 0;
    display: flex;
`;

const TextContainer = styled.div`
    width: 50%;
    padding: 15px;
    box-sizing: border-box;
`;

const TextHeader1 = styled.h1`
    margin-bottom: 15px;
    font-family: 'NanumSquare', sans-serif;
    font-weight: bold;
    font-size: 3em;
    margin-bottom: 10px;
    line-height:1.2;
`;

const TextHeader2 = styled.h2`
    margin-bottom: 30px;
    line-height: 1.2;
`;

const ButtonContainer = styled.div`
    padding: 20px 0;
`;

const Button = styled.button`
    margin-right: 20px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 13px;
    background-color: transparent;
    font-family: 'NanumSquare', sans-serif;
    font-weight: bold;
    font-size: 1.1em;
    cursor: pointer;
`;

const CardContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Card = styled.div`
    width: 300px;
    height: 80px;
    margin: 10px 0;
    padding: 10px;
    position: relative;
    display: flex;
    justify-content: space-around;
    border: none;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
`;

const CardText = styled.div`
    width: 70%;
`;

const CardTextHeader1 = styled.h1`
    margin-bottom: 7px;
    font-family: "Nanum Gothic", sans-serif;
    font-weight: bold;
    font-size: 1.2em;
    line-height: 1.3;
`;

const CardTextParagraph = styled.p`
    margin-top: 10px;
    font-family: "Nanum Gothic", sans-serif;
    font-size: 0.8em;
`;

const CardImageContainer = styled.div`
    width: 20%;
    text-align: right;
`;

const CardImage = styled.img`
    width: 100%;
`;

const LeftCard = styled.div`
    width: 300px;
    height: 80px;
    margin: 10px 0;
    padding: 10px;
    position: relative;
    display: flex;
    justify-content: space-around;
    border: none;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
    right: 30px;
`;

const MainDescription = () => (
    <Container>
        <TextContainer>
            <TextHeader1>판매에만<br />집중하세요!</TextHeader1>
            <TextHeader2>
                보관 - 관리 - 출고 - CS<br />모두 반창고 파트너에게 맡기세요.
        </TextHeader2>
            <ButtonContainer>
                <Button>파트너 찾기</Button>
                <Button>견적 추천 받기</Button>
            </ButtonContainer>
        </TextContainer>
        <CardContainer>
            <Card>
                <CardText>
                    <CardTextHeader1>
                        원하는 파트너 찾기
                    </CardTextHeader1>
                    <CardTextParagraph>
                        화장품, 악세서리, 전자기기 등
                    </CardTextParagraph>
                </CardText>
                <CardImageContainer>
                    <CardImage src={MapIcon} alt="Find appropriate partner!" />
                </CardImageContainer>
            </Card>
            <LeftCard>
                <CardText>
                    <CardTextHeader1>
                        파트너에게 물품 전달
                    </CardTextHeader1>
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
                    <CardTextHeader1>
                        물품 자동 출고
                    </CardTextHeader1>
                    <CardTextParagraph>
                        제품 판매 시 자동으로 출고
                    </CardTextParagraph>
                </CardText>
                <CardImageContainer>
                    <CardImage src={BoxIcon} alt="Automatically export goods." />
                </CardImageContainer>
            </Card>
        </CardContainer>
    </Container>
);

export default MainDescription;