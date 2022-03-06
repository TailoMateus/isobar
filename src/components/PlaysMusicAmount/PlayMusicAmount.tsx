import React from 'react'
import { SubTitle } from './styles'

type TPlayMusicAmount = {
  plays: number;
}

const PlayMusicAmount = ({ plays }: TPlayMusicAmount) => {
  return (
    <SubTitle>{plays} PLAYS</SubTitle>
  )
}

export default PlayMusicAmount
