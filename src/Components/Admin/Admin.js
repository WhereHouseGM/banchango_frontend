import React from 'react';
import PropTypes from 'prop-types';

const Admin = ({ handleLoginInput, handleLoginSubmit }) => (
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
            <span>이메일 </span>
            <input
              onChange={handleLoginInput}
              type="text"
              id="userEmail"
              name="userEmail"
              placeholder="example@email.com"
              required
            />
            &nbsp;&nbsp;&nbsp;
            <span>비밀번호 </span>
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
      회원 가입 하기
    </span>
  </>
);

Admin.propTypes = {
  handleLoginInput: PropTypes.func.isRequired,
  handleLoginSubmit: PropTypes.func.isRequired,
};

export default Admin;
