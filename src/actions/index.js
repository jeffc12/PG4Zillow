import dataService from '../service/service';

export const Photos = 'photos';

export const fetchData = () => {
  return async dispatch => {
    const data = await dataService();
    return dispatch({
      type: Photos,
      payload: data
    });
  };
};
