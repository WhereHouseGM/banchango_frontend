import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 2.2;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const Body = styled.div``;
const GoToMainPage = styled.div`
  margin-top: 20px;
  border-radius: 20px;
  border: 1px solid black;
  font-size: 20px;
  padding: 10px 20px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
const ErrorPage = ({ error }) => {
  const history = useHistory();
  return (
    <Container>
      <Title>오류!</Title>
      <Body>{error}</Body>
      <GoToMainPage
        onClick={() => {
          history.push('/');
        }}
      >
        메인 화면으로
      </GoToMainPage>
    </Container>
  );
};

export default ErrorPage;
