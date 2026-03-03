import { render, screen } from '@testing-library/react';
import MovieCard from '../MovieCard';
import { FavoritesContext } from '../../context/FavoritesContext';
import { BrowserRouter } from 'react-router-dom';

const dummyMovie = { id: 1, title: 'Test Movie', vote_average: 8.5, poster_path: null };

test('renders movie title and rating', () => {
  render(
    <FavoritesContext.Provider value={{ favorites: [], addFavorite: () => {}, removeFavorite: () => {} }}>
      <BrowserRouter>
        <MovieCard movie={dummyMovie} />
      </BrowserRouter>
    </FavoritesContext.Provider>
  );

  expect(screen.getByText('Test Movie')).toBeInTheDocument();
  expect(screen.getByText(/8.5/)).toBeInTheDocument();
});