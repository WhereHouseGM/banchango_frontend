import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import JoinLogo from '../../assets/icons/join-logo.png';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e4e3e3;
`;

const ImageContainer = styled.div`
    width: 600px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 250px;
    height: 110px;
`;

const LoginContainer = styled.div`
    width: 600px;
    margin-bottom: 60px;
`;

const LoginInputContainer = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const LoginInputHeader = styled.h1`
    &:before {
        content: "";
        width: 80px;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        border-bottom: 2px solid #91d18b;
    }
    position: relative;
    font-weight: bold;
    font-size: 30px;
`;

const LoginForm = styled.form`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoginInput = styled.input`
    &:focus {
        outline: none;
        border-color: #91d18b;
    }
    width: 350px;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    color: #444;
`;

const LoginButton = styled.button`
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: #91d18b;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        transform: translateZ(0) scale(0.98);
    }
`;

const Login = ({handleSubmit, handleInput}) => (
    <Container>
        <ImageContainer>
            <Image src={JoinLogo} alt="Logo" />
        </ImageContainer>
        <LoginContainer>
            <LoginInputContainer>
                <LoginInputHeader>
                    로그인
                </LoginInputHeader>
                <LoginForm onSubmit={handleSubmit}>
                    <LoginInput name="email" type="email" placeholder="이메일" onChange={handleInput} required />
                    <LoginInput name="password" type="password" placeholder="암호" onChange={handleInput} required/>
                    <LoginButton>
                        로그인
                    </LoginButton>
                </LoginForm>
            </LoginInputContainer>
        </LoginContainer>
    </Container>
);

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleInput: PropTypes.func.isRequired
}

export default Login;


