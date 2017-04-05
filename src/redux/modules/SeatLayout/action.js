export const FETCH_LAYOUT = 'FETCH_LAYOUT';
export function getSeatLayout() {
  return (dispatch) => {
    return dispatch({
      type: FETCH_LAYOUT,
      payload: axios => axios.get('/layout'),
    });
  };
}
