import { FETCH_LOC } from './action';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case `${FETCH_LOC}_FULFILLED`:
      return {
        ...state,
        locList: action.result.data,
      };
    default:
      return state;
  }
}
