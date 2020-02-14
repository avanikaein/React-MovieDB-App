import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => (
    <main>
        <section>
            <h2>Oops, We couldn't find the page you were looking for</h2>
            <p>Go to the <Link to='/'>home</Link> page.</p>
        </section>
    </main>
);

export default PageNotFound;