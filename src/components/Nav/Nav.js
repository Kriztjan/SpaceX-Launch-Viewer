import React from 'react'
import './nav.css'

const getClass = (page, index) => page === index ? "current" : "";

const Header = props => {
    return (
        <header className="container">
            <div className="container title">
                {/* <p>SpaceX Launch Viewer</p> */}
                <a href="#/about"><img src="https://www.spacex.com/sites/all/themes/spacex2012/logo.png" /></a>
            </div>
    
            <div className="container">
                <ul className="container nav-links">
                    <li className={getClass(props.page, 0)}><a href="#/roadster">Roadster</a></li>
                    <li className={getClass(props.page, 1)}><a href="#/launches">Launches</a></li>
                    <li className={getClass(props.page, 2)}><a href="#/bookings">Launch Bookings</a></li>
                    <li className={getClass(props.page, 3)}><a href="#/about">About</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;