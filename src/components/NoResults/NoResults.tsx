import React from 'react'
import { Warpper, Image, Title } from './styles';

const NoResults = () => {
  return (
    <Warpper>
      <Title>Sem resultados...</Title>
      <Image src="assets/no_results.png" />
    </Warpper>
  )
}

export default NoResults
