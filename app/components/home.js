import React from 'react';
import NavBar from './navbar'

function home() {
    return (
        <div>
            <NavBar pos='absolute' bgColor='transparent' />

            <div style={{display: 'flex'}}>
                <img id='img-banner' src="https://i.imgur.com/03d0OQj.jpg" />
                <div id='homepage-banner'>
                    <h2>Welcome to Dos Santos Apartment Homes</h2>
                    <h6>Join the biggest family in Washington State!</h6>
                </div>
            </div>
        </div>
    );
}

export default home;