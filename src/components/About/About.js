import React from 'react';
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

import './about.css'

const About = () => (
    <div>
        <Nav page={3} />

        <div className="about-container">
            <h1>About</h1>
        </div>
        <div className="about-sub-1">
            <div className="about-sub-2">
                <p>
                   SpaceX Launch Viewer is a website which utilitizes the <a href="https://github.com/r-spacex/SpaceX-API">SpaceX API</a> to
                   display information regarding launches, Elon Musk's Telsa Roadster, and and allows you to book your very own launch with SpaceX.
                </p>
                <p>
                    This website was created using React for the front-end and NodeJs for the server. All contents of the website is open-source
                    and can be found <a href="https://github.com/ThomasPapp/SpaceX-Launch-Viewer">here</a>.
                </p>
                <p className="about-sub-2-disclaimer">
                    Disclaimer: SpaceX Launch Viewer does NOT actually book launches with SpaceX! This website is purely for educational purposes
                </p>
            </div>
        </div>

    </div>
)

export default About;