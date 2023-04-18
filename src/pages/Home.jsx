import { Title } from 'components/ReviewsList/ReviewsList.styled';
import PropTypes from 'prop-types';
import { TrendingList } from '../components/TrendingList/TrendingList';

const Home = ({ movies }) => {
  
  return (
    <main>
      <Title>Trending today</Title>
      <TrendingList movies={movies} />
    </main>
  );
};

Home.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Home;
