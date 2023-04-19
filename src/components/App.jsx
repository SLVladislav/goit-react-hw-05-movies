import { useEffect, useState } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchTrending } from 'services/fetch-app';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));

export const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetch() {
      try {
        const movies = await fetchTrending();
        setMovies([...movies]);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home movies={movies} />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
