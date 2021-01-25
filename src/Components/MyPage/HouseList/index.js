import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { warehouseApi } from '../../../api';
import {
  MobileContainer,
  MobileDescAccepted,
  MobileDescAddress,
  MobileDescName,
  MobileDescWrapper,
  MobileItemImg,
  MobileItemWrapper,
  NewWarehouseButton,
} from '../style';

import {
  Container,
  LeftBanner,
  BannerTextDisabledBox,
  BannerTextEnabledBox,
  UserInfoContainer,
  TitleWrapper,
  ListTitle,
  NewButton,
  ItemContainer,
  ItemBox,
  ItemImg,
  ItemDescWrapper,
  SubTitle,
  Title,
  TitleUnderLine,
  StatusBox,
  statusToText,
  MobileUpperMenuWrapper,
  MobileUpperMenuButton,
  statusToColorObject,
} from './HouseList';

const HouseList = () => {
  const [warehouses, setWarehouses] = useState([]);
  const getWarehouseLists = useCallback(() => {
    warehouseApi
      .getWarehousesById(
        parseInt(localStorage.getItem('userId')),
        localStorage.getItem('AccessToken'),
      )
      .then(({ data: { warehouses } }) => {
        setWarehouses(warehouses);
      })
      .catch(({ response: { status } }) => {
        if (status === 400) {
          alert('[400] 요청 형식이 잘못되었습니다.');
          return;
        } else if (status === 401) {
          alert('[401] 유효기간이 만료되었습니다. 다시 로그인해주세요.');
          return;
        } else if (status === 403) {
          alert('[403] 해당 요청을 수행할 수 있는 권한이 없습니다.');
          return;
        } else return;
      });
  }, []);

  useEffect(() => {
    getWarehouseLists();
  }, [getWarehouseLists]);

  const history = useHistory();
  return (
    <Container>
      <LeftBanner>
        <BannerTextDisabledBox
          onClick={() => {
            history.push('/mypage');
          }}
        >
          내 프로필
        </BannerTextDisabledBox>
        <BannerTextEnabledBox
          onClick={() => {
            history.push('/mypage/houselist');
          }}
        >
          내 창고
        </BannerTextEnabledBox>
        <BannerTextDisabledBox
          onClick={() => {
            localStorage.clear();
            history.push('/');
          }}
        >
          로그아웃
        </BannerTextDisabledBox>
      </LeftBanner>
      <MobileUpperMenuWrapper>
        <MobileUpperMenuButton
          onClick={() => {
            history.push('/mypage');
          }}
        >
          내 프로필
        </MobileUpperMenuButton>
        <MobileUpperMenuButton isIn>내 창고</MobileUpperMenuButton>
      </MobileUpperMenuWrapper>
      <UserInfoContainer>
        <TitleWrapper>
          <ListTitle>내 창고 목록</ListTitle>
          <NewButton
            onClick={() => {
              history.push('/register');
            }}
          >
            새로 만들기
          </NewButton>
        </TitleWrapper>
        <ItemContainer>
          {warehouses.map((warehouse, idx) => {
            return (
              <ItemBox
                key={`HOUSE${idx}`}
                onClick={() => {
                  if (warehouse.status === 'VIEWABLE') {
                    history.push(
                      `/warehouses/detail/${warehouse.id}/${warehouse.name}`,
                    );
                  }
                }}
              >
                <ItemImg src={warehouse.mainImageUrl} />
                <ItemDescWrapper>
                  <SubTitle>
                    {warehouse.address}&nbsp;{warehouse.addressDetail}
                  </SubTitle>
                  <Title>
                    {warehouse.name}
                    <TitleUnderLine />
                  </Title>
                  <StatusBox style={statusToColorObject(warehouse.status)}>
                    {statusToText(warehouse.status)}
                  </StatusBox>
                </ItemDescWrapper>
              </ItemBox>
            );
          })}
        </ItemContainer>
      </UserInfoContainer>
      <MobileContainer>
        {warehouses.map((warehouse, idx) => (
          <MobileItemWrapper
            key={idx}
            onClick={() => {
              if (warehouse.status === 'VIEWABLE') {
                history.push(
                  `/warehouses/detail/${warehouse.id}/${warehouse.name}`,
                );
              }
            }}
          >
            <MobileItemImg src={warehouse.mainImageUrl} alt={'창고 사진'} />
            <MobileDescWrapper>
              <MobileDescAddress>
                {warehouse.address}&nbsp;{warehouse.addressDetail}
              </MobileDescAddress>
              <MobileDescName>{warehouse.name}</MobileDescName>
              <MobileDescAccepted style={statusToColorObject(warehouse.status)}>
                {statusToText(warehouse.status)}
              </MobileDescAccepted>
            </MobileDescWrapper>
          </MobileItemWrapper>
        ))}
        <NewWarehouseButton
          onClick={() => {
            history.push('/register');
          }}
        >
          새로 만들기
        </NewWarehouseButton>
      </MobileContainer>
    </Container>
  );
};
export default HouseList;
