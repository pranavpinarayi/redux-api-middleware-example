import { FETCH_LAYOUT } from './action';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case `${FETCH_LAYOUT}_FULFILLED`:
      return {
        ...state,
        seatLayout: action.result.data,
      };
    default:
      return state;
  }
}
