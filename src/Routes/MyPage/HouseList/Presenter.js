import Helmet from 'react-helmet';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import HouseList from '../../../Components/MyPage/HouseList';
import TokenAndTypeValidator from '../../../Components/Common/TokenAndTypeValidator';

const Presenter = () => (
  <>
    <Helmet>
      <title>반창고 | 내 창고 목록보기</title>
    </Helmet>
    <TokenAndTypeValidator />
    <Navbar />
    <HouseList />
    <Footer />
  </>
);

export default Presenter;
