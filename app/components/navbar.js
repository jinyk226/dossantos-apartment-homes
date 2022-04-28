import React from 'react';
import { Link } from "react-router-dom"

function navbar({pos, bgColor}) {
    return (
        <div id='navbar' style={{position: pos, backgroundColor: bgColor}}>
            <Link id='navbar-left' to='/home'>Dos Santos Apartments</Link>
            <div id='navbar-right'>
                <Link className='navbar-right-contents' to='/home'>Home</Link>
                <Link className='navbar-right-contents' to='/about-us'>About Us</Link>
                <Link className='navbar-right-contents' to='/contact-us'>Contact Us</Link>
                <Link className='navbar-right-contents' to='/auth'>Login</Link>
            </div>
        </div>
    );
}

export default navbar;