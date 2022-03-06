import React, { useState } from 'react'
import RoundImage from '@components/RoundImage/RoundImage'
import PlayMusicAmount from '@components/PlaysMusicAmount/PlayMusicAmount'
import GoBack from '@components/GoBack/GoBack'
import Logo from '@components/Logo/Logo'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { TBandDetail } from '../../types'
import {
  WrapperBandInfo,
  Title,
  Genre,
  WrapperBiography,
  Biography,
  WrapperAlbums,
  AlbumsList,
  Image,
  AlbumsTitle,
  PlusIcon,
  BandImage,
  Header
} from './styles';

const BandsList = ({ bandDetail, albums }: TBandDetail) => {
  const [hasEllipsis, setHasEllipsis] = useState(true);

  return (
    <div>
      <Header>
        <GoBack />
        <Logo image="../assets/logo.png" />
      </Header>

      <BandImage>
        <Image src={bandDetail.image} alt="band image" />
      </BandImage>
      <Title>{bandDetail.name}</Title>

      <WrapperBandInfo>
        <Genre>{bandDetail.genre}</Genre>
        <RoundImage image={bandDetail.image} size="100px" />
        <PlayMusicAmount plays={bandDetail.numPlays} />
      </WrapperBandInfo>

      <WrapperBiography>
        <Biography ellipsis={hasEllipsis}>
          {bandDetail.biography}
        </Biography>

        {hasEllipsis && (
          <PlusIcon
            onClick={() => setHasEllipsis(false)}
            icon={faPlus as IconProp}
          />
        )}
      </WrapperBiography>

      <AlbumsTitle>ALBUMS</AlbumsTitle>
      <WrapperAlbums>
        {albums.map(album => (
          <AlbumsList key={album.id}>
            <Image src={album.image} />
          </AlbumsList>
        ))}
      </WrapperAlbums>
    </div>
  )
}

export default BandsList;
