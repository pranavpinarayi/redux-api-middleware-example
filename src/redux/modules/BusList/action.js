export const FETCH_BUS = 'FETCH_BUS';
export function loadBuses() {
  return (dispatch) => {
    return dispatch({
      type: FETCH_BUS,
      payload: axios => axios.get('/buses'),
    });
  };
}
