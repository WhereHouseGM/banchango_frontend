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
import { userApi } from '../../../api';

export const ChangePWModal = ({ onClose, visible }) => {
  const [previousPW, setPreviousPW] = useState('');
  const [newPW, setNewPW] = useState('');
  const [checkNewPW, setCheckNewPW] = useState('');

  const confirmClicked = () => {
    if (newPW.length < 8) {
      message.destroy();
      message.error('비밀번호는 8자 이상으로 설정해 주세요.');
      return null;
    }
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
      originalPassword: sha256
        .createHash('sha256')
        .update(previousPW)
        .digest('hex'),
      newPassword: sha256.createHash('sha256').update(newPW).digest('hex'),
    };
    userApi
      .changePw(hashedPWSet, localStorage.getItem('AccessToken'))
      .then(({ status }) => {
        if (status !== 200) {
          throw new Error();
        }
        message.destroy();
        message.success('비밀번호 변경에 성공했습니다.');
        onClose();
      })
      .catch(() => {
        message.destroy();
        message.error('올바르지 않은 비밀번호 입니다.');
      });
  };

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
