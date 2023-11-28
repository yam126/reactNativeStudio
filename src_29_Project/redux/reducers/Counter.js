import actionTypes from '../actions/actionTypes';

const initState = {
  num: 1,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.COUNTER_INCREMENT:
      return {...state, num: state.num + action.payload};
    case actionTypes.COUNTER_DECREMENT:
      return {...state, num: state.num - action.payload};
    default:
      return state;
  }
};
