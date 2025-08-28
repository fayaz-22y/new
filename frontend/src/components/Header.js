import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Link to="/"><h1>FLOZZ</h1></Link>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Shop</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    </header>
  );
}
