import { INC_VAL } from './action';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'FETCH_LOC_FULFILLED':
      return {
        ...state,
        locList: action.result.data,
      };
    default:
      return state;
  }
}
