import { useState } from "react";
import { searchMovies } from "../services/api"
import MovieCard from "../components/MovieCard"

//sdl vjsy yp rc[;som yd
export default function Home() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    const results = await searchMovies(query);
    setMovies(results);
    setLoading(false);
  };

  return (
    <div className ="container">
        <div>
            <form onSubmit={handleSearch}>
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search movies..." />
                <button type="submit">Search</button>
            </form>
        </div>

      {loading && <p>Loading  . . .</p>}

      <div className="movie-grid">
        {movies.map((movie =>
        <div key={movie.id} className="movie-card">
            <MovieCard movie={movie} />
        </div>
       ))}
      </div>
    </div>
  );
  //----
}