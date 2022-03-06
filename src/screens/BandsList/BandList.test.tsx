import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BandsList from './BandsList'

const bandsMock = [{
  albums: ['5fce349568b91d001293be08'],
  biography: "The Beatles were an English rock band formed in Liverpool in 1960.",
  genre: "classic rock",
  id: "5fce349568b91d001293bdc8",
  image: "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
  name: "The Beatles",
  numPlays: 340473
}]

describe('BandsList', () => {
  beforeEach(() => render(<BandsList bands={bandsMock} />))

  it('should show the bands on the list', async () => {
    expect(
      await screen.findByText(bandsMock[0].name)
    ).toBeInTheDocument()
  })

  it('should show the band on the list after having done a search', async () => {
    const input = screen.getByTestId('search')

    fireEvent.change(input, { target: { value: bandsMock[0].name }})

    expect(
      await screen.findByText(bandsMock[0].name)
    ).toBeInTheDocument()
  })

  it('should clear input after click in the close button', async () => {
    const input = screen.getByTestId('search')
    fireEvent.change(input, { target: { value: 'test' }})

    const button = screen.getByTestId('close')
    fireEvent.click(button)

    expect(button).not.toBeInTheDocument()
    expect(
      await screen.findByText(bandsMock[0].name)
    ).toBeInTheDocument()
  })

  it('should show message "Sem resultados..." for non-existent search', async () => {
    const input = screen.getByTestId('search')

    fireEvent.change(input, { target: { value: 'test' }})

    expect(
      await screen.findByText('Sem resultados...')
    ).toBeInTheDocument()
  })
})
