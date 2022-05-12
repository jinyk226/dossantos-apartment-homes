import React from 'react';
import NavBar from '../navbar/navbar'
import Counter from '../counter'
import './home.css'

const title = {
    fontSize: '90px'
}

const subTitle = {
    fontSize: '48px'
}

function home() {
    return (
        <div>
            <NavBar pos='absolute' bgColor='transparent' />

            <div style={{display: 'flex'}}>
                <img id='img-banner' src="https://i.imgur.com/03d0OQj.jpg" />
                <div id='homepage-banner'>
                    <p style={title}>Welcome to Dos Santos Apartment Homes</p>
                    <br />
                    <p style={subTitle}>Join the biggest family in Washington State!</p>
                </div>
            </div>
            <Counter />
        </div>
    );
}

export default home;