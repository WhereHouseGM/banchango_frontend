import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Cosmetic from '../../assets/images/cosmetic.jpg';

const Container = styled.div`
  height: 100vh;
  overflow: auto;
`;

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  box-align: center;
  align-items: start;
  box-pack: center;
  justify-content: center;
  width: 100%;
  display: flex;
  align-content: center;
  background-color: rgb(230, 235, 244);
`;

const HouseContainer = styled.div`
  width: 60%;
  height: 400px;
  margin-top: 100px;
  display: flex;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
  transition: all 0.2s ease;
`;

const Image = styled.img`
  width: 65%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px 0 0 10px;
`;

const Description = styled.div`
  width: 65%;
  padding: 10px;
  justify-self: center;
`;

const HouseNameText = styled.h1`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 2.5em;
  margin-top: 20px;
  margin-left: 20px;
  &:hover {
    color: #30475e;
  }
`;

const HouseLocationText = styled.h2`
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 1em;
  color: #aaa;
`;

const TagContainer = styled.div`
  align-items: flex-start;
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
`;

const TagBox = styled.div`
  padding: 8px 8px 8px 8px;
  margin-right: 10px;
  background-color: rgb(180, 196, 223);
  border-radius: 10px 10px 10px 10px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 0.8em;
  text-align: center;
`;

const DetailConditionContainer = styled.div`
  align-items: flex-start;
  border-bottom: 3px solid rgb(177, 183, 201);
  margin-top: 10px;
`;

const Detail = () => (
  <Container>
    <Wrapper>
      <HouseContainer>
        <Image src={Cosmetic} alt="Cosmetic image" />
        <Description>
          <HouseNameText>세방 SPL 물류</HouseNameText>
          <HouseLocationText>경기도 고양시 동구</HouseLocationText>
          <TagContainer>
            <TagBox>상온보관</TagBox>
            <TagBox>냉동보관</TagBox>
          </TagContainer>
          <DetailConditionContainer></DetailConditionContainer>
        </Description>
      </HouseContainer>
    </Wrapper>
  </Container>
);

Detail.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toSignupPage: PropTypes.func.isRequired,
};

export default Detail;
