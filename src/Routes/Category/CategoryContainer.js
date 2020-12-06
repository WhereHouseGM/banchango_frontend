import React from 'react';
import CategoryPresenter from './CategoryPresenter';
import { warehouseApi } from '../../api';
import Category from '../../Components/Category/Category';

class CategoryContainer extends React.Component {
  state = {
    warehouses: null,
    error: null,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    const {
      match: {
        params: { type },
      },
    } = this.props;
    try {
      const result = await warehouseApi.itemsByType(type);
      const { status } = result;
      if (status !== 200) {
        throw new Error();
      }
      const {
        data: { warehouses },
      } = result;
      this.setState({ warehouses: warehouses });
    } catch (Error) {
      this.setState({ error: '해당 카테고리의 창고가 존재하지 않습니다.' });
    }
  };

  render() {
    const { warehouses } = this.state;
    return <CategoryPresenter warehouses={warehouses} />;
  }
}

export default CategoryContainer;
