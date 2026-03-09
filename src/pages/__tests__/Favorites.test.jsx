import { render, screen } from "@testing-library/react";
import Favorites from "../Favorites";
import FavoritesProvider from "../../context/FavoritesContext";

test("renders favorites page", () => {
  render(
    <FavoritesProvider>
      <Favorites />
    </FavoritesProvider>
  );

  expect(screen.getByText(/favorites/i)).toBeInTheDocument();
});