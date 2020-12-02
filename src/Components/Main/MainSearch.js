import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 50px;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = styled.h1`
    margin-bottom: 15px;
    font-weight: bold;
`;

const Input = styled.input`
    width: 550px;
    height: 60px;
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 10px;
    font-size: 1.1em;
    &:focus {
        outline: none;
        border: 2px solid cornflowerblue;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`;

const MainSearch = () => (
    <Container>
        <form>
            <Header>파트너 찾기</Header>
            <Input type="text" placeholder="원하는 지역을 검색해주세요." />
        </form>
    </Container>
);

export default MainSearch;