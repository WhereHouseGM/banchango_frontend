import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ModalWrapper,
  ModalOverlay,
  ModalInner,
  PWTitleText,
  PWInputBox,
  ConfirmButton,
} from './Modal_Styles';
import { message } from 'antd';
import sha256 from 'crypto';

export const ChangePWModal = ({
  className,
  onClose,
  visible,
  handleSubmit,
  getUserInfo,
}) => {
  const [previousPW, setPreviousPW] = useState('');
  const [newPW, setNewPW] = useState('');
  const [checkNewPW, setCheckNewPW] = useState('');

  const confirmClicked = async () => {
    if (checkNewPW !== newPW) {
      setCheckNewPW('');
      message.destroy();
      message.error('새 비밀번호가 일치하지 않습니다.');
      return null;
    }
    message.loading('로딩중입니다.');
    setPreviousPW('');
    setNewPW('');
    setCheckNewPW('');
    const hashedPWSet = {
      previous: sha256.createHash('sha256').update(previousPW).digest('hex'),
      new: sha256.createHash('sha256').update(newPW).digest('hex'),
    };
    const targetInfo = { ...getUserInfo(), password: hashedPWSet.new };
    handleSubmit(targetInfo, hashedPWSet.previous, onClose);
  };

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={onMaskClick}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          <PWTitleText>비밀번호 확인</PWTitleText>
          <PWInputBox
            type="password"
            placeholder={'현재 비밀번호 입력'}
            value={previousPW}
            onChange={(e) => {
              setPreviousPW(e.target.value);
            }}
          />
          <PWInputBox
            type="password"
            placeholder={'새 비밀번호 입력'}
            value={newPW}
            onChange={(e) => {
              setNewPW(e.target.value);
            }}
          />
          <PWInputBox
            type="password"
            placeholder={'새 비밀번호 확인'}
            value={checkNewPW}
            onChange={(e) => {
              setCheckNewPW(e.target.value);
            }}
          />
          <ConfirmButton onClick={confirmClicked}>확인</ConfirmButton>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};
ChangePWModal.propTypes = {
  visible: PropTypes.bool,
};

export default ChangePWModal;
