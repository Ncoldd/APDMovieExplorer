import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('renders search input', () => {
  render(<Home />);
  const input = screen.getByPlaceholderText(/search movies/i);
  expect(input).toBeInTheDocument();
});

test("renders search button", () => {
  render(<Home />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});