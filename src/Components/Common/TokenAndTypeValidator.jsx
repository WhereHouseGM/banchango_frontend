import { useCallback } from 'react';
import jwt_decode from 'jwt-decode';
import {useLocation, useHistory} from 'react-router-dom';
import ErrorPage from '../ErrorPage';

const PathNames = {
    LOGIN: '/login',
    SIGNUP: '/signup',
    ADMIN: '/admin',
    MYPAGE: '/mypage',
    MYPAGE_QUOTATION: '/mypage/quotation',
    MYPAGE_HOUSELIST: '/mypage/houselist',
    REGISTER: '/register',
    WAREHOUSES_QUOTECONTACT: '/warehouses/quotecontact'
}

const TokenAndTypeValidator = ({children}) => {
    const history = useHistory();
    const location = useLocation();

    const verifyAccess = useCallback(() => {
        console.log(`VERIFY ACCESS TO ${location.pathname}`)
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
                    console.log("USER IS LOGGED IN");
                    return <ErrorPage error={'잘못된 접근입니다.'} />
                } else {
                    console.log("USER IS NOT LOGGED IN")
                    return children;
                }
            case PathNames.SIGNUP:
                if(isUserLoggedIn()) {
                    history.push("/error");
                    return null;
                } else return null;
            case PathNames.ADMIN:
                if(isUserLoggedIn()) {
                   if(isTokenExpired()) {
                       alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
                       localStorage.clear();
                       window.location.href = "/login";
                       break;
                   } else {
                       if(localStorage.getItem('Role') === 'ADMIN') {
                           return null;
                       } else {
                           history.push("/error");
                           return null;
                       }
                   }
                } else return null;
            case PathNames.MYPAGE:
                if(isUserLoggedIn()) {
                    if(isTokenExpired()) {
                       alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
                       localStorage.clear();
                       window.location.href = "/login";
                       break;
                    } else {
                       return null;
                    }
                } else {
                    window.location.href = "/error"
                    return null;
                }
            case PathNames.MYPAGE_QUOTATION:
                console.log(location.pathname);
                if(isUserLoggedIn()) {
                    if(isTokenExpired()) {
                        alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
                        localStorage.clear();
                        window.location.href = "/login";
                        break;
                    } else {
                        if(localStorage.getItem('type') === 'SHIPPER') {
                            return null;
                        } else {
                            history.push("/error");
                            return null;
                        }
                    }
                } else {
                    history.push("/error");
                    break;
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
                            return null;
                        } else {
                            history.push("/error");
                            return;
                        }
                    }
                } else {
                    history.push("/error");
                    break;
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
                            return null;
                        } else {
                            history.push("/error")
                            return;
                        }
                    }
                } else {
                    history.push("/error")
                    break;
                }
            case PathNames.WAREHOUSES_QUOTECONTACT:
                if(isUserLoggedIn()) {
                    if(isTokenExpired()) {
                        alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
                        localStorage.clear();
                        window.location.href = "/login";
                        break;
                    } else {
                        if(localStorage.getITem('type') === 'SHIPPER') {
                            return null;
                        } else {
                            history.push("/error")
                            break;
                        }
                    }
                } else {
                    history.push("/error")
                    break;
                }
            default:
                return null;
        }
    }, [history, location.pathname, children]);

    // useEffect(() => {
    //     verifyAccess();
    // }, [verifyAccess]);

    return verifyAccess();
}

export default TokenAndTypeValidator;