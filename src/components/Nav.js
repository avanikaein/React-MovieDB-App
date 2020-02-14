import React from 'react';
import {Link} from "react-router-dom";


function Nav() {
  return (
      <nav>
          <ul>
              <Link to='/' exact><li><i class="fas fa-home" title="Home Page"></i></li></Link>
              <Link to='/about'><li><i class="fas fa-info" title="About Page"></i></li></Link>
              <Link to='/favourites'><li><i class="fas fa-heart" title="My Favourites Page"></i></li></Link>
              <Link to='/search'><li><i class="fas fa-search" title="Search Page"></i></li></Link>
          </ul>
      </nav>

  );
}

export default Nav;