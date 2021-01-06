import styled from 'styled-components';

export const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const ModalInner = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  max-width: 800px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 30px 20px;
`;
export const PWTitleText = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 8px;
`;
export const PWInputBox = styled.input`
  margin-top: 20px;
  width: 100%;
  padding: 5px;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
`;
export const ConfirmButton = styled.div`
  margin-top: 30px;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  text-align: center;
  background-color: #5ea0ff;
  padding: 12px;
`;
