import React from 'react';
import DetailPresenter from './DetailPresenter';
import 'react-toastify/dist/ReactToastify.css';
import { warehouseApi } from '../../api';

class DetailContainer extends React.Component {
  state = {
    houseDetail: null,
    error: null,
    loading: true,
  };

  componentDidMount = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    try {
      const result = await warehouseApi.houseDetail(id);
      const { status } = result;
      if (status !== 200) {
        throw new Error();
      }
      const houseDetail = result.data;
      // TODO: setState에서 오류 계속 난다...
      this.setState({ houseDetail: houseDetail });
      // this.setState({ loading: false });
    } catch (Error) {
      this.setState({
        error: '해당 창고의 정보가 존재하지 않습니다.',
        loading: false,
      });
    }
  };
  render() {
    const { houseDetail, error, loading } = this.state;
    return (
      <>
        <DetailPresenter
          houseDetail={houseDetail}
          error={error}
          loading={loading}
        />
      </>
    );
  }
}
export default DetailContainer;
