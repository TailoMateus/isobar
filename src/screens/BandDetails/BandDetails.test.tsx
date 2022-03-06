import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BandDetails from './BandDetails'

const bandMock = {
  albums: ['5fce349568b91d001293be08'],
  biography: "The Beatles were an English rock band formed in Liverpool in 1960.",
  genre: "classic rock",
  id: "5fce349568b91d001293bdc8",
  image: "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
  name: "The Beatles",
  numPlays: 340473
}

const albumsMock = [{
  band: "5fce349568b91d001293bdc7",
  id: "5fce349568b91d001293bde8",
  image: "https://lastfm.freetls.fastly.net/i/u/300x300/056ec23d90254b70b62aa84ce14876aa.png",
  name: "Away from the Sun",
  releasedDate: "1994-08-18T07:07:39.925Z"
}]

describe('BandDetails', () => {
  beforeEach(() => render(<BandDetails bandDetail={bandMock} albums={albumsMock} />))

  it('should show the band on the screen', async () => {
    expect(await screen.findByText(bandMock.name)).toBeInTheDocument()
    expect(await screen.findByText(bandMock.biography)).toBeInTheDocument()
    expect(await screen.findByText(bandMock.genre)).toBeInTheDocument()
  })

  it('should show numPlays formatted with "PLAYS"', async () => {
    expect(await screen.findByText(`${bandMock.numPlays} PLAYS`)).toBeInTheDocument()
  })
})
