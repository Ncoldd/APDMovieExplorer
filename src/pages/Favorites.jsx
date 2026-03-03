import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";


export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length == 0) return (
         <div 
          style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
         >
         <p>No favorites yet!</p>
         </div>
        )
  return (
    <div className="movie-grid">
      {favorites.map((movie) => (
        <div className="movie-card">
        <MovieCard key={movie.id} movie={movie} />
        </div>
      ))}
    </div>
  );
}