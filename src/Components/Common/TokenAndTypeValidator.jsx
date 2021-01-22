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

        const isAdminLoggedIn = () => {
            return isUserLoggedIn() === true && localStorage.getItem('Role') === 'ADMIN';
        }

        switch(location.pathname) {
            case PathNames.LOGIN:
                if(isUserLoggedIn()) {
                    return <ErrorPage title={'잘못된 접근입니다.'} message={'잘못된 접근입니다.'} locationToGo={'/'} buttonMessage={'메인 화면으로 이동'}/>;
                } else {
                    return children;
                }
            case PathNames.SIGNUP:
                if(isUserLoggedIn()) {
                    return <ErrorPage title={'잘못된 접근입니다.'} message={'잘못된 접근입니다.'} locationToGo={'/'} buttonMessage={'메인 화면으로 이동'}/>;
                } else return children;
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
                    return <ErrorPage title={'잘못된 접근입니다.'} message={'로그인을 먼저 해주세요.'} locationToGo={'/login'} buttonMessage={'로그인 하기'} />;
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
                            return <ErrorPage title={'잘못된 접근입니다.'} message={'잘못된 접근입니다.'} locationToGo={'/'} buttonMessage={'메인 화면으로 이동'} />;
                        }
                    }
                } else {
                    return <ErrorPage title={'잘못된 접근입니다.'} message={'로그인을 먼저 해주세요.'} locationToGo={'/login'} buttonMessage={'로그인 하기'}/>;
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
                            return <ErrorPage title={'잘못된 접근입니다.'} message={'잘못된 접근입니다.'} locationToGo={'/'} buttonMessage={'메인 화면으로 이동'} />;
                        }
                    }
                } else {
                    return <ErrorPage title={'잘못된 접근입니다.'} message={'로그인을 먼저 해주세요.'} locationToGo={'/login'} buttonMessage={'로그인 하기'}/>;
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
                            return <ErrorPage title={'잘못된 접근입니다.'} message={'잘못된 접근입니다.'} locationToGo={'/'} buttonMessage={'메인 화면으로 이동'} />;
                        }
                    }
                } else {
                    return <ErrorPage title={'잘못된 접근입니다.'} message={'로그인을 먼저 해주세요.'} locationToGo={'/login'}  buttonMessage={'로그인 하기'}/>;
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
                            return <ErrorPage title={'잘못된 접근입니다.'} message={'잘못된 접근입니다.'} locationToGo={'/'} buttonMessage={'메인 화면으로 이동'} />;
                        }
                    }
                } else {
                    return <ErrorPage title={'잘못된 접근입니다.'} message={'로그인을 먼저 해주세요.'} locationToGo={'/login'} buttonMessage={'로그인 하기'}/>;
                }
            case PathNames.ADMIN:
                if(isAdminLoggedIn()) {
                    if(isTokenExpired()) {
                        alert('유효기간이 만료되었습니다. 다시 로그인 해주세요.');
                        localStorage.clear();
                        window.location.href = "/login";
                        break;
                    } else {
                        return children;
                    }
                } else {
                    return <ErrorPage title={'잘못된 접근입니다.'} message={'권한이 없습니다.'} locationToGo={'/'} buttonMessage={'메인 화면으로 이동'} />
                }
            default:
                if(location.pathname.includes(PathNames.WAREHOUSES_QUOTECONTACT)) {
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
                                return <ErrorPage title={'잘못된 접근입니다.'} message={'잘못된 접근입니다.'} locationToGo={'/'} buttonMessage={'메인 화면으로 이동'}/>;
                            }
                        }
                    } else {
                        return <ErrorPage title={'로그인 후 견적 요청이 가능합니다.'} message={'로그인을 먼저 해주세요.'} locationToGo={'/login'} buttonMessage={'로그인 하기'}/>;
                    }
            }
        }
    }, [location.pathname, children]);

    return verifyAccess();
}

export default TokenAndTypeValidator;