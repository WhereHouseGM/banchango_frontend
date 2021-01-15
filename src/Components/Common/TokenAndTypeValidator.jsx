import {useEffect, useCallback} from 'react';
import jwt_decode from 'jwt-decode';
import {useLocation, useHistory} from 'react-router-dom';
import ErrorPage from '../ErrorPage';

const PathNames = {
    LOGIN: '/login',
    SIGNUP: '/signup',
    ADMIN: '/admin',
    MYPAGE: 'mypage/quotation',
    MYPAGE_QUOTATION: '/mypage/quotation',
    MYPAGE_HOUSELIST: '/mypage/houselist',
    REGISTER: '/register',
    WAREHOUSES_QUOTECONTACT: '/warehouses/quotecontact'
}

const TokenValidator = () => {
    const history = useHistory();
    const location = useLocation();
    const localStorageItems = {
        Login: localStorage.getItem('Login'),
        Role: localStorage.getItem('Role'),
        RefreshToken: localStorage.getItem('RefreshToken'),
        UserId: localStorage.getItem('userId'),
        Name: localStorage.getItem('Name'),
        AccessToken: localStorage.getItem('AccessToken'),
        Email: localStorage.getItem('Email'),
        Type: localStorage.getItem('type')
    }

    const validateToken = () => {
        if(localStorageItems.AccessToken !== null && localStorageItems.AccessToken !== undefined) {
            return jwt_decode(localStorageItems.AccessToken).exp * 1000 < new Date().getTime();
        }
    }

    const verifyAccess = () => {
        switch(location.pathname) {
            case PathNames.LOGIN:
                if(localStorageItems.Login === 'true' || localStorageItems.Role !== null || localStorageItems.Role !== undefined || localStorageItems.RefreshToken !== null || localStorageItems.RefreshToken !== undefined || localStorageItems.UserId !== null || localStorageItems.UserId !== undefined || localStorageItems.Name !== null || localStorageItems.Name !== undefined || localStorageItems.AccessToken !== null || localStorageItems.AccessToken !== undefined || localStorageItems.Email !== null || localStorageItems.Email !== undefined || localStorageItems.Role !== null || localStorageItems.Role !== undefined) {
                    history.push("/error");
                } else return null;
            default:
                return null;
        }
    }

    // const validateToken = useCallback(() => {
    //     let token = localStorage.getItem('AccessToken');
    //     if(token !== null && token !== undefined) {
    //         let isTokenExpired = jwt_decode(token).exp * 1000 < new Date().getTime();
    //         if(isTokenExpired) {
    //             alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
    //             window.location.href = "/login"
    //         }
    //     }
    // }, []);

    useEffect(() => {
        validateToken();
    }, [validateToken]);

    return verifyAccess();
}

export default TokenValidator;