import React, { SetStateAction } from 'react'
import Logo from '../Logo/Logo'

import {
  Wrapper,
  SearchIcon,
  SearchImage,
  InputWrapper,
  Input,
  CloseButton,
} from './styles';

type TSearch = {
  search: string;
  setSearch: SetStateAction<string | any>;
}

const Search = ({ search, setSearch }: TSearch) => {
  return (
    <Wrapper>
      <InputWrapper>
        {search && (
          <CloseButton onClick={() => setSearch('')} data-testid="close">
            <img src="assets/close.png" alt="close search" />
          </CloseButton>
        )}

        <Input
          placeholder=""
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          data-testid="search"
        />

        <SearchIcon>
          <SearchImage src="assets/search.png" alt="band search" />
        </SearchIcon>
      </InputWrapper>

      <Logo image="../assets/logo.png" />
    </Wrapper>
  );
};

export default Search
