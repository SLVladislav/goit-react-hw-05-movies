import { BiArrowBack } from 'react-icons/bi';
const { useState, useEffect, Suspense } = 'react';
const { useParams, useLocation } = 'react-router-dom';
const { fetchMoviesById } = 'services/fetch-app';
import {
  ButtonsList,
  StyledLink,
  Wrapper,
} from 'components/SharedLayout/SharedLayout.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';
import { OneMovie } from 'components/OneMovie/OneMovie';
import { Label } from 'components/SearchBar/SearchBar.styled';
import { Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const movie = await fetchMoviesById(id);
        setMovie(movie);
        setIsLoaded(true);
      } catch (error) {
        toast.error('Something went wrong, try one more time');
      }
    }
    fetchMovie();
  }, [id]);

  if (isLoaded) {
    return (
      <main>
        <StyledLink to={`${location.state.from}`}>
          <Label>
            <BiArrowBack style={{ width: 20, height: 24 }} />
            Go Back
          </Label>
        </StyledLink>
        <Wrapper>
          <OneMovie movie={movie} />
          <ButtonsList>
            <li>
              <StyledLink to="cast" state={{ from: `${location.state.from}` }}>
                Cast
              </StyledLink>
            </li>
            <li>
              <StyledLink
                to="reviews"
                state={{ from: `${location.state.from}` }}
              >
                Reviews
              </StyledLink>
            </li>
          </ButtonsList>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Wrapper>
      </main>
    );
  }
};

export default MovieDetails;
