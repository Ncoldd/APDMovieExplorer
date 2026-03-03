import { Link } from "react-router-dom"
import { useContext } from 'react'
import { FavoritesContext } from "../context/FavoritesContext";

export default function MovieCard({ movie }) {

    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext)
    const isFav = favorites.find((m) => m.id === movie.id);

    return (
        <div>
            <Link to={`/movie/${movie.id}`}>
            {movie.poster_path && (
                <img
                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: "200px" }}
                />
            )}
            <h3>{movie.title}</h3>
            </Link>
            <p>⭐ {movie.vote_average}</p>
            {isFav ? (
                <button onClick={() => removeFavorite(movie.id)}>Remove Favorite</button>
            ) : (
                <button onClick={() => addFavorite(movie)}>Add Favorite</button>
            )}
        </div>
    );
}