import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  font-family: 'paybooc-Medium', sans-serif;
  text-align: center;
`;

export const MainImageContainer = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ImageButton = styled.div`
  background-color: white;
  color: black;
  font-weight: bold;
  border-radius: 20px;
  padding: 10px 25px;
  margin: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const DetailPageNavbarContainer = styled.div`
  background-color: white;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
`;

export const DetailPageNavbarWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 20px;
`;

export const DetailGotoButton = styled.div`
  color: #0079c0;
  font-weight: bold;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  padding: 30px 0;
  text-align: left;
  display: flex;
  justify-content: center;
`;

export const MainWrapper = styled.div`
  width: 90%;
  max-width: 900px;
  line-height: 1.65;
  justify-self: center;
`;

export const MainSubTitle = styled.div`
  font-weight: bold;
  color: #50d5b3;
`;

export const MainTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: #0079c0;
`;

export const Content = styled.div`
  margin: 30px 0;
  font-size: ${(props) => props.fontSize || '20px'};
  line-height: ${(props) => props.lineHeight || '2'};
`;

export const SectionTitle = styled.div`
  margin-top: 100px;
  font-size: 25px;
  color: #0079c0;
  font-weight: bold;
  text-align: ${(props) => props.textAlign || 'left'};
`;

export const MainMapImg = styled.img`
  margin: 20px auto;
  width: 100%;
`;

export const MainMapDesc = styled.div`
  text-align: center;
  font-size: 16px;
  color: #8c9ca6;
  font-weight: bold;
`;

export const QuoteContactContainer = styled.div`
  margin-left: 30px;
  width: 300px;
  padding: 20px;
  height: 420px;
  background-color: white;
  position: sticky;
  top: 110px;
  border-radius: 20px;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
`;

export const ContactTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 18px;
`;

export const ContactSubTitle = styled.div`
  font-size: 15px;
`;

export const ContactContentWrapper = styled.div`
  margin: 23px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  text-align: center;
`;

export const LeftContent = styled.div`
  width: 48%;
  padding: 20px 0;
  border-right: 1px solid black;
`;

export const RightContent = styled.div`
  width: 48%;
  padding: 20px 0;
`;

export const ContentTitle = styled.div`
  font-weight: bold;
`;

export const ContentValue = styled.div`
  margin-top: 5px;
`;

export const MainItemTypeWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
`;

export const MainItemTypeValue = styled.div`
  margin: 5px;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 20px;
`;

export const BottomContentTitle = styled.div`
  margin-top: 25px;
  font-weight: bold;
  font-size: 23px;
`;

export const BottomContentValue = styled.div`
  margin: 10px 0;
  font-size: 17px;
`;

export const QuoteContactButton = styled.div`
  margin: 30px auto 0 auto;
  padding: 10px 20px;
  border: 1px solid #1e56a0;
  border-radius: 20px;
  font-size: 20px;
  text-align: center;
  color: #1e56a0;
  font-weight: bold;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
  }
`;
