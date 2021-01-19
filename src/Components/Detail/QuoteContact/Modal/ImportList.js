import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { estimateApi } from '../../../../api';
import PropTypes from 'prop-types';

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

const Container = styled.div`
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

const ListRadioButton = styled.input`
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

const ImportListModal = ({
  onClose,
  visible,
  getEstimateItems,
  goToResultList,
}) => {
  const [estimateList, setEstimateList] = useState([]);
  const [estimateId, setEstimateId] = useState(-1);

  const getEstimateLists = useCallback(() => {
    estimateApi
      .getEstimateInfo(
        localStorage.getItem('userId'),
        localStorage.getItem('AccessToken'),
      )
      .then(({ data: { estimates } }) => {
        setEstimateList(estimates);
      })
      .catch(({ response: { status } }) => {
        if (status === 400) {
          alert('[400] 요청 형식이 잘못되었습니다.');
          return;
        } else if (status === 401) {
          alert('[401] 로그인을 다시 해주세요.');
          return;
        } else if (status === 403) {
          alert('[403] 해당 요청을 수행할 권한이 없습니다.');
        } else if (status === 404) {
          return;
        }
      });
  }, []);

  useEffect(() => {
    getEstimateLists();
  }, [getEstimateLists]);

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
          <Container>
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
              {estimateList.map((item, idx) => (
                <ListChild key={idx}>
                  <ListRadioButton
                    type="radio"
                    name="estimateList"
                    value={item.id}
                    width={'17%'}
                    onChange={() => {
                      setEstimateId(item.id);
                    }}
                  />
                  <ListChildText width={'30%'}>
                    {item.warehouse.name}
                  </ListChildText>
                  <ListChildText width={'45%'}>
                    {item.warehouse.address}
                  </ListChildText>
                </ListChild>
              ))}
            </ListContainer>
            <SubmitButton
              onClick={() => {
                getEstimateItems(estimateId);
                onClose();
                goToResultList();
              }}
            >
              불러오기
            </SubmitButton>
          </Container>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

ImportListModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  getEstimateItems: PropTypes.func.isRequired,
};

export default ImportListModal;
