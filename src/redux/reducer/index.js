import {combineReducers} from 'redux';

const initState = {
  movies: [],
  movie: {},
};

const initStateLng = {
  lang: 'id',
};

const setMovie = (state = initState, action) => {
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

const setLang = (state = initStateLng, action) => {
  if (action.type === 'SET_LANG') {
    return {
      ...state,
      lang: action.value,
    };
  }
  return state;
};

const reducer = combineReducers({setMovie, setLang});
export default reducer;
