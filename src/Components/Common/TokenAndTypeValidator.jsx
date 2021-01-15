import jwt_decode from 'jwt-decode';
import {useLocation, useHistory} from 'react-router-dom';

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

    const isTokenExpired = () => {
        if(localStorageItems.AccessToken !== null && localStorageItems.AccessToken !== undefined) {
            return jwt_decode(localStorageItems.AccessToken).exp * 1000 < new Date().getTime();
        }
    }

    const isUserLoggedIn = () => {
        return localStorageItems.Login === 'true' && localStorageItems.Role !== null && localStorageItems.RefreshToken !== null && localStorageItems.UserId !== null && localStorageItems.Name !== null && localStorageItems.AccessToken !== null && localStorageItems.Email !== null && localStorageItems.Type !== null;
    }

    const verifyAccess = () => {
        switch(location.pathname) {
            case PathNames.LOGIN:
                if(isUserLoggedIn()) {
                    history.push("/error");
                    break;
                } else return null;
            case PathNames.SIGNUP:
                if(isUserLoggedIn()) {
                    history.push("/error");
                    break;
                } else return null;
            case PathNames.ADMIN:
                if(localStorageItems.AccessToken === null || localStorageItems.Role !== 'Admin') {
                   if(isTokenExpired()) {
                       alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
                       localStorage.clear();
                       window.location.href = "/login";
                       break;
                   } else {
                    history.push("/error");
                    break;
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
                    history.push("/error");
                    break;
                }
            case PathNames.MYPAGE_QUOTATION:
                if(isUserLoggedIn()) {
                    if(isTokenExpired()) {
                        alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
                        localStorage.clear();
                        window.location.href = "/login";
                        break;
                    } else {
                        if(localStorageItems.Type === 'SHIPPER') {
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
            case PathNames.MYPAGE_HOUSELIST:
                if(isUserLoggedIn()) {
                    if(isTokenExpired()) {
                        alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
                        localStorage.clear();
                        window.location.href = "/login";
                        break;
                    } else {
                        if(localStorageItems.Type === 'OWNER') {
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
                        if(localStorageItems.Type === 'OWNER') {
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
                        if(localStorageItems.Type === 'SHIPPER') {
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
    }

    return verifyAccess();
}

export default TokenValidator;