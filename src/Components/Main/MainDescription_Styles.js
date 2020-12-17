import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1000px;
  margin: 50px auto;
  padding: 50px 0;
  display: flex;
`;

export const TextContainer = styled.div`
  width: 50%;
  padding: 15px;
  box-sizing: border-box;
`;

export const TextHeader1 = styled.h1`
  margin-bottom: 15px;
  font-family: 'NanumSquare', sans-serif;
  font-weight: bold;
  font-size: 3em;
  margin-bottom: 10px;
  line-height: 1.2;
`;

export const TextHeader2 = styled.h2`
  margin-bottom: 30px;
  line-height: 1.2;
`;

export const ButtonContainer = styled.div`
  padding: 20px 0;
`;

export const Button = styled.button`
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

export const CardContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
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

export const CardText = styled.div`
  width: 70%;
`;

export const CardTextHeader1 = styled.h1`
  margin-bottom: 7px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 1.2em;
  line-height: 1.3;
`;

export const CardTextParagraph = styled.p`
  margin-top: 10px;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.8em;
`;

export const CardImageContainer = styled.div`
  width: 20%;
  text-align: right;
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const LeftCard = styled.div`
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
