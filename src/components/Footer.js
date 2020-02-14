import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <p> &copy; {year} Ava Nikaein</p>
            {/* <p>Built with <i class="far fa-heart"></i> for educational purposes</p> */}
        </footer>
    );
}

export default Footer;