import React from 'react';
import NavBar from './navbar'
import Counter from './counter'

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
            <Counter />
        </div>
    );
}

export default home;