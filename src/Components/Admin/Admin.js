import React from 'react';
import PropTypes from 'prop-types';
import {
  WarehouseConditions,
  AirConditioningTypes,
  MainItemTypes,
  CheckBoxTypes,
} from '../../static/admin';

const Admin = ({
  handleLoginInput,
  handleLoginSubmit,
  refreshUser,
  handleInfoInput,
  handleRegisterSubmit,
  handleMainImageSelect,
  handleMainImageSubmit,
}) => (
  <>
    <div style={{ fontSize: '30px' }}>
      창고 등록 절차 간편화를 위한 어드민 페이지!
    </div>
    <br />
    <div>
      <div style={{ color: 'red', fontSize: '25px' }}>
        ***주의: 오타 적발 시 CTO 죽빵 날라감***
      </div>
      <br />
      <div style={{ fontSize: '23px' }}>
        순서대로 하세요!!! <br />
        <br />
        (1) 창고주 계정 로그인 (2) 창고정보등록 (3) 창고 메인사진등록 (4) 창고
        추가사진등록
      </div>
      <br />
      <h4>
        참고) 사진 등록은 필수가 아닙니다. 있을 시에만 하고{' '}
        <span style={{ borderBottom: '1px solid red', color: 'red' }}>
          용량은 반드시 KB단위로 줄여서
        </span>
        등록해주세요.
      </h4>
      <br />
    </div>
    <div style={{ border: '2px solid black' }}>
      <div>1. 창고주 아이디 로그인</div>
      <br />
      <form>
        <div id="infoWrapper1">
          <span>
            <span>
              이메일<span style={{ color: 'red' }}>*</span>&nbsp;
            </span>
            <input
              onChange={handleLoginInput}
              type="text"
              id="userEmail"
              name="userEmail"
              placeholder="example@email.com"
              required
            />
            &nbsp;&nbsp;&nbsp;
            <span>
              비밀번호<span style={{ color: 'red' }}>*</span>{' '}
            </span>
            <input
              onChange={handleLoginInput}
              type="password"
              id="userPass"
              name="userPass"
              placeholder="비밀번호"
              required
            />
          </span>
        </div>
      </form>
    </div>
    <br />
    <span
      onClick={handleLoginSubmit}
      id="signupBtn"
      style={{
        borderRadius: '3px',
        border: '2px solid black',
        color: 'black',
        backgroundColor: 'lightblue',
        cursor: 'pointer',
      }}
    >
      창고주 로그인 하기
    </span>
    &nbsp;&nbsp;&nbsp;
    <span
      onClick={refreshUser}
      id="refreshUserBtn"
      style={{
        borderRadius: '3px',
        backgroundColor: '#14c70e',
        border: '2px solid black',
        cursor: 'pointer',
      }}
    >
      창고주 로그아웃 하기
    </span>
    <br />
    <br />
    <div style={{ border: '2px solid black' }}>
      <div>2. 창고 정보 등록</div>
      <br />
      <form>
        <div id="infoWrapper2">
          <span>
            <span>
              창고명<span style={{ color: 'red' }}>*</span>
            </span>
            &nbsp;
            <input
              type="text"
              name="name"
              placeholder="창고명"
              id="name"
              onChange={handleInfoInput}
            />
            &nbsp;&nbsp;&nbsp;
            <span>
              면적(평 단위)<span style={{ color: 'red' }}>*</span>
            </span>
            &nbsp;
            <input
              type="text"
              name="area"
              placeholder="숫자만 입력"
              id="area"
              onChange={handleInfoInput}
            />
          </span>
          <br />
          <br />
          <span>
            <span>
              주소(도로명)<span style={{ color: 'red' }}>*</span>
            </span>
            &nbsp;
            <input
              type="text"
              name="address"
              placeholder="XX시 XX구 XX동"
              id="address"
              onChange={handleInfoInput}
            />
            &nbsp;&nbsp;&nbsp;
            <span>
              상세주소<span style={{ color: 'red' }}>*</span>
            </span>
            &nbsp;
            <input
              type="text"
              name="addressDetail"
              placeholder="XX로 XX"
              id="addressDetail"
              onChange={handleInfoInput}
            />
          </span>
          <br />
          <br />
          <span>
            창고 소개(간단 설명, 띄어쓰기 포함 최대 400자)
            <span style={{ color: 'red' }}>*</span>
          </span>
          &nbsp;
          <textarea
            id="description"
            name="description"
            style={{ width: '100%', height: '70px' }}
            onChange={handleInfoInput}
          />
          <br />
          <br />
          <span>
            오픈 시간<span style={{ color: 'red' }}>*</span>
          </span>
          &nbsp;
          <input
            type="text"
            name="openAt"
            id="openAt"
            placeholder="ex) 09:00 -> 오전 9시"
            onChange={handleInfoInput}
          />
          &nbsp;&nbsp;&nbsp;
          <span>
            마감 시간<span style={{ color: 'red' }}>*</span>
          </span>
          &nbsp;
          <input
            type="text"
            name="closeAt"
            id="closeAt"
            placeholder="ex) 18:30 -> 오후 6시 30분"
            onChange={handleInfoInput}
          />
          &nbsp;&nbsp;&nbsp;
          <span>
            월 최소 출고량<span style={{ color: 'red' }}>*</span>
          </span>
          &nbsp;
          <input
            type="text"
            name="minReleasePerMonth"
            id="minReleasePerMonth"
            placeholder="숫자만 입력"
            onChange={handleInfoInput}
          />
          <br />
          <br />
          <span>
            창고 사용 가능 시간에 대한 추가 설명
            <span style={{ color: 'red' }}>*</span>
          </span>
          <textarea
            id="availableTimeDetail"
            name="availableTimeDetail"
            style={{ width: '100%', height: '70px' }}
            placeholder="ex) 물류 센터 사정에 따라 상이할 수 있습니다."
            onChange={handleInfoInput}
          />
          <br />
          <br />
          <div>
            아래는 해당 사항이 존재(가능) 하다면 체크해주세요.
            <span style={{ color: 'red' }}>*</span>
          </div>
          <br />
          <span style={{ border: '1px solid gray' }}>
            {CheckBoxTypes.map((type, index) => (
              <React.Fragment key={index + `CB`}>
                <input type="checkbox" value={type.value} id={type.id} />
                <label htmlFor={type.value}>{type.children}</label>
                &nbsp;&nbsp;
              </React.Fragment>
            ))}
          </span>
          <br />
          <br />
          <span>
            <span>보안 업체명(있을 시에만 기재)</span>&nbsp;
            <input
              type="text"
              id="securityCompanyName"
              name="securityCompanyName"
              placeholder="업체명"
              onChange={handleInfoInput}
            />
            &nbsp;&nbsp;&nbsp;
            <span>
              보험사명<span style={{ color: 'red' }}>*</span>
            </span>
            &nbsp;
            <input
              type="text"
              id="insuranceName"
              name="insuranceName"
              placeholder="업체명"
              onChange={handleInfoInput}
            />
          </span>
          <br />
          <br />
          <div style={{ border: '1px solid black' }}>
            <legend>
              창고 유형(중복 선택 가능)<span style={{ color: 'red' }}>*</span>
            </legend>
            <br />
            {WarehouseConditions.map((condition, index) => (
              <React.Fragment key={index + `WC`}>
                <input
                  type="checkbox"
                  id={condition.id}
                  value={condition.value}
                  name="warehouseConditions"
                />
                <label htmlFor={condition.id}>{condition.children}</label>
                &nbsp;&nbsp;
              </React.Fragment>
            ))}
          </div>
          <br />
          <div style={{ border: '1px solid black' }}>
            <legend>
              냉난방 작동 방식
              <span style={{ color: 'red' }}>
                (난방, 냉방 둘 다 되면 모두 선택 하세요)*
              </span>
              <br />
              <br />
              <div>
                {AirConditioningTypes.map((type, index) => (
                  <React.Fragment key={index + `AC`}>
                    <input
                      type="radio"
                      name="airConditioningType"
                      id={type.id}
                      value={type.value}
                    />
                    <label htmlFor={type.id}>{type.children}</label>
                    &nbsp;&nbsp;
                  </React.Fragment>
                ))}
              </div>
            </legend>
          </div>
          <br />
          <div style={{ border: '1px solid black' }}>
            <span>
              <span>
                위도 값<span style={{ color: 'red' }}>*</span>
              </span>
              &nbsp;
              <input
                type="text"
                id="latitude"
                name="latitude"
                placeholder="37.XXXXXX"
                onChange={handleInfoInput}
              />
              <span>
                경도 값<span style={{ color: 'red' }}>*</span>
              </span>
              &nbsp;
              <input
                type="text"
                id="longitude"
                name="longitude"
                placeholder="128.XXXXXX"
                onChange={handleInfoInput}
              />
            </span>
          </div>
          <br />
          <div style={{ border: '1px solid black' }}>
            <div>
              창고 종류 (둘 중 하나 선택)<span style={{ color: 'red' }}>*</span>
            </div>
            <br />
            <span>
              <input
                type="radio"
                name="warehouseType"
                id="THREEPL"
                value="THREEPL"
              />
              &nbsp;
              <label htmlFor="THREEPL">3PL</label>&nbsp;&nbsp;&nbsp;
              <input
                type="radio"
                name="warehouseType"
                id="FULFILLMEMT"
                value="FULFULLMENT"
              />
              &nbsp;
              <label htmlFor="FULFULLMENT">풀필먼트</label>
            </span>
          </div>
          <br />
          <div style={{ border: '1px solid black' }}>
            <div>
              창고 대표 품목(1개만 선택)<span style={{ color: 'red' }}>*</span>
            </div>
            <br />
            <span>
              {MainItemTypes.map((type, index) => (
                <React.Fragment key={index + `MI`}>
                  <input
                    type="radio"
                    name="mainItemType"
                    id={type.id}
                    value={type.value}
                  />
                  <label htmlFor={type.value}>{type.children}</label>
                  &nbsp;&nbsp;&nbsp;
                </React.Fragment>
              ))}
            </span>
          </div>
          <br />
          <div style={{ border: '1px solid black' }}>
            <div>
              택배사(여러 개 있을 시 <span style={{ color: 'red' }}>+++</span>로
              구분)<span style={{ color: 'red' }}>*</span>
            </div>
            <br />
            <textarea
              id="deliveryTypes"
              name="deliveryTypes"
              style={{ width: '100%', height: '70px' }}
              placeholder="ex. 우체국 택베와 EMS가 있을 경우 --> 우체국 택배+++EMS"
              onChange={handleInfoInput}
            />
          </div>
          <br />
          <div style={{ border: '1px solid black' }}>
            <div>
              창고 시설 이용 유의사항(여러 개 있을 시{' '}
              <span style={{ color: 'red' }}>+++</span>로 구분, 최대 10개)
            </div>
            <br />
            <textarea
              id="warehouseFacilityUsages"
              name="warehouseFacilityUsages"
              placeholder="창고 시설 이용 유의사항"
              style={{ width: '100%', height: '70px' }}
              onChange={handleInfoInput}
            />
          </div>
          <br />
          <div style={{ border: '1px solid black' }}>
            <div>
              창고 시설 이용 시 주의사항(여러 개 있을 시{' '}
              <span style={{ color: 'red' }}>+++</span>로 구분, 최대 10개)
            </div>
            <br />
            <textarea
              id="warehouseUsageCautions"
              name="warehouseUsageCautions"
              placeholder="창고 이용 시 주의사항"
              style={{ width: '100%', height: '70px' }}
              onChange={handleInfoInput}
            />
          </div>
        </div>
        <br />
        <span
          onClick={handleRegisterSubmit}
          id="warehouseRegisterBtn"
          style={{
            borderRadius: '3px',
            backgroundColor: '#14c70e',
            border: '2px solid black',
            cursor: 'pointer',
          }}
        >
          창고 정보 등록하기
        </span>
      </form>
    </div>
    <br />
    <br />
    <div style={{ border: '2px solid black' }}>
      <div>3. 창고 메인 이미지 등록하기</div>
      <div style={{ clor: 'red' }}>
        사진크기는 800000 바이트 이하로 해주셈요~
      </div>
      <br />
      <div id="selectMainPhoto">
        <input
          type="file"
          id="mainImage"
          formEncType="multipart/form-data"
          onChange={handleMainImageSelect}
        />
        <br />
        <span id="fileSize" style={{ color: 'red' }}></span>
      </div>
      <br />
      <span
        id="mainPhotoRegisterBtn"
        style={{
          backgroundColor: '#14c70e',
          border: '1px solid black',
          cursor: 'pointer',
        }}
        onClick={handleMainImageSubmit}
      >
        메인 이미지 등록하기
      </span>
    </div>
  </>
);

Admin.propTypes = {
  handleLoginInput: PropTypes.func.isRequired,
  handleLoginSubmit: PropTypes.func.isRequired,
  refreshUser: PropTypes.func.isRequired,
  handleRegisterSubmit: PropTypes.func.isRequired,
  handleMainImageSelect: PropTypes.func.isRequired,
  handleMainImageSubmit: PropTypes.func.isRequired,
};

export default Admin;
