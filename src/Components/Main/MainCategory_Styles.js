import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1000px;
  margin: 50px auto;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContainerHeader = styled.h1`
  margin-left: 20px;
`;

export const ItemContainer = styled.div`
  width: 31%;
  height: 130px;
  margin: 5px 10px;
  display: flex;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: translateZ(0) scale(0.98);
  }
`;

export const ImageContainer = styled.div`
  width: 35%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px 0 0 10px;
`;

export const Description = styled.div`
  width: 65%;
  padding: 10px;
`;

export const DescriptionHeader1 = styled.h1`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 1.1em;
  &:hover {
    color: #30475e;
  }
`;

export const DescriptionHeader2 = styled.h2`
  margin-top: 7px;
  margin-bottom: 10px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 0.86em;
  color: #aaa;
  &:hover {
    color: #30475e;
  }
`;

export const DescriptionHeader3 = styled.h3`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 0.75em;
  line-height: 1.2;
  margin-top: 16px;
  &:hover {
    color: #30475e;
  }
`;
