import { Photos } from '../actions/';
import { combineReducers } from 'redux';

export const initialState = {
  gallery: []
};

const photosClip = (data) => {
  return data.slice()
};

const Reducer = (state = initialState, action) => {
  const { payload, type } = action;
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
