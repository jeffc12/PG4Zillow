import dataService from '../service/service';

export const Photos = 'photos';
export const Next = 'next';

export const fetchData = () => {
  return async dispatch => {
    const data = await dataService();
    return dispatch({
      type: Photos,
      payload: data,
      move : 0
    });
  };
};

export const nextPhoto = (move) => (dispatch, getState) => {
  const state = getState();
  const { gallery } = state.Reducer;
  return dispatch({
    type: Next,
    payload: gallery,
    move : move
  });
};
