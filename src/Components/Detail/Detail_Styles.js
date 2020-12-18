import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 60px;
  background-color: rgb(230, 235, 244);
`;

export const HouseContainer = styled.div`
  width: 60%;
  min-width: 330px;
  height: 400px;
  margin: 60px auto;
  display: flex;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
  transition: 0.2s ease;
  @media screen and (max-width: 1000px) {
    height: auto;
    width: 330px;
    flex-direction: column;
    padding-bottom: 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-right: -330px;
  padding-right: 330px;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px 0 0 10px;
  @media screen and (max-width: 1000px) {
    object-fit: contain;
    width: 330px;
    height: auto;
    margin-right: 0px;
    padding-right: 0px;
    border-radius: 10px 10px 0 0;
  }
`;

export const Desc = styled.div`
  width: 330px;
  padding: 10px;
`;

export const HouseNameText = styled.h1`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 1.8em;
  margin-top: 20px;
  margin-left: 20px;
  &:hover {
    color: #30475e;
  }
`;

export const HouseLocationText = styled.h2`
  font-family: 'Nanum Gothic', sans-serif;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 1em;
  color: #aaa;
`;

export const TagContainer = styled.div`
  align-items: flex-start;
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
`;
export const TagBox = styled.div`
  padding: 8px 8px 8px 8px;
  margin-right: 10px;
  background-color: black;
  border-radius: 10px 10px 10px 10px;
  font-family: 'Nanum Gothic', sans-serif;
  color: white;
  font-weight: bold;
  font-size: 0.7em;
  text-align: center;
`;

export const AdditionInformationWrapper = styled.div`
  display: flex;
  justify-self: center;
  margin-top: 50px;
  margin-left: 10px;
  min-height: 40px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 1px solid rgb(229, 232, 240);
  padding-bottom: 9px;
`;

export const MonthlyMinimumExports = styled.div`
  border-left: none;
  flex: 1 1 0%;
  text-align: center;
`;

export const MainDescMinReleaseText = styled.h4`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 25px;
`;

export const InfoTitle = styled.h1`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const InfoValue = styled.span`
  font-size: 12px;
`;

export const MinReleaseValue = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #1d489b;
`;

export const AdditionalInfo = styled.div`
  flex: 1 1 0%;
  text-align: center;
  border-left: 1px solid rgb(229, 232, 240);
`;

export const DeliveryTypesWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  margin-left: 17px;
`;

export const DeliveryTypesTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const DeliveryTypesListText = styled.h3`
  font-size: 14px;
`;

export const ButtonWrapper = styled.div`
  width: 75%;
  margin-top: 5px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const RequestInquireButton = styled.div`
  margin-left: auto;
  width: 42%;
  padding: 10px 10px 10px 10px;
  margin-right: 10px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  color: white;
  background-color: rgb(8, 59, 148);
  border-radius: 10px 10px 10px 10px;
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

export const RequestTourButton = styled.div`
  margin-right: auto;
  width: 42%;
  padding: 10px 10px 10px 10px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  color: white;
  background-color: rgb(8, 59, 148);
  border-radius: 10px 10px 10px 10px;
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

export const MainDescWrapper = styled.div`
  width: 60%;
  min-width: 350px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 50px;
`;

export const MainDescTitle = styled.h1`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-top: 100px;
  margin-bottom: 12px;
`;

export const MainDescText = styled.span`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 16px;
  line-height: 35px;
`;

export const MainDescTimeContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

export const MainDescWorkHourTitle = styled.h4`
  font-weight: bold;
  margin-right: 25px;
  margin-bottom: 6px;
`;

export const MainDescWorkHourText = styled.h4`
  color: grey;
`;
export const MainDescWorkDayWrapper = styled.div`
  display: flex;
`;

export const MainDescRestDayCard = styled.div`
  background-color: rgb(157, 158, 163);
  color: white;
  border-radius: 10px 10px 10px 10px;
  padding: 10px;
  margin-right: 10px;
  font-weight: bold;
`;

export const MainDescWorkDayCard = styled.div`
  background-color: black;
  color: white;
  border-radius: 10px 10px 10px 10px;
  padding: 10px;
  margin-right: 10px;
  font-weight: bold;
`;

export const MainDescMinimumExports = styled.h4`
  margin-top: 7px;
  font-size: 14px;
`;

export const MainDescInfoBox = styled.div`
  width: 90%;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border: 1px solid rgb(229, 232, 240);
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
`;

export const MainDescInfoFloor = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
`;

export const MainDescInfoCard = styled.div`
  width: 20%;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }
`;

export const ExtraDescWrapper = styled.div`
  width: 60%;
  min-width: 350px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 50px;
`;
export const ExtraDescMap = styled.div`
  margin-top: 50px;
  width: 500px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export const ExtraDescMapTitle = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
