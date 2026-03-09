import { render, screen } from '@testing-library/react'
import MovieDetails from '../../pages/MovieDetails'

test("renders movie details page", () => {
  render(<MovieDetails />)
  expect(screen.getByText(/loading/i)).toBeInTheDocument()
})