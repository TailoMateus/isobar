import React from 'react'
import { Image } from './styles';

type TImage = {
  image: string;
  size: string;
}

const RoundImage = ({ image, size }: TImage) => {
  return (
    <Image src={image} size={size} />
  )
}

export default RoundImage
