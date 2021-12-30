import React from 'react';
import { Link } from 'react-router-dom';


function Nav(props) {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        The Meal DB
      </Link>

      <div className="navbar">
        <Link className="nav-item nav-link active" to="/">
          Home
        </Link>
        <Link className="nav-item nav-link" to="about">
          About
        </Link>
        <Link className="nav-item nav-link" to="categories">
          Categories
        </Link>
        <Link className="nav-item nav-link" to="search-product">
          Search Meal
        </Link>
      </div>
    </nav>
  </>
  );
}

export default Nav