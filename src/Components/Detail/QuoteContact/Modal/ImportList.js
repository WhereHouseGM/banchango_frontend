import React, { useState } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
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

const ModalOverlay = styled.div`
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

const ModalInner = styled.div`
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

const Con = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 12px;
`;
const SubTitle = styled.div`
  font-size: 18px;
  color: #969696;
  margin-bottom: 13px;
`;
const ListContainer = styled.div`
  width: 100%;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ListUpper = styled.div`
  width: 100%;
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const ListUpperText = styled.div`
  width: ${(props) => props.width || '10%'};
  font-weight: bold;
`;
const ListChild = styled.div`
  width: 100%;
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ListChildText = styled.div`
  width: ${(props) => props.width || '10%'};
`;
const SubmitButton = styled.div`
  margin-top: 20px;
  width: 100%;
  border-radius: 15px;
  background-color: #1e56a0;
  color: white;
  padding: 13px 0;
  &:hover {
    cursor: pointer;
  }
`;
const DUMMY = [
  {
    checked: true,
    name: '스토리지원',
    address: '인천광역시 서구 북동로 32길 24',
  },
  {
    checked: true,
    name: '스토리지원',
    address: '인천광역시 서구 북동로 32길 24',
  },
  {
    checked: true,
    name: '스토리지원',
    address: '인천광역시 서구 북동로 32길 24',
  },
  {
    checked: true,
    name: '스토리지원',
    address: '인천광역시 서구 북동로 32길 24',
  },
  {
    checked: true,
    name: '스토리지원',
    address: '인천광역시 서구 북동로 32길 24',
  },
];
const ImportListModal = ({ onClose, visible }) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper onClick={onMaskClick} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner">
          <Con>
            <Title>내 상품 목록 불러오기</Title>
            <SubTitle>
              해당 창고에 견적 문의했던 상품 목록을 불러옵니다
            </SubTitle>
            <ListContainer>
              <ListUpper>
                <ListUpperText width={'17%'}>선택</ListUpperText>
                <ListUpperText width={'30%'}>창고 이름</ListUpperText>
                <ListUpperText width={'45%'}>주소</ListUpperText>
              </ListUpper>
              {DUMMY.map((item, idx) => (
                <ListChild key={idx}>
                  <ListChildText width={'17%'}>O</ListChildText>
                  <ListChildText width={'30%'}>{item.name}</ListChildText>
                  <ListChildText width={'45%'}>{item.address}</ListChildText>
                </ListChild>
              ))}
            </ListContainer>
            <SubmitButton>불러오기</SubmitButton>
          </Con>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default ImportListModal;
