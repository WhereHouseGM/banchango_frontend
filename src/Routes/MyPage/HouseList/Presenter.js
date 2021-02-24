import Helmet from 'react-helmet';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import HouseList from '../../../Components/MyPage/HouseList';

const Presenter = () => (
  <>
    <Helmet>
      <title>반창고 허브 | 내 창고 목록보기</title>
    </Helmet>
    <Navbar />
    <HouseList />
    <Footer />
  </>
);

export default Presenter;
