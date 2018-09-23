export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_FAILED = 'FETCH_FAILED';

export const getAllData = () => dispatch => {
  fetch(`https://min-api.cryptocompare.com/data/all/coinlist`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_DATA,
        payload: data.Data,
      });
    });
};
export const getDataFailed = () => ({
  type: FETCH_FAILED,
});
