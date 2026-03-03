import { useParams } from "react-router-dom";
import { useEffect, useState }  from "react";
import { getMovieDetails } from "../services/api";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div 
        style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
    >
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={{ width: "200px" }}
        />
      )}
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>⭐ {movie.vote_average}</p>
    </div>
  );
}