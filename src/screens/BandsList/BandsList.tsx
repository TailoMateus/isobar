import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useSearch from '@hooks/useSearch'
import RoundImage from '@components/RoundImage/RoundImage'
import PlayMusicAmount from '@components/PlaysMusicAmount/PlayMusicAmount'
import NoResults from '@components/NoResults/NoResults'
import OrderBy from '@components/OrderBy/OrderBy'
import { TBands } from '../../types'
import { WrapperList, TextBlock, Title, WrapperOrderBy } from './styles';

type TBand = {
  bands: TBands[]
}

const BandsList = ({ bands }: TBand) => {
  const router = useRouter();
  const [bandsFormatter, setBandsFormatter] = useState(bands);

  const { Search, filteredResults } = useSearch({
    data: bands,
  });

  useEffect(() => {
    setBandsFormatter(filteredResults)
  }, [filteredResults]);

  return (
    <>
      {Search}

      {bandsFormatter.length === 0 && (
        <NoResults image="/assets/no_results.png" />
      )}

      {bandsFormatter.length > 0 && (
        <WrapperOrderBy>
          <p> {bandsFormatter.length} resultados </p>
          <OrderBy
            data={bandsFormatter}
            ordenated={(bands) => setBandsFormatter(bands)}
          />
        </WrapperOrderBy>
      )}

      <ul>
        {bandsFormatter?.map(({ id, name, image, numPlays }) => (
          <WrapperList onClick={() => router.push(`/bands/${id}`)} key={id}>
            <RoundImage image={image} size="70px" />
            <TextBlock>
              <Title>{name}</Title>
              <PlayMusicAmount plays={numPlays} />
            </TextBlock>
          </WrapperList>
        ))}
      </ul>
    </>
  )
}

export default BandsList;
