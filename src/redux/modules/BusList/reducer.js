import { FETCH_BUS } from './action';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case `${FETCH_BUS}_FULFILLED`:
      return {
        ...state,
        buses: action.result.data,
      };
    default:
      return state;
  }
}
