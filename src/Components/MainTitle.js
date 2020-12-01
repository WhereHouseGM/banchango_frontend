import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 80px;
`;

const Title = styled.div`
    padding: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.div`
    width: 120px;
    height: 120px;
    margin: 0 20px;
    background-image: ${props => props.imageUrl};
`;

const Header = styled.h1`
    margin-bottom: 10px;
    font-family: 'NanumSquare', sans-serif;
    font-weight: bold;
    font-size: 3em;
    line-height: 1.3;
`;

const Paragraph = styled.p`
    margin-bottom: 10px;
    font-family: 'NanumSquare', sans-serif;
    font-size: 1.3em;
`;

const MainTitle = () => (
    <Container>
        <Title>
            <Image imageUrl="../assets/icons/main-icon.png" alt="main-icon"></Image>
            <div>
                <Paragraph>나만의 물류 파트너 찾기</Paragraph>
                <Header>온라인 셀러를 위한 <br/>단 하나의 솔루션</Header>
                <Paragraph>물류대행 창고 중개 플랫폼 반창고</Paragraph>
            </div>
        </Title>
    </Container>
);

export default MainTitle;