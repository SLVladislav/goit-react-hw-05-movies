import { SearchBar } from 'components/SearchBar/Searchbar';
import { SearchList } from 'components/SearchList/SearchList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMoviesByKeyWord } from 'services/fetch-app';

const Movies = () => {
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const onSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: evt.target.query.value });
    evt.target.reset();
  };

  useEffect(() => {
    async function fetch(query) {
      try {
        const results = await fetchMoviesByKeyWord(query.trim());
        if (results.length) {
          setResults([...results]);
          return;
        }
        toast.error('No movies found. Try one more time');
      } catch (error) {
        toast.error(error);
      }
    }
    if (query) {
      fetch(query);
    }
  }, [query]);

  return (
    <main>
      <SearchBar onSubmit={onSubmit} />
      <SearchList movies={results} />
    </main>
  );
};

export default Movies;
