import { userApi } from '../../api';
import { USER_ACTION_TYPES } from './userTypes';

export const userLogin = (requestBody) => async (dispatch) => {
  dispatch(userLoginActions.request());
  await userApi
    .signIn(requestBody)
    .then(({ data: { accessToken, refreshToken, user } }) => {
      dispatch(
        userLoginActions.success({
          tokenSet: { accessToken, refreshToken },
          userInfo: user,
        }),
      );
    })
    .catch((error) => {
      dispatch(userLoginActions.failed(error.response));
    });
};
export const userLoginActions = {
  request: () => {
    return {
      type: USER_ACTION_TYPES.login.request,
    };
  },
  success: (userData) => {
    return {
      type: USER_ACTION_TYPES.login.success,
      payload: userData,
    };
  },
  failed: (error) => {
    return {
      type: USER_ACTION_TYPES.login.failed,
      payload: error,
    };
  },
};
