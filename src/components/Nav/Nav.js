import React from 'react'
import './nav.css'

const Header = () => (
    <header className="container">
        <div className="container title">
            <p>SpaceX Launch Viewer</p>
        </div>

        <div className="container">
            <ul className="container nav-links">
                <li>Roadster</li>
                <li>Launches</li>
                <li>Launch Bookings</li>
                <li className="current">About</li>
            </ul>
        </div>
    </header>
)

export default Header;