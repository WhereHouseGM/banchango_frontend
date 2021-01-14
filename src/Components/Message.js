import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
`;

const Text = styled.span`
  color: black;
`;

const Message = ({ text }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
