import axios from 'axios';

export async function fetchTrending() {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=72d6a34c87c7ea3c7e583ab5ce6f3be4'
  );
  return response.data.results;
}

export async function fetchMoviesByKeyWord(query) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=72d6a34c87c7ea3c7e583ab5ce6f3be4&query=${query}`
  );
  return response.data.results;
}

export async function fetchMoviesById(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=72d6a34c87c7ea3c7e583ab5ce6f3be4&language=en-US`
  );
  return response.data;
}

export async function fetchCast(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=72d6a34c87c7ea3c7e583ab5ce6f3be4&language=en-US`
  );
  return response.data.cast;
}

export async function fetchReviews(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=72d6a34c87c7ea3c7e583ab5ce6f3be4&language=en-US&page=1`
  );
  return response.data.results;
}
