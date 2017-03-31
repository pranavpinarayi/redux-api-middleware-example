export const FETCH_LOC = 'FETCH_LOC';
export function loadLocation() {
  return (dispatch, getState) => {
    return dispatch({
      type: 'FETCH_LOC',
      payload: axios => axios.get('/locations'),
    });
  }
}
