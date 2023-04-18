import { BsSearch } from 'react-icons/bs';
import { Input, Form, Label, SearchButton } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="query" autoFocus autoComplete="off" />
      <SearchButton type="submit">
        <Label>
          Search
          <BsSearch style={{ width: 20, height: 20 }} />
        </Label>
      </SearchButton>
    </Form>
  );
};
