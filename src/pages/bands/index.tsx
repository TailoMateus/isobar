import BandsList from '@screens/BandsList/BandsList'
import { getBandsList } from '@repositories/bands'
import { TBands } from '../../types'

type TAllBands = {
  bands: TBands[]
}

const Bands = ({ bands }: TAllBands) => {
  return (
    <BandsList bands={bands} />
  )
}

export async function getServerSideProps () {
  const bands = await getBandsList()
  return {
    props: {
      bands
    }
  }
}

export default Bands
