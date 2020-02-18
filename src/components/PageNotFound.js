import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => (
    <main className="about-body">
        <section>
            <h2>Oops..</h2>
            <p>We couldn't find the page you are looking for.</p>
            <p>Go to the <Link to='/'>home</Link> page.</p>
        </section>
    </main>
);

export default PageNotFound;