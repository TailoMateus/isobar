import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type TBiography = {
  ellipsis: boolean;
};

export const WrapperBandInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  p {
    margin: 30px 10px 0;
    width: 100%;
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  color: #404040;
  margin-bottom: 5px;
  margin-top: -80px;
`;

export const Genre = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  text-align: right;
`;

export const WrapperBiography = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Biography = styled.div<TBiography>`
  ${({ ellipsis }) => css`
    font-size: 13px;
    line-height: 21px;
    padding: 0 15px;
    margin-bottom: 5px;
    mix-blend-mode: hard-light;
    position: relative;
    height: ${ellipsis ? '104px' : 'auto'};
    overflow: hidden;
    color: #383434;

    :after {
      position: absolute;
      content: "";
      display: ${ellipsis ? 'block' : 'none'};
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(transparent, gray);
      pointer-events: none;
    }
  `}
`;

export const WrapperAlbums = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const AlbumsList = styled.li`
  width: 33.33%;
  display: flex;
  height: auto;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const AlbumsTitle = styled.p`
  display: flex;
  justify-content: center;
  margin: 25px 0 15px;
  font-weight: 600;
`;

export const PlusIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`

export const BandImage = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: -2;

  :before {
    content: '';
    background-image: linear-gradient(to top,rgba(1,47,43,.6) 0,rgba(1,47,43,.1) 50%,
      rgba(1,47,43,.1) 10%,rgba(1,47,43,0) 100%,rgba(1,47,43,0) 50%);
    position: absolute;
    width: 100%;
    height: 100%;
    left: auto;
    right: auto;
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  display: flex;
  height: 60px;
  align-items: center;
  position: relative;
  justify-content: center;

  :before {
    content: '';
    background: #f34401;
    opacity: 0.7;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: -1;
  }
`;
