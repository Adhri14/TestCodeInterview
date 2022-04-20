import {combineReducers} from 'redux';

const initState = {
  movies: [],
  movie: {},
};

export const setMovie = (state = initState, action) => {
  if (action.type === 'SET_MOVIES') {
    return {
      ...state,
      movies: action.value,
    };
  }
  if (action.type === 'SET_MOVIE') {
    return {
      ...state,
      movie: action.value,
    };
  }
  return state;
};

const reducer = combineReducers({setMovie});
export default reducer;
