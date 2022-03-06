import BandDetails from '@screens/BandDetails/BandDetails'
import { getBandDetails, getAlbums } from '@repositories/bands'
import { GetServerSideProps } from 'next';
import { TBandDetail } from '../../types'

const BandID = ({ bandDetail, albums }: TBandDetail) => {
  return (
    <BandDetails bandDetail={bandDetail} albums={albums} />
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const band_id = String(query.band_id);

  const bandDetail = await getBandDetails(band_id)
  const albums = await getAlbums(bandDetail.albums)

  return {
    props: {
      bandDetail,
      albums,
    }
  }
}

export default BandID
