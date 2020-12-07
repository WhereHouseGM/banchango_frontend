import React from 'react';
import DetailPresenter from './DetailPresenter';
import 'react-toastify/dist/ReactToastify.css';

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houseName: '임시',
    };
  }
  render() {
    return (
      <>
        <DetailPresenter />
      </>
    );
  }
}
export default DetailContainer;
