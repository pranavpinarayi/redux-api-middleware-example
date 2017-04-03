export const FETCH_LOC = 'FETCH_LOC';
export function loadLocation() {
  return (dispatch) => {
    return dispatch({
      type: 'FETCH_LOC',
      payload: axios => axios.get('/locations'),
    });
  };
}
