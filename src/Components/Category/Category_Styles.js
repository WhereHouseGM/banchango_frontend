import styled from 'styled-components';

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
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1920px;
  padding: 30px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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

export const Image = styled.div`
  width: 100%;
  height: 31vh;
  background-size: cover;
  background-position: center center;
  position: relative;
  background-image: url(${(props) => props.bgImage});
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

export const AdditionInformationWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  min-height: 40px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

export const MonthlyMinimumExports = styled.div`
  border-left: none;
  flex: 1 1 0%;
  text-align: center;
`;

export const InfoTitle = styled.span`
  font-size: 10px;
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
