import React from 'react';
import {Link} from "react-router-dom";


function Nav() {
  return (
      <nav>
          <ul>
              <Link to='/' exact><li><i className="fas fa-home fa-gradient" title="Home Page"></i></li></Link>
              <Link to='/about'><li><i className="fas fa-info fa-gradient" title="About Page"></i></li></Link>
              <Link to='/favourites'><li><i className="fas fa-heart fa-gradient" title="My Favourites Page"></i></li></Link>
              <Link to='/search'><li><i className="fas fa-search fa-gradient" title="Search Page"></i></li></Link>
          </ul>
      </nav>

  );
}

export default Nav;