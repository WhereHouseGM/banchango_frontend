import styled from 'styled-components';

export const UpperImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  background-color: red;
  width: 100%;
  height: 350px;
  @media screen and (max-width: 768px) {
    margin-top: 105px;
  }
`;

export const UpperImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center center;
  background-color: pink;
`;

export const UpperImageTextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 350px;
`;

export const UpperImageTitleText = styled.h1`
  font-family: 'Nanum Gothic', sans-serif;
  margin-top: 60px;
  font-weight: bold;
  text-align: center;
  color: white;
  font-size: 40px;
`;

export const UpperImageDescText = styled.h2`
  font-family: 'Nanum Gothic', sans-serif;
  width: 502px;
  margin-top: 8px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-size: 20px;
  line-height: 25px;
`;

export const UpperImageWarningText = styled.h3`
  margin-top: 100px;
  font-family: 'Nanum Gothic', sans-serif;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: white;
  font-size: 15px;
`;

export const MainTitleContainer = styled.div`
  margin-top: 70px;
`;

export const MainTitle = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 1.3em;
  text-align: center;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1920px;
  padding: 30px;
`;

export const ItemContainer = styled.div`
  display: block;
  @media screen and (min-width: 481px) {
    margin-left: -10px;
    margin-right: -10px;
  }
  @media screen and (min-width: 768px) {
    margin-right: -10px;
    margin-left: -10px;
  }
  @media screen and (min-width: 992px) {
    margin-right: -10px;
    margin-left: -10px;
  }
`;

export const ItemWrapper = styled.div`
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  @media screen and (min-width: 481px) {
    width: 50%;
    padding-right: 10px;
    padding-left: 10px;
  }
  @media screen and (min-width: 768px) {
    width: 33.33333333333333%;
    padding-right: 10px;
    padding-left: 10px;
  }
  @media screen and (min-width: 992px) {
    width: 25%;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const HouseContainer = styled.div`
  width: 70%;
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

export const Item = styled.div`
  position: relative;
  background-color: rgb(255, 255, 255);
  padding: 0px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(136, 136, 136, 0.3) 0px 0px 15px;
  transition: transform 0.2s ease 02;
  margin-bottom: 30px;
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

export const InformationWrapper = styled.div`
  position: relative;
  padding: 15px;
  color: #333333;
`;

export const LinkToDetailPage = styled.a`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

export const Address = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  overflow-wrap: break-word;
  line-height: 1.4em;
  min-height: 20px;
`;

export const Name = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  overflow-wrap: break-word;
  line-height: 1.4em;
  height: 56px;
  font-weight: bold;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const StickerContainer = styled.div`
  display: flex;
`;

export const StickerWrapper = styled.div`
  flex: 1 1 0%;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 1px solid lightgray;
`;

export const Stickers = styled.div`
  display: inline-block;
  min-height: 30px;
`;

export const Sticker = styled.span`
  font-size: 8px;
  display: inline-block;
  background-color: rgb(238, 240, 246);
  padding: 5px 10px;
  border-radius: 20px;
  margin-right: 5px;
`;

export const MonthlyMinimumExports = styled.div`
  border-left: none;
  flex: 1 1 0%;
  text-align: center;
`;

export const InfoValue = styled.span`
  font-size: 12px;
`;

export const MinReleaseValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #1d489b;
`;

export const AdditionalInfo = styled.div`
  flex: 1 1 0%;
  text-align: center;
  border-left: 1px solid rgb(229, 232, 240);
`;

export const Desc = styled.div`
  min-width: 330px;
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
