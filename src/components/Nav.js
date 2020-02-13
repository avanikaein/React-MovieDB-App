import React from 'react';
import {Link} from "react-router-dom";


function Nav() {
  return (
      <nav>
          <ul>
              <Link to='/' exact><li>Home</li></Link>
              <Link to='/about'><li>About</li></Link>
              <Link to='/favourites'><li>My Favourites</li></Link>
              <Link to='/search'><li>Search</li></Link>
          </ul>
      </nav>

  );
}

export default Nav;