import { Link } from 'gatsby';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header>
    <Link
      to="/"
      style={{
        color: 'white',
        textDecoration: 'none',
      }}
    >
      {siteTitle}
    </Link>
    <nav>
      <Link to="/fluid/" activeClassName="active">
        Fluid
      </Link>
      <Link to="/fixed/" activeClassName="active">
        Fixed
      </Link>
      <Link to="/gifs/" activeClassName="active">
        GIFs
      </Link>
    </nav>
  </header>
);

export default Header;
