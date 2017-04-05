export const FETCH_LAYOUT = 'FETCH_LAYOUT';
export function getSeatLayout() {
  return (dispatch) => {
    return dispatch({
      type: FETCH_LAYOUT,
      promise: axios => axios.get('/layout'),
    });
  };
}
