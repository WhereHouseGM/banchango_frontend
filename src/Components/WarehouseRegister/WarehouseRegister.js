import React from 'react';
import Background from '../../assets/images/login-background.jpg';
import MainImage from '../../assets/images/banchango-main.png';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  overflow: auto;
`;

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  box-align: center;
  align-items: center;
  box-pack: center;
  justify-content: center;
  width: 100%;
  display: flex;
  align-content: center;
`;

const BackgroundImage = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

const RegisterContainer = styled.div`
  background-color: #1d489b;
  width: 750px;
  border-radius: 15px;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  background-color: #1d489b;
  height: 112px;
  display: flex;
  box-pack: center;
  justify-content: center;
  box-align: center;
  box-orient: vertical;
  box-direction: normal;
  flex-direction: column;
`;

const Image = styled.div`
  width: 270px;
  height: 90px;
  background-image: url(${(props) => props.bgImage});
  background-size: contain;
  align-self: center;
  background-repeat: no-repeat;
`;

const TextContainer = styled.div`
  display: flex;
  box-pack: center;
  justify-content: center;
  box-align: center;
  align-items: center;
  box-orient: vertical;
  box-direction: normal;
  flex-direction: column;
  background-color: white;
`;

const WarehouseRegister = () => (
  <Container>
    <Wrapper>
      <BackgroundImage
        bgImage={Background}
        alt="Background Image."
      ></BackgroundImage>
      <RegisterContainer>
        <ImageContainer>
          <Image bgImage={MainImage} alt="Main image."></Image>
        </ImageContainer>
        <TextContainer>HI</TextContainer>
      </RegisterContainer>
    </Wrapper>
  </Container>
);

export default WarehouseRegister;
