import Helmet from 'react-helmet';
import Category from '../../Components/Category';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const CategoryPresenter = () => {
  return (
    <>
      <Helmet>
        <title>반창고 | 창고 목록 보기</title>
      </Helmet>
      <Navbar />
      <Category />
      <Footer />
    </>
  );
};

export default CategoryPresenter;
