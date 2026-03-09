import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header>
        <h1>Movie Explorer</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/profile">Profile</Link>

          {isAuthenticated ? (
          <Link onClick={logout}>Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
        </nav>
    </header>
  );
}