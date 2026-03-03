import { createContext, useState } from "react";

export const FavoritesContext = createContext();

///
export default function FavoritesProvider({ children }) {
              ///        ///
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (movie) => {
        setFavorites((prev) => {
            if (!prev.find((m) => m.id === movie.id)) {
                return [...prev, movie];
            }
            return prev;
        });
    };
 
                            ///
    const removeFavorite = (id) => {
        setFavorites((prev) => prev.filter((m) => m.id !== id));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}