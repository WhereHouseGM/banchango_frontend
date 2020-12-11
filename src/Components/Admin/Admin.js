import React from 'react';
import PropTypes from 'prop-types';

const Admin = ({ handleLoginInput, handleLoginSubmit, refreshUser }) => (
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
            <input type="text" name="name" placeholder="창고명" id="name" />
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
          />
          <br />
          <br />
          <div>
            아래는 해당 사항이 존재(가능) 하다면 체크해주세요.
            <span style={{ color: 'red' }}>*</span>
          </div>
          <br />
          <span style={{ border: '1px solid gray' }}>
            <input type="checkbox" value="cctvExist" id="cctvExist" />
            <label for="cctvExist"> CCTV</label>&nbsp;&nbsp;
            <input type="checkbox" value="doorLockExist" id="doorLockExist" />
            <label for="doorLockExist"> 도어락</label>&nbsp;&nbsp;
            <input
              type="checkbox"
              value="securityCompanyExist"
              id="securityCompanyExist"
            />
            <label for="securityCompanyExist"> 보안 업체</label>&nbsp;&nbsp;
            <input type="checkbox" value="workerExist" id="workerExist" />
            <label for="workerExist">현장 인력 </label>&nbsp;&nbsp;
            <input type="checkbox" value="canPickup" id="canPickup" />
            <label for="canPickup">픽업 </label>&nbsp;&nbsp;
            <input type="checkbox" value="canPark" id="canPark" />
            <label for="canPark">주차 </label>
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
            />
            &nbsp;&nbsp;&nbsp;
            <span>보험사명(있을 시에만 기재)</span>&nbsp;
            <input
              type="text"
              id="insuranceName"
              name="insuranceName"
              placeholder="업체명"
            />
          </span>
          <br />
          <br />
          <div style={{ border: '1px solid black' }}>
            <legend>
              창고 유형(중복 선택 가능)<span style={{ color: 'red' }}>*</span>
            </legend>
            <br />
            <input
              type="checkbox"
              id="ROOM_TEMPERATURE"
              value="ROOM_TEMPERATURE"
            />
            <label for="ROOM_TEMPERATURE"> 상온 창고</label>&nbsp;&nbsp;
            <input
              type="checkbox"
              id="LOW_TEMPERATURE"
              value="LOW_TEMPERATURE"
            />
            <label for="LOW_TEMPERATURE"> 저온 창고</label>&nbsp;&nbsp;
            <input type="checkbox" id="BONDED" value="BONDED" />
            <label for="BONDED"> 보세 창고</label>&nbsp;&nbsp;
            <input type="checkbox" id="SAVAGE" value="SAVAGE" />
            <label for="SAVAGE"> 상온 창고</label>&nbsp;&nbsp;
            <input type="checkbox" id="HAZARDOUS" value="HAZARDOUS" />
            <label for="HAZARDOUS"> 야적 창고</label>&nbsp;&nbsp;
            <input type="checkbox" id="SELF_STORAGE" value="SELF_STORAGE" />
            <label for="SELF_STORAGE"> 셀프 스토리지</label>&nbsp;&nbsp;
            <input type="checkbox" id="CONTAINER" value="CONTAINER" />
            <label for="CONTAINER"> 컨테이너</label>&nbsp;&nbsp;
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
                <input type="checkbox" id="HEATING" value="HEATING" />
                <label for="HEATING"> 난방</label>&nbsp;&nbsp;
                <input type="checkbox" id="COOLING" value="COOLING" />
                <label for="COOLING"> 냉방</label>&nbsp;&nbsp;
                <input type="checkbox" id="BOTH" value="BOTH" />
                <label for="BOTH"> 모두</label>&nbsp;&nbsp;
                <input type="checkbox" id="NONE" value="NONE" />
                <label for="NONE"> 없음</label>&nbsp;&nbsp;
              </div>
            </legend>
          </div>
          <br />
          <div style={{ border: '1px solid black' }}>
            <span>
              <span>위도 값</span>&nbsp;
              <input
                type="text"
                id="latitude"
                name="latitude"
                placeholder="37.XXXXXX"
              />
              <span>경도 값</span>&nbsp;
              <input
                type="text"
                id="longitude"
                name="longitude"
                placeholder="128.XXXXXX"
              />
            </span>
          </div>
          <br />
          <div style={{ border: '1px solid black' }}>
            <div>창고 종류 (둘 중 하나 선택)</div>
            <br />
            <span>
              <input
                type="checkbox"
                className="warehouseType"
                id="THREEPL"
                value="THREEPL"
              />
              &nbsp;
              <label for="THREEPL">3PL</label>&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                className="warehouseType"
                id="FULFILLMEMT"
                value="FULFULLMENT"
              />
              &nbsp;
              <label for="FULFULLMENT">풀필먼트</label>
            </span>
          </div>
          <br />
          <div style={{ border: '1px solid black' }}>
            <div>
              창고 대표 품목(1개만 선택)<span style={{ color: 'red' }}>*</span>
            </div>
            <br />
            <span>
              <input type="checkbox" id="CLOTH" value="CLOTH" />
              <label for="CLOTH"> 의류</label>&nbsp;&nbsp;&nbsp;
              <input type="checkbox" id="COSMETIC" value="COSMETIC" />
              <label for="COSMETIC">화장품</label>&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                id="GENERAL_MERCHANDISE"
                value="GENERAL_MERCHANDISE"
              />
              <label for="GENERAL_MERCHANDISE"> 잡화</label>&nbsp;&nbsp;&nbsp;
              <input type="checkbox" id="ACCESSORY" value="ACCESSORY" />
              <label for="ACCESSORY"> 악세사리</label>&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                id="TEMPERATURE_SENSITIVE"
                value="TEMPERATURE_SENSITIVE"
              />
              <label for="TEMPERATURE_SENSITIVE"> 음식</label>&nbsp;&nbsp;&nbsp;
              <input type="checkbox" id="FURNITURE" value="FURNITURE" />
              <label for="FURNITURE"> 가구</label>&nbsp;&nbsp;&nbsp;
            </span>
          </div>
          <br />
          <div style={{ border: '1px solid black' }}>
            <div>
              택배사(여러 개 있을 시 <span style={{ color: 'red' }}>+++</span>로
              구분)
            </div>
            <br />
            <textarea
              id="deliveryTypes"
              name="deliveryTypes"
              style={{ width: '100%', height: '70px' }}
              placeholder="ex. 우체국 택베와 EMS가 있을 경우 --> 우체국 택배+++EMS"
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
            />
          </div>
        </div>
        <br />
        <span
          onClick={refreshUser}
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
  </>
);

Admin.propTypes = {
  handleLoginInput: PropTypes.func.isRequired,
  handleLoginSubmit: PropTypes.func.isRequired,
  refreshUser: PropTypes.func.isRequired,
};

export default Admin;
