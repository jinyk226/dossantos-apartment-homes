import React from 'react';
import { Link } from "react-router-dom"

function navbar() {
    return (
        <div id='navbar'>
            <div>Dos Santos Apartments</div>
            <div id='navbar-right'>
                <Link className='navbar-right-contents' to='/home'>Home</Link>
                <Link className='navbar-right-contents' to='/about-us'>About Us</Link>
                <Link className='navbar-right-contents' to='/contact-us'>Contact Us</Link>
            </div>
        </div>
    );
}

export default navbar;