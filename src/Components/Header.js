import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { message } from 'antd';

const NavContainer = styled.div`
    width: 100%;
    height: 60px;
    padding: 0 30px;
    position: fixed;
    top: 0;
    display: flex;
    background-color: #FFFFFF;
    box-sizing: border-box;
    transition: all 0.3s ease;
    z-index: 1;
`;

const NavLeftContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
`;

const LogoLink = styled(Link)`
    font-family: "Jua", sans-serif;
    font-size: 22px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
`;

const HeaderRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    font-size: 14px;
`;

const UserButton = styled(Link)`
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;
    color: #333;
    transition: 0.2s ease;
    &:hover {
        color: #1c57b0;
    }
`;

const PageLink = styled.a`
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 2px;
    padding-bottom: 2px;
    height: 30px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #333;
    border-radius: 5px;
    transition: all 0.2s ease;
    color: #333;
    &:hover {
        background-color: #1c57b0;
        border-color: #1c57b0;
        color: #fff;
        cursor: pointer;
    }
`;

const warningMessage = () => {
    message.warn("아직 준비중입니다.");
}


const HeaderComponent = () => {


    const [login, setLogin] = useState(JSON.parse(localStorage.getItem("Login")));

    const logout = () => {
        setLogin(false);
        localStorage.setItem("Login", false);
        localStorage.removeItem("AccessToken");
        localStorage.removeItemo("RefreshToken");
        alert("로그인 되었습니다.");
        window.location.replace("/");
    }

    return (
        <NavContainer>
            <NavLeftContainer>
                <LogoLink to="/">BANCHANGO</LogoLink>
            </NavLeftContainer>
            <HeaderRight>
                <PageLink to ="/" onClick={warningMessage}>
                    창고 등록하기
                </PageLink>
                <UserButton to="/" onClick={warningMessage}>
                    ABOUT US
                </UserButton>
                {login ? null : <UserButton to="/join">회원가입</UserButton>}
                {login ? <UserButton to="/" onClick={logout}>로그아웃</UserButton> : <UserButton to="/login">로그인</UserButton>}
            </HeaderRight>
        </NavContainer>
    );

}

export default withRouter(HeaderComponent);