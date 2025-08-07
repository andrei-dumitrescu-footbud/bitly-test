import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Home
      </Link>
    </nav>
  );
}