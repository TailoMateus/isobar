import React from 'react'
import { Image } from './styles'

type TImage = {
  image: string;
}

const Logo = ({ image }: TImage) => {
  return (
    <Image src={image} alt="logo" />
  )
}

export default Logo
