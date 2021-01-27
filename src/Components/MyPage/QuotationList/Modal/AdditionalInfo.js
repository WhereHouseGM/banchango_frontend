import React from 'react';
import styled from 'styled-components';
import {
  barcodeToText,
  keepingTypeToText,
} from '../../../Detail/QuoteContact/QuoteContact';

const ModalWrapper = styled.div`
  font-family: 'notosans-Regular', sans-serif;
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
  font-size: 17px;
`;
const SubText = styled.div`
  font-size: 14px;
  color: gray;
  margin: 12px 0;
`;
const DetailContainer = styled.div`
  width: 100%;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;
const DetailUpperWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
`;
const DetailUpperText = styled.div`
  font-weight: bold;
  color: #1e56a0;
  width: ${(props) => props.width};
`;
const DetailChildWrapper = styled.div`
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;
const DetailChildText = styled.div`
  width: ${(props) => props.width};
`;
const DetailChildElement = ({ title, text }) => (
  <DetailChildWrapper>
    <DetailChildText width="40%">{title}</DetailChildText>
    <DetailChildText width="60%">{text}</DetailChildText>
  </DetailChildWrapper>
);

export const AdditionalInfoModal = ({ onClose, visible, additionalInfo }) => {
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
          {!!additionalInfo && (
            <Container>
              <Title>견적 상세보기</Title>
              <SubText>선택하신 상품의 상세 내용입니다.</SubText>
              <DetailContainer>
                <DetailUpperWrapper>
                  <DetailUpperText width="40%">항목</DetailUpperText>
                  <DetailUpperText width="60%">상세 내용</DetailUpperText>
                </DetailUpperWrapper>
                <DetailChildElement
                  title="상품 종류"
                  text={additionalInfo.name}
                />
                <DetailChildElement
                  title="상품 크기"
                  text={additionalInfo.perimeter}
                />
                <DetailChildElement
                  title="상품 무게"
                  text={additionalInfo.weight}
                />
                <DetailChildElement
                  title="상품 SKU"
                  text={additionalInfo.sku}
                />
                <DetailChildElement
                  title="보관 수량"
                  text={additionalInfo.keepingNumber}
                />
                <DetailChildElement
                  title="보관 형태"
                  text={keepingTypeToText(additionalInfo.keepingType)}
                />
                <DetailChildElement
                  title="바코드"
                  text={barcodeToText(additionalInfo.barcode)}
                />
                {!!additionalInfo.url && (
                  <DetailChildElement
                    title="상품 URL"
                    text={additionalInfo.url}
                  />
                )}
              </DetailContainer>
            </Container>
          )}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default AdditionalInfoModal;
