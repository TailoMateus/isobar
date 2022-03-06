import React from 'react'
import { Warpper, Image, Title } from './styles';

type TImage = {
  image: string;
}

const NoResults = ({ image }: TImage) => {
  return (
    <Warpper>
      <Title>Sem resultados...</Title>
      <Image src={image} />
    </Warpper>
  )
}

export default NoResults
