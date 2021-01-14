import React from 'react';
import { ModalWrapper, ModalOverlay, ModalInner } from './Modal_Styles';
import styled from 'styled-components';
const Image = styled.img`
  width: 100%;
`;
export const ShowImageModal = ({ onClose, visible, modalImgUrl }) => {
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
          <Image src={modalImgUrl} alt={'확대 이미지'} />
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default ShowImageModal;
