import axios from 'axios';

const API_KEY = '72d6a34c87c7ea3c7e583ab5ce6f3be4';
const BASE_URL = 'https://api.themoviedb.org/3';

export function fetchTrending() {
  return axios
    .get(
      `
${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=1&language=en-US`
    )
    .then(response => response.data.results);
}

export function fetchMoviesByKeyWorld(query) {
  return axios
    .get(
      `
${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=1&&query=${query}&language=en-US`
    )
    .then(response => response.data.results);
}

export function fetchMoviesById(id) {
  return axios
    .get(
      `
${BASE_URL}trending/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
    .then(response => response.data.results);
}

export function fetchCast(id) {
  return axios
    .get(
      `
${BASE_URL}trending/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    )
    .then(response => response.data.results);
}

export function fetchReviews(id) {
  return axios
    .get(
      `
${BASE_URL}trending/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    )
    .then(response => response.data.results);
}
