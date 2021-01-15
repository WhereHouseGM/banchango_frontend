import {useEffect, useCallback} from 'react';
import jwt_decode from 'jwt-decode';

const TokenValidator = () => {
    const validateToken = useCallback(() => {
        let token = localStorage.getItem('AccessToken');
        if(token !== null && token !== undefined) {
            let isTokenExpired = jwt_decode(token).exp * 1000 < new Date().getTime();
            if(isTokenExpired) {
                alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
                window.location.href = "/login"
            }
        }
    }, [])

    useEffect(() => {
        validateToken();
    }, [validateToken]);

    return null;
}

export default TokenValidator;