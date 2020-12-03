import Login from '../../Components/Login/Login';
import Helmet from 'react-helmet';
import LoginTemp from '../../Components/Login/LoginTemp';

const LoginPresenter = ({handleInput, handleSubmit}) => (
    <>
        <Helmet>
            <title>반창고 | 로그인</title>
        </Helmet>
        {/* <Login handleInput={handleInput} handleSubmit={handleSubmit} /> */}
        <LoginTemp />
    </>
);

export default LoginPresenter;