import { Link } from 'react-router-dom';
import placeholder from '../../Images/placeholder.webp';
import { Item, List, Title, Image } from './TrendingList.styled';
import PropTypes from 'prop-types';

export const TrendingList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: '/' }}>
              <div>
                <Image
                  src={
                    poster_path
                      ? 'https://image.tmdb.org/t/p/w500/' + poster_path
                      : placeholder
                  }
                  alt=""
                />
              </div>
              <Title>{title}</Title>
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

TrendingList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};
