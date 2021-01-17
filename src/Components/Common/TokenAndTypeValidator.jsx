import { useCallback } from 'react';
import jwt_decode from 'jwt-decode';
import {useLocation} from 'react-router-dom';
import ErrorPage from '../ErrorPage';

const PathNames = {
    LOGIN: '/login',
    SIGNUP: '/signup',
    ADMIN: '/admin',
    MYPAGE: '/mypage',
    MYPAGE_QUOTATION: '/mypage/quotation',
    MYPAGE_HOUSELIST: '/mypage/houselist',
    REGISTER: '/register',
    WAREHOUSES_QUOTECONTACT: '/warehouses/quotecontact/',
}

const TokenAndTypeValidator = ({children}) => {
    const location = useLocation();

    const verifyAccess = useCallback(() => {
        const isTokenExpired = () => {
            if(localStorage.getItem('AccessToken') !== null) {
                return jwt_decode(localStorage.getItem('AccessToken')).exp * 1000 < new Date().getTime();
            }
        }

        const isUserLoggedIn = () => {
            return localStorage.getItem('Login') === 'true' && localStorage.getItem('Role') !== null && localStorage.getItem('RefreshToken') !== null && localStorage.getItem('userId') !== null && localStorage.getItem('Name') !== null && localStorage.getItem('AccessToken') !== null && localStorage.getItem('Email') !== null && localStorage.getItem('type') !== null;
        }

        switch(location.pathname) {
            case PathNames.LOGIN:
                if(isUserLoggedIn()) {
                    return <ErrorPage error={'잘못된 접근입니다.'} />;
                } else {
                    return children;
                }
            case PathNames.SIGNUP:
                if(isUserLoggedIn()) {
                    return <ErrorPage error={'잘못된 접근입니다.'} />;
                } else return children;
            case PathNames.ADMIN:
                if(isUserLoggedIn()) {
                   if(isTokenExpired()) {
                       alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
                       localStorage.clear();
                       window.location.href = "/login";
                       break;
                   } else {
                       if(localStorage.getItem('Role') === 'ADMIN') {
                           return children;
                       } else {
                           return <ErrorPage error={'잘못된 접근입니다.'} />;
                       }
                   }
                } else return <ErrorPage error={'잘못된 접근입니다.'} />;
            case PathNames.MYPAGE:
                if(isUserLoggedIn()) {
                    if(isTokenExpired()) {
                       alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
                       localStorage.clear();
                       window.location.href = "/login";
                       break;
                    } else {
                       return children;
                    }
                } else {
                    return <ErrorPage error={'잘못된 접근입니다.'} />;
                }
            case PathNames.MYPAGE_QUOTATION:
                if(isUserLoggedIn()) {
                    if(isTokenExpired()) {
                        alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
                        localStorage.clear();
                        window.location.href = "/login";
                        break;
                    } else {
                        if(localStorage.getItem('type') === 'SHIPPER') {
                            return children;
                        } else {
                            return <ErrorPage error={'잘못된 접근입니다.'} />;
                        }
                    }
                } else {
                    return <ErrorPage error={'잘못된 접근입니다.'} />;
                }
            case PathNames.MYPAGE_HOUSELIST:
                if(isUserLoggedIn()) {
                    if(isTokenExpired()) {
                        alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
                        localStorage.clear();
                        window.location.href = "/login";
                        break;
                    } else {
                        if(localStorage.getItem('type') === 'OWNER') {
                            return children;
                        } else {
                            return <ErrorPage error={'잘못된 접근입니다.'} />;
                        }
                    }
                } else {
                    return <ErrorPage error={'잘못된 접근입니다.'} />;
                }
            case PathNames.REGISTER:
                if(isUserLoggedIn()) {
                    if(isTokenExpired()) {
                        alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
                        localStorage.clear();
                        window.location.href = "/login";
                        break;
                    } else {
                        if(localStorage.getItem('type') === 'OWNER') {
                            return children;
                        } else {
                            return <ErrorPage error={'잘못된 접근입니다.'} />;
                        }
                    }
                } else {
                    return <ErrorPage error={'잘못된 접근입니다.'} />;
                }
            case PathNames.WAREHOUSES_QUOTECONTACT:
                if(isUserLoggedIn()) {
                    if(isTokenExpired()) {
                        alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
                        localStorage.clear();
                        window.location.href = "/login";
                        break;
                    } else {
                        if(localStorage.getItem('type') === 'SHIPPER') {
                            return children;
                        } else {
                            return <ErrorPage error={'잘못된 접근입니다.'} />;
                        }
                    }
                } else {
                    return <ErrorPage error={'잘못된 접근입니다.'} />;
                }
            default:
                if(isUserLoggedIn()) {
                    if(isTokenExpired()) {
                        alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
                        localStorage.clear();
                        window.location.href = "/login";
                        break;
                    } else {
                        if(localStorage.getItem('type') === 'SHIPPER') {
                            return children;
                        } else {
                            return <ErrorPage error={'잘못된 접근입니다.'} />;
                        }
                    }
                } else {
                    return <ErrorPage error={'잘못된 접근입니다.'} />;
                }
        }
    }, [location.pathname, children]);

    return verifyAccess();
}

export default TokenAndTypeValidator;