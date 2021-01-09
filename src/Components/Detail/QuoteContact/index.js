import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-width: 1024px;
`;
const Wrapper = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 0px auto;
`;
const Title = styled.div`
  font-weight: bold;
  margin-top: 10px;
  padding: 15px 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const ProductTitleWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 15px;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const ProductTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  padding-left: 25px;
`;
const RestoreButton = styled.div`
  border: 1px solid #1e56a0;
  border-radius: 20px;
  padding: 10px 15px;
  font-weight: bold;
  font-size: 14px;
  color: #1e56a0;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ProductBlankWrapper = styled.div`
  flex: 1;
`;
const ProductLeftWrapper = styled.div`
  width: 45%;
`;
const ProductRightWrapper = styled.div`
  width: 45%;
`;
const InputTitle = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const InputTitleText = styled.div`
  color: #1e56a0;
  font-size: 20px;
  margin-right: 5px;
  font-weight: bold;
`;
const BlueText = ({ text, noRequired }) => (
  <InputTitle>
    <InputTitleText>{text}</InputTitleText>
    {!noRequired && <div style={{ color: 'red' }}>*</div>}
  </InputTitle>
);
const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;
const InputBox = styled.input`
  width: 75%;
  height: 28px;
  margin-bottom: 40px;
`;
const InputSubText = styled.div`
  color: #1e56a0;
  font-size: 20px;
  margin-top: 2px;
  margin-left: 10px;
  font-weight: bold;
`;
const PickButtonWrapper = styled.div`
  width: 75%;
  display: flex;
  margin-bottom: 40px;
`;
const PickButton = styled.div`
  flex: 1;
  text-align: center;
  padding: 7px 0;
  border: 1px solid rgba(0, 0, 0, 0.25);
  &:hover {
    cursor: pointer;
  }
`;
const AddProductButton = styled.div`
  color: #1e56a0;
  border: solid 1px #1e56a0;
  padding: 10px 10px;
  font-weight: bold;
  margin: 10px auto;
  width: 200px;
  border-radius: 20px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const ProductListWrapper = styled.div``;
const ProductListTitle = styled.div`
  font-weight: bold;
  width: 100%;
  font-size: 30px;
  padding: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const HistoryUpper = styled.div`
  display: flex;
  padding: 15px 0;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  text-align: center;
`;
const HistoryUpperText = styled.div`
  font-weight: bold;
  font-size: 15px;
  width: ${(props) => props.width};
`;
const HistoryChild = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;
const HistoryChildText = styled.div`
  width: ${(props) => props.width};
`;
const TotalCountContainer = styled.div`
  margin: 25px 0;
  display: flex;
  flex-direction: row-reverse;
`;
const TotalCountWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #1e56a0;
  font-size: 25px;
  font-weight: bold;
`;
const TotalCountTitle = styled.div`
  padding-left: 15px;
  margin-right: 5px;
`;
const TotalCountInput = styled.input`
  margin-left: 10px;
  width: 200px;
`;
const TotalCountSubText = styled.div`
  margin-left: 10px;
`;
const AnnounceTitle = styled.div`
  margin-top: 80px;
  font-weight: bold;
  width: 100%;
  font-size: 30px;
  padding: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const TextareaWrapper = styled.div`
  width: 80%;
  height: 300px;
  margin: 30px auto;
`;
const AnnounceTextarea = styled.textarea`
  height: 100%;
  width: 100%;
`;
const InquiryButton = styled.div`
  background-color: #1e56a0;
  color: white;
  border-radius: 40px;
  padding: 20px 60px;
  text-align: center;
  font-size: 20px;
  width: 300px;
  margin: 40px auto;
  &:hover {
    cursor: pointer;
  }
