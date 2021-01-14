import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow: auto;
`;

export const Wrapper = styled.div`
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

export const BackgroundImage = styled.div`
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

export const LoginContainer = styled.div`
  background-color: #1d489b;
  width: 375px;
  border-radius: 15px;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
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

export const LoginImage = styled.div`
  width: 270px;
  height: 90px;
  background-image: url(${(props) => props.bgImage});
  background-size: contain;
  align-self: center;
  background-repeat: no-repeat;
`;

export const TextContainer = styled.div`
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

export const HeaderTitleTop = styled.div`
  color: black;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 20px;
  line-height: 1.8;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
`;

export const HeaderTitleBottom = styled.div`
  color: #1d489b;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const InputTitle = styled.div`
  color: black;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  font-size: 16px;
  margin-top: 30px;
  align-self: start;
  margin-left: 60px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #1d489b;
  width: 256px;
  margin-top: 10px;
  transition: all 0.2s ease;
  &:focus {
    background-color: lightgray;
    border-bottom: 3px solid #1d489b;
  }
`;

export const PasswordFindText = styled.a`
  align-self: flex-end;
  color: #1d489b;
  font-size: 12px;
  margin-top: 90px;
  margin-right: 60px;
`;

export const LoginButton = styled.button`
  border-radius: 18px;
  border: 2px solid #1d489b;
  padding: 10px 88px 10px 88px;
  text-align: center;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  margin-top: 30px;
  transition: all 0.2s ease;
  &:hover {
    padding: 8px 85px 8px 85px;
    cursor: pointer;
  }
`;

export const RegisterButton = styled.button`
  border-radius: 18px;
  border: 2px solid #1d489b;
  background-color: #1d489b;
  color: white;
  text-align: center;
  padding: 10px 80px 10px 80px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  transition: all 0.2s ease;
  margin-top: 10px;
  &:hover {
    padding: 8px 78px 8px 78px;
    cursor: pointer;
  }
`;

export const TextBottomContainer = styled.span`
  margin-top: 30px;
  margin-bottom: 5px;
`;
export const TextBottom = styled.a`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 12px;
  color: gray;
`;
