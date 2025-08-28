import React from 'react';
import { Link } from 'react-router-dom';
const Header = ({cartItemsCount=0})=>(
  <header className="header">
    <div className="container">
      <Link to="/" className="logo">Flozz</Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartItemsCount})</Link>
      </nav>
    </div>
  </header>
);
export default Header;
