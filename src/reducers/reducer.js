import { Photos } from '../actions/';
import { combineReducers } from 'redux';

export const initialState = {
  gallery: []
};

const photosClip = (data, position) => {
  return data.slice();
};

const Reducer = (state = initialState, action) => {
  const { type, payload, move } = action;
  switch(type) {
  case Photos:
    return {
      ...state,
      gallery: photosClip(payload)
    };  
  default:
    return state;
  }
};

export default combineReducers({
  Reducer,
});
