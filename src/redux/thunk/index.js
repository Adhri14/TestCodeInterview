import axios from 'axios';

export const getMovies = () => dispatch => {
  const endpoint =
    'https://api.themoviedb.org/3/trending/movie/day?api_key=284775ad02f958c314a6cb7b623f3a5b';
  axios
    .get(endpoint)
    .then(res => {
      dispatch({type: 'SET_MOVIES', value: res.data.results});
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const getDetailMovie = id => dispatch => {
  const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=284775ad02f958c314a6cb7b623f3a5b&language=en-US`;
  axios
    .get(endpoint)
    .then(res => dispatch({type: 'SET_MOVIE', value: res.data}))
    .catch(err => console.log(err.message));
};
