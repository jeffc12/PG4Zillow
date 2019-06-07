import { Photos, Next } from '../actions/';
import { combineReducers } from 'redux';

export const initialState = {
  gallery: []
};

const photosClip = (data, position) => {
  return [data.slice()[position]]
};

const Reducer = (state = initialState, action) => {
  const { type, payload, move } = action;
  switch(type) {
  case Photos:
    return {
      ...state,
      gallery: photosClip(payload, move)
    };
  case Next:
    return {
      ...state,
      tiles: photosClip(payload, move)
  };    
  default:
    return state;
  }
};

export default combineReducers({
  Reducer,
});
