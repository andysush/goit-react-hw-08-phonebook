import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 5px solid rgb(84, 84, 253);
  border-radius: 5px;
  padding: 20px;
  background-color: rgb(233, 211, 137);
  margin-bottom: 30px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const SearchLabel = styled.label`
  font-size: 16px;
`;

export const SearchText = styled.p`
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  margin-bottom: 10px;
`;

export const SearchInput = styled.input`
  font-size: 13px;
  margin-bottom: 10px;
  border-color: rgb(233, 184, 25);

  :focus {
    border-color: rgb(84, 84, 253);
    outline: none;
  }
`;
