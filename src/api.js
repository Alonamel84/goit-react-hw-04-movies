import axios from 'axios';
const API_KEY = '029b4bd853ef3dc8d52297bd7264794a';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
// const setParams = params => (axios.defaults.params = { api_key: API_KEY, ...params });

//api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
//api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

export const getTrendyMovies = () => {
  return axios
    .get(`3/trending/movie/day?api_key=${API_KEY}`)
    .then(({ data }) => data.results)
    .catch(err => {
      throw err;
    });
};
export const getMoviesDetails = movie_id => {
  return axios
    .get(`3/movie/${movie_id}?api_key=${API_KEY}`)
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};
export const getCasts = movie_id => {
  return axios
    .get(`3/movie/${movie_id}/credits?api_key=${API_KEY}`)
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};
export const getReviews = movie_id => {
  return axios
    .get(`3/movie/${movie_id}/reviews?api_key=${API_KEY}`)
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};
export const searchMovie = query => {
  return axios
    .get(
      `3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
    )
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};
