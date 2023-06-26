import { useDispatch } from 'react-redux';
import {
  SearchLabel,
  SearchForm,
  SearchWrapper,
  SearchText,
  SearchInput,
} from './SearchForm.styled';
import { filter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = ev => {
    dispatch(filter(ev.currentTarget.value));
  };
  return (
    <SearchForm>
      <SearchWrapper>
        <SearchLabel>
          <SearchText>Find</SearchText>
          <SearchInput
            type="text"
            placeholder="Find contacts..."
            onChange={handleFilter}
          />
        </SearchLabel>
      </SearchWrapper>
    </SearchForm>
  );
};
