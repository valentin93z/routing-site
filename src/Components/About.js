import React from "react";
import '../Styles/About.css';

// import img
import arr3 from '../img/arr3.svg';
import arr4 from '../img/arr4.svg';

function About() {
    return (
        <div className="About">
            <div className="about-cover">
                <h1>About</h1>
                <div className="about-circles">
                    <div className="about-circle"></div>
                    <div className="about-circle"></div>
                    <div className="about-circle circle-gray"></div>
                </div>
            </div>
            <div className="about-fb">
                <div className="about-fb-1">
                    <div className="about-fb-text">
                        <h2>Mobility for the digital era</h2>
                        <p>Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.</p>
                    </div>
                    <div>
                        <div className="about-fb-circles-1">
                            <div className="about-fb-gray-circle-1"></div>
                            <img alt="" src={arr4} />
                            <div className="about-or-line"></div>
                        </div>
                    </div>
                </div>
                <div className="about-fb-2">
                    <div>
                        <div className="about-fb-circles-2">
                            <div className="about-fb-gray-circle-2"></div>
                            <img alt="" src={arr3} />
                        </div>
                    </div>
                    <div className="about-fb-text">
                        <h2>Better urban living</h2>
                        <p>We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;