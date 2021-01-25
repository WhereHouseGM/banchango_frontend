import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 90%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  line-height: 1.7;
  text-align: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  white-space: pre-wrap;
`;

const Body = styled.div`
  margin: 20px 0;
`;

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

const ErrorPage = ({
  title,
  message,
  locationToGo,
  newLocation,
  buttonMessage,
}) => {
  const history = useHistory();
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{message}</Body>
      <GoToMainPage
        onClick={() => {
          locationToGo !== null && locationToGo !== undefined
            ? history.push(`${locationToGo}`)
            : window.open(newLocation);
        }}
      >
        {buttonMessage}
      </GoToMainPage>
    </Container>
  );
};

ErrorPage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  locationToGo: PropTypes.string,
  newLocation: PropTypes.string,
  buttonMessage: PropTypes.string.isRequired,
};

export default ErrorPage;
