import Helmet from 'react-helmet';
import Category from '../../Components/Category/Category';

const CategoryPresenter = () => (
  <>
    <Helmet>
      <title>반창고 | 목록 보기</title>
    </Helmet>
    <Category />
  </>
);

export default CategoryPresenter;
