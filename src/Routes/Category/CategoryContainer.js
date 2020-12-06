import React from 'react';
import CategoryPresenter from './CategoryPresenter';

class CategoryContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <CategoryPresenter />;
  }
}

export default CategoryContainer;
