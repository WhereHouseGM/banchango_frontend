import { USER_ACTION_TYPES } from './userTypes';

const initialState = {
  loading: false,
  userData: {},
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.login.request:
      return {
        ...state,
        loading: true,
      };
    case USER_ACTION_TYPES.login.success:
      return {
        loading: false,
        userData: action.payload,
      };
    case USER_ACTION_TYPES.login.failed:
      return {
        loading: false,
        userData: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
