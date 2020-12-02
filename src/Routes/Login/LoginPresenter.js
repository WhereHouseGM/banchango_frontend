import Login from '../../Components/Login/Login';
import Helmet from 'react-helmet';

const LoginPresenter = ({handleInput, handleSubmit}) => (
    <>
        <Helmet>
            <title>반창고 | 로그인</title>
        </Helmet>
        <Login handleInput={handleInput} handleSubmit={handleSubmit} />
    </>
);

export default LoginPresenter;