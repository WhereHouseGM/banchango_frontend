import React, { useEffect, useState } from 'react';
import CategoryPresenter from './CategoryPresenter';
import { warehouseApi } from '../../api';

// class CategoryContainer extends React.Component {
//   state = {
//     warehouses: null,
//     error: null,
//     loading: true,
//   };

//   componentDidMount = async () => {
//     console.log(sessionStorage.getItem('MainItemType'));
//     console.log('HI');

//     // try {
//     //   const result = await warehouseApi.getByMainItemTypes(type, 0, 10);
//     //   const { status } = result;
//     //   if (status !== 200) {
//     //     throw new Error();
//     //   }
//     //   const {
//     //     data: { warehouses },
//     //   } = result;
//     //   this.setState({ warehouses: warehouses, loading: false });
//     // } catch (Error) {
//     //   this.setState({
//     //     error: '해당 카테고리의 창고가 존재하지 않습니다.',
//     //     loading: false,
//     //   });
//     // }
//   };

//   render() {
//     const {
//       match: {
//         params: { type },
//       },
//     } = this.props;
//     const { warehouses, error, loading } = this.state;
//     return (
//       <CategoryPresenter
//         warehouses={warehouses}
//         error={error}
//         category={type}
//         loading={loading}
//       />
//     );
//   }
// }

const CategoryContainer = () => {
  console.log(sessionStorage.getItem('MainItemType'));
  console.log('HI');
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
    }
    // API 호출 -> let object_temp = {name: 'asdf',address='asdf'}
    // setObject(object_temp);
    // loading=false
  }, []);
  return (
    <CategoryPresenter
      warehouses={warehouses}
      error={error}
      category={type}
      loading={loading}
    />
  );
};

export default CategoryContainer;
