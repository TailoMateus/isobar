import React, { useState, useMemo } from 'react'
import { normalizeString } from '@helpers/stringFormatter'
import Search from '@components/Search/Search'
import { TBands } from '../types'

type TData = {
  data: TBands[]
}

const useSearch = ({ data }: TData) => {
  const [search, setSearch] = useState('');

  const filteredList = useMemo(() => {
    let filtered = data || [];

    if (search.length > 0) {
      filtered = data?.filter((item) => {
        return normalizeString(item.name)?.includes(
          normalizeString(search)
        );
      });
    }

    return filtered || [];
  }, [data, search]);

  return {
    Search: (
      <Search search={search} setSearch={setSearch} />
    ),
    filteredResults: filteredList,
  };
};

export default useSearch;
