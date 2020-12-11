import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Admin from '../../Components/Admin/Admin';

const AdminPresenter = ({
  handleLoginInput,
  handleLoginSubmit,
  refreshUser,
}) => (
  <>
    <Helmet>
      <title>반창고 | 관리자 페이지</title>
    </Helmet>
    <Admin
      handleLoginInput={handleLoginInput}
      handleLoginSubmit={handleLoginSubmit}
      refreshUser={refreshUser}
    />
  </>
);

AdminPresenter.propTypes = {
  handleLoginInput: PropTypes.func.isRequired,
  handleLoginSubmit: PropTypes.func.isRequired,
  refreshUser: PropTypes.func.isRequired,
};

export default AdminPresenter;
