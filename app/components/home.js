import React from 'react';

function home() {
    return (
        <div style={{display: 'flex'}}>
            <img style={{width: '100%', minWidth: '800px', height: 'auto', minHeight: '400px'}} src="https://i.imgur.com/03d0OQj.jpg" />
            <div id='homepage-banner'>
                <h2>Welcome to Dos Santos Apartment Homes</h2>
                <h6>Join the biggest family in Washington State!</h6>
            </div>
        </div>
    );
}

export default home;