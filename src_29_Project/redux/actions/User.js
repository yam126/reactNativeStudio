import actionTypes from './actionTypes';
// 登录成功
export const loginSuccess = userInfo => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: userInfo,
  };
};

//登录失败
export const loginFailed = () => {
  return {
    type: actionTypes.LOGIN_FAILED,
  };
};

//退出
export const logout = () => dispatch => {
  dispatch(loginFailed());
};
