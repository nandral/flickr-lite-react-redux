import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Search from './Search';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="home">
        flickr <span className="lite">lite</span>
      </Link>
      <Search />
      <nav className="nav">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </nav>
    </header>
  );
};
export default Header;
