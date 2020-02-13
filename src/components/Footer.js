import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <p> &copy; {year} Ava Nikaein</p>
        </footer>
    );
}

export default Footer;