`;

const DUMMY_HISTORY = [
  {
    category: '마우스',
    big: '120cm',
    weight: '12.5kg',
    sku: '2개',
    quantity: '12개',
    form: '상온',
    barcord: '있음.',
  },
  {
    category: '마우스',
    big: '120cm',
    weight: '12.5kg',
    sku: '2개',
    quantity: '12개',
    form: '상온',
    barcord: '있음.',
  },
  {
    category: '마우스',
    big: '120cm',
    weight: '12.5kg',
    sku: '2개',
    quantity: '12개',
    form: '상온',
    barcord: '있음.',
  },
  {
    category: '마우스',
    big: '120cm',
    weight: '12.5kg',
    sku: '2개',
    quantity: '12개',
    form: '상온',
    barcord: '있음.',
  },
];
const QuoteContact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>견적 문의하기 - 스토리지 원</Title>
        <ProductTitleWrapper>
          <ProductTitle>상품 정보</ProductTitle>
          <RestoreButton>불러오기</RestoreButton>
        </ProductTitleWrapper>
        <ProductWrapper>
          <ProductBlankWrapper />
          <ProductLeftWrapper>
            <BlueText text={'상품 종류'} />
            <InputBox />
            <BlueText text={'상품 크기 (가로 세로 높이의 합)'} />
            <InputWrapper>
              <InputBox />
              <InputSubText>cm</InputSubText>
            </InputWrapper>
            <BlueText text={'상품 무게'} />
            <InputWrapper>
              <InputBox />
              <InputSubText>kg</InputSubText>
            </InputWrapper>{' '}
            <BlueText text={'SKU'} />
            <InputWrapper>
              <InputBox />
              <InputSubText>개</InputSubText>
            </InputWrapper>
          </ProductLeftWrapper>
          <ProductRightWrapper>
            <BlueText text={'보관 수량'} />
            <InputWrapper>
              <InputBox />
              <InputSubText>개</InputSubText>
            </InputWrapper>
            <BlueText text={'보관 형태'} />
            <PickButtonWrapper>
              <PickButton>상온</PickButton>
              <PickButton>냉장</PickButton>
              <PickButton>냉동</PickButton>
            </PickButtonWrapper>
            <BlueText text={'바코드'} />
            <PickButtonWrapper>
              <PickButton>있음</PickButton>
              <PickButton>없음</PickButton>
              <PickButton>일부</PickButton>
            </PickButtonWrapper>
            <BlueText text={'URL'} noRequired={true} />
            <InputBox />
          </ProductRightWrapper>
        </ProductWrapper>
        <AddProductButton>상품 추가하기</AddProductButton>
        <ProductListWrapper>
          <ProductListTitle>상품 내역</ProductListTitle>
        </ProductListWrapper>
        <HistoryUpper>
          <HistoryUpperText width={'12%'}>상품 종류</HistoryUpperText>
          <HistoryUpperText width={'12%'}>상품 크기</HistoryUpperText>
          <HistoryUpperText width={'12%'}>상품 무게</HistoryUpperText>
          <HistoryUpperText width={'12%'}>SKU</HistoryUpperText>
          <HistoryUpperText width={'12%'}>보관 수량</HistoryUpperText>
          <HistoryUpperText width={'12%'}>보관 형태</HistoryUpperText>
          <HistoryUpperText width={'12%'}>바코드</HistoryUpperText>
          <HistoryUpperText width={'12%'}>상품 URL</HistoryUpperText>
        </HistoryUpper>
        {DUMMY_HISTORY.map((item, idx) => (
          <HistoryChild key={idx}>
            <HistoryChildText width={'12%'}>{item.category}</HistoryChildText>
            <HistoryChildText width={'12%'}>{item.big}</HistoryChildText>
            <HistoryChildText width={'12%'}>{item.weight}</HistoryChildText>
            <HistoryChildText width={'12%'}>{item.sku}</HistoryChildText>
            <HistoryChildText width={'12%'}>{item.quantity}</HistoryChildText>
            <HistoryChildText width={'12%'}>{item.form}</HistoryChildText>
            <HistoryChildText width={'12%'}>{item.barcord}</HistoryChildText>
            <HistoryChildText width={'12%'}>클릭</HistoryChildText>
          </HistoryChild>
        ))}
        <TotalCountContainer>
          <TotalCountWrapper>
            <TotalCountTitle>월간 총 출고량</TotalCountTitle>
            <div style={{ color: 'red' }}>*</div>
            <TotalCountInput />
            <TotalCountSubText>건</TotalCountSubText>
          </TotalCountWrapper>
        </TotalCountContainer>
        <ProductListWrapper>
          <AnnounceTitle>요청 및 유의 사항</AnnounceTitle>
          <TextareaWrapper>
            <AnnounceTextarea placeholder={'내용 입력'} />
          </TextareaWrapper>
          <InquiryButton>견적 문의하기</InquiryButton>
        </ProductListWrapper>
      </Wrapper>
    </Container>
  );
};
export default QuoteContact;
