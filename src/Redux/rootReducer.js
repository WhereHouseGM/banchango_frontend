import { combineReducers } from 'redux';
import userReducer from './User/userReducer';
F;
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
