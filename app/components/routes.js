import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Home from './home'
import NavBar from './navbar'
import AboutUs from './aboutUs'
import ContactUs from './contactUs'

const app = () => {
    return (
    <div>
        <Router>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
        </Router>
    </div>
  )
}


export default app