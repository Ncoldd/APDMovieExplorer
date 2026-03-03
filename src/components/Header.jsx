import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <h1>Movie Explorer</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/profile">Profile</Link>
        </nav>
    </header>
  );
}