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

type TSearchLayout = {
  search: string;
  setSearch: SetStateAction<string | any>;
}

const SearchLayout = ({ search, setSearch }: TSearchLayout) => {
  return (
    <Wrapper>
      <InputWrapper>
        {search && (
          <CloseButton onClick={() => setSearch('')}>
            <img src="assets/close.png" />
          </CloseButton>
        )}

        <Input
          placeholder=""
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <SearchIcon>
          <SearchImage src="assets/search.png" />
        </SearchIcon>
      </InputWrapper>

      <Logo />
    </Wrapper>
  );
};

export default SearchLayout
