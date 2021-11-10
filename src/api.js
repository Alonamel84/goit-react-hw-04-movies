import axios from 'axios';
const API_KEY = '029b4bd853ef3dc8d52297bd7264794a';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
// const setParams = params => (axios.defaults.params = { api_key: API_KEY, ...params });

//api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
//api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

export const getTrandyMovies = () => {
  return axios
    .get(`3/trending/movie/day?api_key=${API_KEY}`)
    .then(({ data }) => data.results)
    .catch(err => {
      throw err;
    });
};
// export const getMoviesDetails = () => {
//   return axios
//     .get(`3/movie/{movie_id}?api_key=${API_KEY}`)
//     .then(({ data }) => data.results)
//     .catch(err => {
//       throw err;
//     });
// };
