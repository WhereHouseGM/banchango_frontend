import React, { useState } from 'react';
import { ModalWrapper, ModalOverlay, ModalInner } from './Modal_Styles';
import styled from 'styled-components';
import Slider from 'react-slick';

const Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SliderCon = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export const ShowImageModal = ({ onClose, visible }) => {
  const confirmClicked = () => {};
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
            <div> {'<'} </div>
            <SliderCon>
              <Slider {...settings}>
                <img
                  src={
                    'https://user-images.githubusercontent.com/62606632/103613265-98e16200-4f69-11eb-871f-8221757daec4.png'
                  }
                />
                <img
                  src={
                    'https://user-images.githubusercontent.com/62606632/103613265-98e16200-4f69-11eb-871f-8221757daec4.png'
                  }
                />
                <img
                  src={
                    'https://user-images.githubusercontent.com/62606632/103613265-98e16200-4f69-11eb-871f-8221757daec4.png'
                  }
                />
              </Slider>
            </SliderCon>
            <div> {'>'} </div>
          </Con>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default ShowImageModal;
