import actionTypes from '../actions/actionTypes';

const initState = {
  isLogin: false,
};

export default (state = initState.isLogin, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLogin: true,
      };
    case actionTypes.LOGIN_FAILED:
      return {
        isLogin: false,
      };
    default:
      return state;
  }
};
