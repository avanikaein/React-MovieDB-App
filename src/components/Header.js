import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header>
        <h1><Link to='/'>Cinematics</Link></h1>
        <h2>Movie Database</h2>
    </header>
);

export default Header;