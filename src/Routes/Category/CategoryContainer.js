import React from 'react';
import CategoryPresenter from './CategoryPresenter';
import { warehouseApi } from '../../api';

class CategoryContainer extends React.Component {
  state = {
    warehouses: null,
    error: null,
    loading: true,
  };

  componentDidMount = async () => {
    const {
      match: {
        params: { type },
      },
    } = this.props;
    try {
      const result = await warehouseApi.getByMainItemType(type, 0, 10);
      const { status } = result;
      if (status !== 200) {
        throw new Error();
      }
      const {
        data: { warehouses },
      } = result;
      this.setState({ warehouses: warehouses, loading: false });
    } catch (Error) {
      this.setState({
        error: '해당 카테고리의 창고가 존재하지 않습니다.',
        loading: false,
      });
    }
  };

  render() {
    const {
      match: {
        params: { type },
      },
    } = this.props;
    const { warehouses, error, loading } = this.state;
    return (
      <CategoryPresenter
        warehouses={warehouses}
        error={error}
        category={type}
        loading={loading}
      />
    );
  }
}

export default CategoryContainer;
