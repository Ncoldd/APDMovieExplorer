import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        language: "en-US"
    }
});

console.log("API KEY:", import.meta.env.VITE_TMDB_API_KEY);

export const searchMovies = async (query) => {
    const res = await api.get("/search/movie", { params: { query } });
    return res.data.results;
};

export const getMovieDetails = async (id) => {
  const res = await api.get(`/movie/${id}`, { params: { append_to_response: "videos" } });
  return res.data;
};



export default api;